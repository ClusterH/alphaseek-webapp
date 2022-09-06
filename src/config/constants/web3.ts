import ETHEREUM_ICON from 'assets/images/ethereum.svg'
import CLAIMS_ABI from 'config/abis/claims.json'
import FOUNDERS_PASS_ABI from 'config/abis/foundersPass.json'

export enum SupportedChainId {
  MAIN = 1,
  RINKEBY_TESTNET = 4,
}

export const DEFAULT_CHAIN_ID = Number(process.env.REACT_APP_CHAIN_ID ?? '1')

export const NETWORK_INDICATOR: { [chainId: number]: { name: 'Ethereum' | 'Rinkeby'; icon: string } } = {
  [SupportedChainId.MAIN]: { name: 'Ethereum', icon: ETHEREUM_ICON },
  [SupportedChainId.RINKEBY_TESTNET]: { name: 'Rinkeby', icon: ETHEREUM_ICON },
}

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  WalletLink = 'walletlink',
}

export const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.MAIN, SupportedChainId.RINKEBY_TESTNET]

type AddressMap = { [chainId: number]: string }

export const FOUNDERS_PASS_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: '0x97674a205919D16264f698f576CF8Bf0Ec35B13b',
  [SupportedChainId.RINKEBY_TESTNET]: '0x01943ff8638E9b89a545e8746CDE5880f824A093',
}

export const CLAIMS_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: '0x23E25fD67092A04a261667F5EA9Cc00734B14585',
  [SupportedChainId.RINKEBY_TESTNET]: '0x9914BE7357890a66E70DBE4A3f8CC665bC02c274',
}

export const CONTRACT_ABIS = {
  FOUNDERS_PASS: FOUNDERS_PASS_ABI,
  CLAIMS: CLAIMS_ABI,
}

const ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY
const ALCHEMY_KEY_RINKEBY = process.env.REACT_APP_ALCHEMY_KEY_RINKEBY

export const NETWORK_URLS: {
  [chainId in number]: string
} = {
  [SupportedChainId.MAIN]: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.RINKEBY_TESTNET]: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY_RINKEBY}`,
}

export const POLLING_INTERVAL = 30000
export const GAS_PRICE_POLLING_INTERVAL = 60000
export const connectorLocalStorageKey = 'connectorId'
export const walletLocalStorageKey = 'wallet'
