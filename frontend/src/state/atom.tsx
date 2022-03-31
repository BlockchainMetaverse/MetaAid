import { atom } from 'recoil'
import { AccountInfoType } from '../lib/type'

const initialAccountInfo: AccountInfoType = {
  account: '',
  active: false,
  balance: null,
}

export const accountInfoState = atom<AccountInfoType>({
  key: 'accountInfoState',
  default: initialAccountInfo,
})
