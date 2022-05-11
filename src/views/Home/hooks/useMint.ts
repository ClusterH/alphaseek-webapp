import { useCallback, useState } from 'react'

import { ethers } from 'ethers'

import { ALLOW_LIST_API } from 'config/constants'
import { notifyToast } from 'config/toast'
import { useGetMinterContract } from 'hooks'
import { useMintCount, useMintPhase, useMintWallet } from 'state/mint/hooks'
import { executeMint } from 'utils'
import { getSignatureAndNonce } from 'utils/api'

export const useMint = () => {
  const { option, wallet } = useMintWallet()
  const mintCount = useMintCount()
  const mintPhase = useMintPhase()
  const minterContract = useGetMinterContract(true, false)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleMint = useCallback(async () => {
    try {
      if (!minterContract) return

      let merkleProof: string[] = []
      if (mintPhase === 0) return
      else if (mintPhase === 3) merkleProof = [ethers.constants.HashZero]
      else {
        setIsLoading(true)
        const res = await fetch(ALLOW_LIST_API[mintPhase])
        const { proofs } = await res.json()
        const item = proofs.filter((item: { address: string; proof: string[] }) => item.address === wallet)

        if (item.length === 0) {
          notifyToast({ id: 'validate_address', type: 'error', content: 'Your address is not allowed to mint' })
          setIsLoading(false)
          return
        } else merkleProof = item[0].proof
      }

      const res = await getSignatureAndNonce(wallet, 1) // amount hard coded for now instead of using mintCount
      if (res) {
        const status = await executeMint(minterContract, wallet, res.nonce, res.signature, merkleProof)
        if (status) notifyToast({ id: 'mint', type: 'success', content: 'Mint success!' })
        else notifyToast({ id: 'mint_failed', type: 'error', content: 'Mint Failed!' })
      } else notifyToast({ id: 'signature_nonce', type: 'error', content: 'Faild to get Signature' })

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [mintPhase, minterContract, wallet])

  return { isLoading, handleMint }
}
