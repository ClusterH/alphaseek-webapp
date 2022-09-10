import { SupportedChainId } from './web3'

export const BASE_IPFS_URL = 'https://ipfs.io/ipfs/'

export const ALLOW_LIST_API: { [key: number]: { 1: string; 2: string } } = {
  [SupportedChainId.MAIN]: {
    1: 'https://alphaseek-allowlist-api.s3.us-east-2.amazonaws.com/allowlist-private.json',
    2: 'https://alphaseek-allowlist-api.s3.us-east-2.amazonaws.com/allowlist-waitlist.json',
  },
  [SupportedChainId.RINKEBY_TESTNET]: {
    1: 'https://alphaseek-allowlist-api.s3.us-east-2.amazonaws.com/allowlist-private-testnet.json',
    2: 'https://alphaseek-allowlist-api.s3.us-east-2.amazonaws.com/allowlist-waitlist-testnet.json',
  },
}

export const SIGNATURE_RELAY_API = 'https://us-central1-alphaseek-signature-relay.cloudfunctions.net/app/signature'

export const ALPHA_SEEK_URL = 'https://alphaseek.io'
export const ALPHA_SEEK_TWITTER = 'https://twitter.com/Alphaseek_io'
export const ALPHA_SEEK_DISCORD = 'https://discord.gg/AzJ3w6ypWR'
