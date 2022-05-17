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

export type TComparison = 'alphaseek' | 'binance' | 'ftx' | 'bybit' | 'crypto' | 'uniswap'
export type TFeeTypes = 'spot' | 'future' | 'swap'

export interface IComparisonData {
  min: number
  max: number | undefined
  maker: number
  taker: number
}

export interface IFAQItem {
  id: number
  title: string
  description: string
}
