import {
  FileFormatEnum,
  ImageInfoType,
  InfoType,
  ITokenItem,
  PlatformCodeEnum,
  PlatformEnum,
  WalletClassType,
} from '../lib/type'
import { mintContractAddress } from '../web3Config'

export const data = {
  addressUk: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
}

export const walletList: WalletClassType[] = [
  {
    id: 1,
    type: 'META_MASK',
    title: 'MetaMask',
  },
  // {
  //   id: 2,
  //   type: 'WALLET_CONNECT',
  //   title: 'WalletConnect',
  // },
]

export const personInfoList: InfoType[] = [
  {
    id: 1,
    imgFileName: 'programmer_w.svg',
    nickname: 'Somi',
    position: 'FrontEnd',
    email: 'dasom228@gmail.com',
    snsList: [
      {
        id: PlatformCodeEnum.ROCKET,
        platform: PlatformEnum.ROCKET,
        link: 'https://www.rocketpunch.com/@dasom228',
      },
      {
        id: PlatformCodeEnum.GITHUB,
        platform: PlatformEnum.GITHUB,
        link: 'https://github.com/dasom222g',
      },
      {
        id: PlatformCodeEnum.YOUTUBE,
        platform: PlatformEnum.YOUTUBE,
        link: 'https://www.youtube.com/channel/UCw2v-EFHM2R_PidUq68_QIA',
      },
    ],
  },
  {
    id: 2,
    imgFileName: 'programmer_m.svg',
    nickname: 'h662',
    position: 'Smart Contract',
    email: 'h662@olbm.app',
    snsList: [
      {
        id: PlatformCodeEnum.INSTAGRAM,
        platform: PlatformEnum.INSTAGRAM,
        link: 'https://www.instagram.com/h662xzerocoke',
      },
      {
        id: PlatformCodeEnum.YOUTUBE,
        platform: PlatformEnum.YOUTUBE,
        link: 'https://www.youtube.com/channel/UCrAj5rJzY_YfLFKFwTQgUHg',
      },
    ],
  },
]
export const teamInfo: InfoType = {
  id: 1,
  nickname: 'Team Meta Aid',
  position: 'Blockchain',
  imgFileName: 'programmer_w.svg', // Todo
  email: 'admin@meta-aid.app',
  snsList: [
    {
      id: PlatformCodeEnum.TWITTER,
      platform: PlatformEnum.TWITTER,
      link: 'https://twitter.com/aid_meta',
    },
    {
      id: PlatformCodeEnum.GITHUB,
      platform: PlatformEnum.GITHUB,
      link: 'https://github.com/BlockchainMetaverse/MetaAid',
    },
    // {
    //   id: PlatformCodeEnum.LINKEDIN,
    //   platform: PlatformEnum.LINKEDIN,
    //   link: 'todo..',
    // },
  ],
}

export const warMainImage: ImageInfoType = {
  id: 1,
  fileName: 'war1',
  fileFormat: FileFormatEnum.PNG,
}
export const warSubImages: ImageInfoType[] = [
  {
    id: 2,
    fileName: 'war2',
    fileFormat: FileFormatEnum.PNG,
  },
  {
    id: 3,
    fileName: 'war3',
    fileFormat: FileFormatEnum.PNG,
  },
  {
    id: 4,
    fileName: 'war4',
    fileFormat: FileFormatEnum.PNG,
  },
  {
    id: 5,
    fileName: 'war5',
    fileFormat: FileFormatEnum.PNG,
  },
]

export const snsTitle = 'Stand with Ukraine'

export const tokenIds = [1, 2, 3]

// export const openSeaUri = `https://testnets.opensea.io/assets/mumbai/${mintContractAddress}`
export const openSeaUri = `https://opensea.io/assets/matic/${mintContractAddress}`

export const metaAidUri = 'https://www.meta-aid.app/'

export const staticNFTList: ITokenItem[] = [
  {
    id: 1,
    uri: 'https://olbm.mypinata.cloud/ipfs/QmYghfP9jFwgK3XXL6TzHb5pC4Y7sGPxtViLQVJoGjC8hP',
    detail: {
      name: 'Meta Aid Token - UKR',
      description:
        'We want our team to stand in Ukraine and help. We would like you to participate in donating to Ukraine in cryptocurrency.',
      image: 'https://olbm.mypinata.cloud/ipfs/QmTtd8Jy1dh3jLBL9kgpZzYGVcfnXgm6sGtzaWkqkuQCHw',
    },
    price: 1000,
    remainTokens: 0,
  },
  {
    id: 2,
    uri: 'https://olbm.mypinata.cloud/ipfs/QmQM2wShzrFy1oZDc5eosVkBBwcvD9asVw5575vX38PU26',
    detail: {
      name: 'Meta Aid Token - Gold',
      description:
        'We want our team to stand in Ukraine and help. We would like you to participate in donating to Ukraine in cryptocurrency.',
      image: 'https://olbm.mypinata.cloud/ipfs/QmcD88dkLKXK9JMRxDrq32CzQQAcHTrkNoAJ1LHkh9o5K5',
    },
    price: 500,
    remainTokens: 0,
  },
  {
    id: 3,
    uri: 'https://olbm.mypinata.cloud/ipfs/QmTzSrSoFPSpXba3cR6mPrjtvLryQiCkfcrwVg1Fyxmmqg',
    detail: {
      name: 'Meta Aid Token - Silver',
      description:
        'We want our team to stand in Ukraine and help. We would like you to participate in donating to Ukraine in cryptocurrency.',
      image: 'https://olbm.mypinata.cloud/ipfs/QmUds5CW18MPhwBdL9b5XUhfsUsQVTJc1Rrphu5Tv9DU71',
    },
    price: 125,
    remainTokens: 0,
  },
]

export const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://matic-mainnet-full-rpc.bwarelabs.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: 'Matic Mumbai',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
}
