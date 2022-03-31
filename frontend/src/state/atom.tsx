import { atom } from 'recoil'
import { AccountInfoType } from '../lib/type'
import { initialAccountInfo } from './initialState'

export const accountInfoState = atom<AccountInfoType>({
  key: 'accountInfoState',
  default: initialAccountInfo,
})
