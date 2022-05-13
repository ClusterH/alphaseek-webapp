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

export interface IUtility {
  id: number
  title: string
  detail: string
  iconUrl: string
}

export interface ITeamItem {
  id: number
  name: string
  avatar: string
  role?: string
  detail?: string
  twitter?: string
}

export type TPeriod = 'Monthly' | 'Annual'

export type TCompetition = 'alphaseek' | 'binance' | 'ftx' | 'bybit' | 'crypto' | 'uniswap'

export interface IComparisonData {
  min: number
  max: number | undefined
  maker: number
  taker: number
}
