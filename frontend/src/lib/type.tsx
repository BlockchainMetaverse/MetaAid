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

export const enum CardStateType {
  sales,
  view,
}

export interface InfoType {
  id: number
  name?: string
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
  GITHUB = 'github',
  DISCORD = 'discord',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  TELEGRAM = 'telegram',
  YOUTUBE = 'youtube',
  ROCKET = 'rocket',
  LINKEDIN = 'linkedin',
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
