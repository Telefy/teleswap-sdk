import JSBI from 'jsbi'

export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  ARBITRUM_KOVAN = 144545313136048,
  ARBITRUM_ONE = 42161,
  CELO = 42220,
  FUSE = 122,
}

export const FACTORY_ADDRESS = {
  [SupportedChainId.MAINNET]: '0xEe3f3E41c551bc51cF389145Eb6D9BDcBA0Ec66d',
  [SupportedChainId.ROPSTEN]: '0x678e6a7Ebf554677E7387784ebD46047D05eC13e',
  [SupportedChainId.RINKEBY]: '0x678e6a7Ebf554677E7387784ebD46047D05eC13e',
  [SupportedChainId.GOERLI]: '0x678e6a7Ebf554677E7387784ebD46047D05eC13e',
  [SupportedChainId.KOVAN]: '0x678e6a7Ebf554677E7387784ebD46047D05eC13e',
  [SupportedChainId.ARBITRUM_ONE]: '0x678e6a7Ebf554677E7387784ebD46047D05eC13e',
}

export const INIT_CODE_HASH = {
  [SupportedChainId.MAINNET]: '0x8e1c747fd9097b35f4cfef316b3c28e06a51ae16eb6f8f11ea04b01d17c81ad5',
  [SupportedChainId.ROPSTEN]: '0x90b582469366b0d50b141c90687f7cfe8c699dcff2712952d08c9ff7535e66af',
  [SupportedChainId.RINKEBY]: '0x90b582469366b0d50b141c90687f7cfe8c699dcff2712952d08c9ff7535e66af',
  [SupportedChainId.GOERLI]: '0x90b582469366b0d50b141c90687f7cfe8c699dcff2712952d08c9ff7535e66af',
  [SupportedChainId.KOVAN]: '0x90b582469366b0d50b141c90687f7cfe8c699dcff2712952d08c9ff7535e66af',
  [SupportedChainId.ARBITRUM_ONE]: '0x90b582469366b0d50b141c90687f7cfe8c699dcff2712952d08c9ff7535e66af',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
// export const _9973 = JSBI.divide(JSBI.BigInt(9973), JSBI.BigInt(10))
export const _9973 = JSBI.BigInt(9973)
export const _1000 = JSBI.BigInt(1000)
