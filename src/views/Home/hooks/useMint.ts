import { useCallback, useEffect, useMemo, useState } from 'react'

import { ethers } from 'ethers'

import { ALLOW_LIST_API } from 'config/constants'
import { notifyToast, NOTIFY_MESSAGES } from 'config/toast'
import { useActiveWeb3React, useCheckMintable, useGetFoundersPassContract } from 'hooks'
import { useMintCount, useMintPhase, useMintPrice, useMintWallet } from 'state/mint/hooks'
import { useWalletBalance } from 'state/web3/hooks'
import { convertToBigNumber, estimateGas, executeMint, getWalletCount, getWalletLimit } from 'utils'
import { getSignatureAndNonce } from 'utils/api'

export const useIsAllowedToMint = () => {
  const { option, wallet } = useMintWallet()
  const { account } = useActiveWeb3React()
  const { ethBalance } = useWalletBalance()
  const foundersPassContract = useGetFoundersPassContract(true, false)

  const [isAllowed, setIsAllowed] = useState(false)
  const [walletLimit, setWalletLimit] = useState(0)
  const [walletCount, setWalletCount] = useState(0)

  const handleIsAllowedToMint = useCallback(async () => {
    try {
      if (!foundersPassContract || !account) return

      const mintWallet = option === 'cold' ? wallet : account
      // We will check limit and count before doing Mint
      const limit = await getWalletLimit(foundersPassContract, mintWallet)
      const count = await getWalletCount(foundersPassContract, mintWallet)

      setWalletLimit(limit)
      setWalletCount(count)

      if (limit - count <= 0) {
        notifyToast({ id: 'mint_limited', type: 'error', content: NOTIFY_MESSAGES.MINTED_LIMITED })
        setIsAllowed(false)

        return
      }

      setIsAllowed(true)
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ethBalance])

  useEffect(() => {
    handleIsAllowedToMint()
  }, [handleIsAllowedToMint])

  return { isAllowed, walletLimit, walletCount }
}

export const useMint = () => {
  const { option, wallet } = useMintWallet()
  const { account } = useActiveWeb3React()
  const { ethBalance } = useWalletBalance()
  const { handleIsMintable } = useCheckMintable()

  const price = useMintPrice()
  const mintCount = useMintCount()
  const mintPhase = useMintPhase()
  const foundersPassContract = useGetFoundersPassContract(true, false)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isMintSuccess, setIsMintSuccess] = useState<boolean>(false)
  const [txHash, setTxHash] = useState<string>('')

  const mintPrice = useMemo(() => ethers.utils.formatEther(price), [price])

  const handleMint = useCallback(async () => {
    try {
      if (!foundersPassContract || !account) return

      const mintWallet = option === 'cold' ? wallet : account

      setIsLoading(true)

      const isMintable = await handleIsMintable(mintWallet, option === 'cold', mintCount)

      if (isMintable === false) return

      let merkleProof: string[] = []
      if (mintPhase === 0) return
      else if (mintPhase === 3) merkleProof = [ethers.constants.HashZero]
      else {
        const res = await fetch(ALLOW_LIST_API[mintPhase])
        const { proofs } = await res.json()
        const item = proofs.filter((item: { address: string; proof: string[] }) => item.address === mintWallet)

        if (item.length === 0) {
          setIsLoading(false)
          return
        } else merkleProof = item[0].proof
      }

      const res = await getSignatureAndNonce(account, mintCount)
      if (res) {
        const totalPriceToPay = convertToBigNumber(mintCount.toString(), 0).mul(price)
        const gas = await estimateGas(
          foundersPassContract,
          'mint',
          [mintWallet, mintCount, res.nonce, res.signature, merkleProof, { value: totalPriceToPay }],
          3000
        )
        const { status, txHash } = await executeMint(
          foundersPassContract,
          mintWallet,
          mintCount,
          res.nonce,
          res.signature,
          merkleProof,
          totalPriceToPay,
          gas
        )
        if (status) {
          setIsMintSuccess(true)
          setTxHash(txHash)
        } else notifyToast({ id: 'mint_failed', type: 'error', content: NOTIFY_MESSAGES.MINT_FAILED })
      } else notifyToast({ id: 'signature_nonce', type: 'error', content: NOTIFY_MESSAGES.SIGNATURE_FAILED })

      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
      // To do ----- should be able to make readable message for errors
      notifyToast({ id: 'mint_failed', type: 'error', content: NOTIFY_MESSAGES.FAILED_TRANSACTION })
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [foundersPassContract, account, option, wallet, handleIsMintable, mintCount, mintPhase, price])

  return { mintPhase, mintCount, mintPrice, ethBalance, isLoading, isMintSuccess, txHash, handleMint }
}
