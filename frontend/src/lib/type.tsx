const enum Align {
  left,
  center,
  right,
}

export type AlignType = keyof typeof Align

export const enum Wallet {
  META_MASK = 'META_MASK',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

export type WalletType = keyof typeof Wallet // META_MASK | WALLET_CONNECT

export interface WalletClassType {
  id: number
  type: WalletType
  title: string
}

export interface AccountInfoType {
  account: string
  active: boolean
  balance: number | null
}

export const cardState = {
  SALES: 'sales',
  SUCCESS: 'success',
  PROFILE: 'profile',
  HOME: 'home',
} as const

export type CardStateType = typeof cardState[keyof typeof cardState] // "sales" | "success" | "profile" | "home"

export interface InfoType {
  id: number
  name?: string
  imgFileName: string
  nickname: string
  position: string
  email: string
  snsList: SnsType[]
}

export interface SnsType {
  id: PlatformCodeEnum
  platform: PlatformEnum
  link: string
}

export const enum PlatformEnum {
  GITHUB = 'Github',
  DISCORD = 'Discord',
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  TELEGRAM = 'Telegram',
  YOUTUBE = 'Youtube',
  ROCKET = 'Rocket',
  LINKEDIN = 'Linkedin',
}

export const enum PlatformCodeEnum {
  GITHUB = 1,
  DISCORD = 2,
  FACEBOOK = 3,
  INSTAGRAM = 4,
  TWITTER = 5,
  TELEGRAM = 6,
  YOUTUBE = 7,
  ROCKET = 8,
  LINKEDIN = 9,
}

export const enum FileFormatEnum {
  PNG = 'png',
  JPG = 'jpg',
  SVG = 'svg',
}

export interface ImageInfoType {
  id: number
  fileName: string
  fileFormat: FileFormatEnum
}

const toastSeverity = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
} as const

export type ToastSeverityType = typeof toastSeverity[keyof typeof toastSeverity] // "error" | "warning" | "info" | "success"

export type ErrorType = {
  isOpen: boolean
  severity: ToastSeverityType
  message: string
  link?: string
}

export interface ITokenItem {
  id: number
  uri: string
  detail: IUriData
  price: number
  remainTokens: number
  purchasedTokens?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface IUriData {
  name: string
  description: string
  image: string
}

export interface IPurchase {
  tokenId: number
  price: number
}

export interface IUserTokenItem {
  // [key: string]: string
  tokenId: number
  purchasedTokens: number
}
