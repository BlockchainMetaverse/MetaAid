import { atom, selector, selectorFamily } from 'recoil'
import { tokenIds } from '../data/response'
import { IPurchase, ITokenItem, IUriData } from '../lib/type'
import { header } from '../lib/utils'
import { saleContract, web3 } from '../web3Config'
import { initialPurchase } from './initialState'

const TokenIdListState = atom<number[]>({
  key: 'TokenIdListState',
  default: [],
})

// const getDetail = async (uri: string): Promise<IUriData> => {
//   const response = await fetch(`${uri}`, header)
//   const result = await response.json()
//   return result
// }

export const NftListState = selector<ITokenItem[]>({
  key: 'NftListState',
  get: async ({ get }): Promise<ITokenItem[]> => {
    try {
      const idList = get(TokenIdListState)
      const tokenReq = idList.map(async (id) => await saleContract.methods.getMetaAidTokenData(id).call())
      const tokenRes = await Promise.all(tokenReq)
      const nftListReq = tokenRes.map(async (item, index) => {
        const uriResponse = await fetch(`${item[0]}`, header)
        const uriResult: IUriData = await uriResponse.json()
        console.log('price', item[1])
        const results: ITokenItem = {
          id: idList[index],
          uri: item[0],
          detail: uriResult,
          price: Number(web3.utils.fromWei(item[1])),
          remainTokens: Number(item[2]),
        }
        return results
      })
      const nftListRes: ITokenItem[] = await Promise.all(nftListReq)
      return nftListRes
    } catch (error) {
      console.error(error)
    }
    return []
  },
  set: ({ set }) => set(TokenIdListState, tokenIds),
})

export const nftPurchaseReqState = atom<IPurchase>({
  key: 'nftPurchaseReqState',
  default: initialPurchase,
})

/* eslint-disable indent */
export const nftPurchaseState = selectorFamily<string, string>({
  key: 'nftPurchaseState',
  get:
    (account: string) =>
    async ({ get }) => {
      const { tokenId, price } = get(nftPurchaseReqState)
      if (!tokenId) return ''
      console.log('nftPurchaseReqState', tokenId, price)
      console.log('web3.utils.toWei(String(price))', web3.utils.toWei(String(price)))
      try {
        const response = await saleContract.methods.purchaseMetaAidToken(tokenId).send({ from: account, value: web3.utils.toWei(String(price)) })
        console.log('response', response)
        return response.status
      } catch (error) {
        console.error(error)
      }
    },
})
