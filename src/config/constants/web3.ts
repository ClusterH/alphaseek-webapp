import ETHEREUM_ICON from 'assets/images/ethereum.svg'
import CLAIMS_ABI from 'config/abis/claims.json'
import FOUNDERS_PASS_ABI from 'config/abis/foundersPass.json'
import MINTER_ABI from 'config/abis/minter.json'

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

export const MINTER_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: '0x97674a205919D16264f698f576CF8Bf0Ec35B13b',
  [SupportedChainId.RINKEBY_TESTNET]: '0x0160b7AA8897782643765a40a25013A83CB344cE',
}

export const PASS_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: '0xCECa344cCa67170D1b224b91fa57Ce9eA0C05f5C',
  [SupportedChainId.RINKEBY_TESTNET]: '0x768eBd460a7f1521d92a6083045518BC65Fe050c',
}

export const CLAIMS_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: '0x23E25fD67092A04a261667F5EA9Cc00734B14585',
  [SupportedChainId.RINKEBY_TESTNET]: '0x5f2a82530c57aAc9CB2766528Eed9fe436cc90D2',
}

export const CONTRACT_ABIS = {
  MINTER: MINTER_ABI,
  PASS: FOUNDERS_PASS_ABI,
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
