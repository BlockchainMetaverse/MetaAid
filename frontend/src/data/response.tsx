import { t } from 'i18next'
import {
  FileFormatEnum,
  ImageInfoType,
  InfoType,
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
    title: t('wallet.meta_mask'),
  },
  // {
  //   id: 2,
  //   type: 'WALLET_CONNECT',
  //   title: t('wallet.wallet_connect'),
  // },
]

export const personInfoList: InfoType[] = [
  {
    id: 1,
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
    {
      id: PlatformCodeEnum.LINKEDIN,
      platform: PlatformEnum.LINKEDIN,
      link: 'todo..',
    },
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

export const tokenIds = [1, 2, 3]
// export const openSeaUri = `https://testnets.opensea.io/assets/mumbai/${mintContractAddress}`
export const openSeaUri = `https://opensea.io/assets/matic/${mintContractAddress}`

export const metaAidUri = 'https://www.meta-aid.app/'
