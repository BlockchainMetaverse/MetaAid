import { t } from 'i18next'
import {
  FileFormatEnum,
  ImageInfoType,
  InfoType,
  PlatformCodeEnum,
  PlatformEnum,
  WalletClassType,
} from '../lib/type'

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
    email: 'h662hongsunghyun@gmail.com',
    snsList: [
      {
        id: PlatformCodeEnum.INSTAGRAM,
        platform: PlatformEnum.INSTAGRAM,
        link: 'https://www.instagram.com/puddingi228',
      },
      {
        id: PlatformCodeEnum.YOUTUBE,
        platform: PlatformEnum.YOUTUBE,
        link: 'https://www.youtube.com/channel/UCw2v-EFHM2R_PidUq68_QIA',
      },
    ],
  },
]

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
