import { isProd } from '@/utils'

export default {
  networkURL: isProd()? 'wss://mainnet-rpc.dexon.org/ws': 'ws://localhost:8545',
  networkID: isProd()? 237: '*',
  explorerHost: 'https://dexonscan.app',
  walletVar: 'dexon',
}
