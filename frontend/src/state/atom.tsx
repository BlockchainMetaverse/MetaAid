import { atom } from 'recoil'
import { AccountInfoType } from '../lib/type'
import { initialAccountInfo } from './initialState'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const accountInfoState = atom<AccountInfoType>({
  key: 'accountInfoState',
  default: initialAccountInfo,
  effects_UNSTABLE: [persistAtom],
})
