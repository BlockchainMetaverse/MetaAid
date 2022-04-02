import { AccountInfoType, IPurchase } from '../lib/type'

export const initialAccountInfo: AccountInfoType = {
  account: '',
  active: false,
  balance: null,
}

export const initialPurchase: IPurchase = {
  tokenId: 0,
  price: 0,
}
