import { useCallback, useEffect, useMemo, useState } from 'react'

import { ethers } from 'ethers'

import { ALLOW_LIST_API } from 'config/constants'
import { notifyToast } from 'config/toast'
import { useActiveWeb3React, useGetMinterContract } from 'hooks'
import { useMintCount, useMintPhase, useMintPrice, useMintWallet } from 'state/mint/hooks'
import { useWalletBalance } from 'state/web3/hooks'
import { estimateGas, executeMint, getWalletCount, getWalletLimit } from 'utils'
import { getSignatureAndNonce } from 'utils/api'

export const useIsAllowedToMint = () => {
  const { option, wallet } = useMintWallet()
  const { account } = useActiveWeb3React()
  const mintPrice = useMintPrice()
  const { ethBalance } = useWalletBalance()
  const minterContract = useGetMinterContract(true, false)

  const [isAllowed, setIsAllowed] = useState(false)
  const [walletLimit, setWalletLimit] = useState(0)
  const [walletCount, setWalletCount] = useState(0)

  const handleIsAllowedToMint = useCallback(async () => {
    try {
      if (!minterContract || !account) return

      const mintWallet = option === 'cold' ? wallet : account
      // We will check limit and count before doing Mint
      const limit = await getWalletLimit(minterContract, mintWallet)
      const count = await getWalletCount(minterContract, mintWallet)

      setWalletLimit(limit)
      setWalletCount(count)

      if (Number(ethBalance) < Number(ethers.utils.formatEther(mintPrice))) {
        notifyToast({ id: 'insufficient_balance', type: 'error', content: 'Connected Wallet have not enough balance to Mint' })
        setIsAllowed(false)
        return
      }

      if (limit - count <= 0) {
        notifyToast({ id: 'mint_limited', type: 'error', content: 'Your address limited to mint, please use another one' })
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

  const price = useMintPrice()
  const mintCount = useMintCount()
  const mintPhase = useMintPhase()
  const minterContract = useGetMinterContract(true, false)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isMintSuccess, setIsMintSuccess] = useState<boolean>(false)
  const [txHash, setTxHash] = useState<string>('')

  const mintPrice = useMemo(() => ethers.utils.formatEther(price), [price])

  const handleMint = useCallback(async () => {
    try {
      if (!minterContract || !account) return

      const mintWallet = option === 'cold' ? wallet : account

      setIsLoading(true)

      let merkleProof: string[] = []
      if (mintPhase === 0) return
      else if (mintPhase === 3) merkleProof = [ethers.constants.HashZero]
      else {
        const res = await fetch(ALLOW_LIST_API[mintPhase])
        const { proofs } = await res.json()
        const item = proofs.filter((item: { address: string; proof: string[] }) => item.address === mintWallet)

        if (item.length === 0) {
          notifyToast({ id: 'validate_address', type: 'error', content: 'Your address is not allowed to mint' })
          setIsLoading(false)
          return
        } else merkleProof = item[0].proof
      }

      const res = await getSignatureAndNonce(account, mintCount)
      if (res) {
        const gas = await estimateGas(minterContract, 'mint', [mintWallet, res.nonce, res.signature, merkleProof, { value: price }], 3000)
        const { status, txHash } = await executeMint(minterContract, mintWallet, res.nonce, res.signature, merkleProof, price, gas)
        if (status) {
          setIsMintSuccess(true)
          setTxHash(txHash)
        } else notifyToast({ id: 'mint_failed', type: 'error', content: 'Mint Failed!' })
      } else notifyToast({ id: 'signature_nonce', type: 'error', content: 'Failed to get Signature' })

      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
      // To do ----- should be able to make readable message for errors
      notifyToast({ id: 'mint_failed', type: 'error', content: 'Error Occured, please check console' })
      setIsLoading(false)
    }
  }, [account, mintCount, mintPhase, minterContract, option, price, wallet])

  return { mintPhase, mintCount, mintPrice, ethBalance, isLoading, isMintSuccess, txHash, handleMint }
}
