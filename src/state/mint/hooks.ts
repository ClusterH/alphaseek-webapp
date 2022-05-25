import { AppState } from 'state'
import { useAppSelector } from 'state/hooks'

export const useMintPhase = () => {
  return useAppSelector((state: AppState) => state.mintReducer.mintPhase)
}

export const useMintCount = () => {
  return useAppSelector((state: AppState) => state.mintReducer.mintCount)
}

export const useMintWallet = () => {
  return useAppSelector((state: AppState) => state.mintReducer.mintWallet)
}

export const useMintPrice = () => {
  return useAppSelector((state: AppState) => state.mintReducer.mintPrice)
}

export const usePanelStatus = () => {
  return useAppSelector((state: AppState) => state.mintReducer.panelStatus)
}
