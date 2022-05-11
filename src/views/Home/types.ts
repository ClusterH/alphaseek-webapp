export type TMintClaimOption = 'mint' | 'claim'

export enum MintPhaseStatus {
  paused,
  privateMint,
  waitlistMint,
  publicMint,
}

export enum MintPanelStatus {
  counterPanel,
  walletSelection,
  coldWalletInput,
  mint,
}

export interface IMintPanelProps {
  panelStatus: MintPanelStatus
  handlePanelStatus: (status: MintPanelStatus) => void
}
