import { AppState } from 'state'
import { useAppSelector } from 'state/hooks'

export const useMintPhase = () => {
  return useAppSelector((state: AppState) => state.mintReducer.mintPhase)
}
