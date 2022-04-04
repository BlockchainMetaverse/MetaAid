import { atom, selectorFamily } from 'recoil'
import { tokenIds } from '../data/response'
import { CardStateType, IPurchase, ITokenItem, IByTokenIdPurchased, IUriData } from '../lib/type'
import { header } from '../lib/utils'
import { saleContract, web3 } from '../web3Config'
import { initialPurchase } from './initialState'
import { accountInfoState } from './walletState'

export const TokenIdListState = atom<number[]>({
  key: 'TokenIdListState',
  default: [],
})

// const getDetail = async (uri: string): Promise<IUriData> => {
//   const response = await fetch(`${uri}`, header)
//   const result = await response.json()
//   return result
// }

const getTokenList = async (tokenIds: number[]): Promise<ITokenItem[]> => {
  if (!tokenIds.length) return []
  try {
    const idList = tokenIds
    const tokenReq = idList.map(
      async (id) => await saleContract.methods.getMetaAidTokenData(id).call(),
    )
    const tokenRes = await Promise.all(tokenReq)
    const nftListReq = tokenRes.map(async (item, index) => {
      const uriReq = await fetch(`${item[0]}`, header)
      const uriRes: IUriData = await uriReq.json()
      const results: ITokenItem = {
        id: idList[index],
        uri: item[0],
        detail: uriRes,
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
}

const getUserTokenList = async (account: string): Promise<ITokenItem[]> => {
  try {
    const allTokenData: ITokenItem[] = await getTokenList(tokenIds)
    const tokenReq: [string[], string[]] = await saleContract.methods
      .getMetaAidTokens(account)
      .call()
    const userTokenIds = tokenReq[0]
    const purchasedTokens = tokenReq[1]
    const tokenData: IByTokenIdPurchased[] = userTokenIds.map((id, index) => ({
      [id]: purchasedTokens[index],
    }))
    console.log('tokenReq', tokenReq)
    console.log('allTokenData', allTokenData, 'tokenData', tokenData)
  } catch (error) {
    console.error(error)
  }
  return []
}

/* eslint-disable indent */
export const NftListStateSelector = selectorFamily<ITokenItem[], CardStateType>({
  key: 'NftListStateSelector',
  get:
    (type: CardStateType) =>
    async ({ get }): Promise<ITokenItem[]> => {
      const tokenIds = get(TokenIdListState)
      const { account } = get(accountInfoState)
      return type === 'profile' && account ? getUserTokenList(account) : getTokenList(tokenIds)
    },
  // set: ({ set }, newVale: number[]) => set(TokenIdListState, newVale),
})

// export const NftItemReqTokenIdState = atom<number>({
//   key: 'NftItemReqTokenIdState',
//   default: 0,
// })

// export const NftItemState = selector<ITokenItem | null>({
//   key: 'NftItemState',
//   get: async ({ get }): Promise<ITokenItem | null> => {
//     const tokenId = get(NftItemReqTokenIdState)
//     if (!tokenId) return null
//     try {
//       const tokenData = await saleContract.methods.getMetaAidTokenData(tokenId).call()
//       const uriRes = await fetch(`${tokenData[0]}`, header)
//       const uriReq: IUriData = await uriRes.json()
//       const results: ITokenItem = {
//         id: tokenId,
//         uri: tokenData[0],
//         detail: uriReq,
//         price: Number(web3.utils.fromWei(tokenData[1])),
//         remainTokens: Number(tokenData[2]),
//       }
//       return results
//     } catch (error) {
//       console.error(error)
//     }
//     return null
//   },
// })

export const nftPurchaseReqState = atom<IPurchase>({
  key: 'nftPurchaseReqState',
  default: initialPurchase,
})

/* eslint-disable indent */
export const NftPurchasedStateSelector = selectorFamily<IPurchase | null, string>({
  key: 'NftPurchasedStateSelector',
  get:
    (account: string) =>
    async ({ get }) => {
      const { tokenId, price } = get(nftPurchaseReqState)
      if (!tokenId) return null
      try {
        const response = await saleContract.methods
          .purchaseMetaAidToken(tokenId)
          .send({ from: account, value: web3.utils.toWei(String(price)) })
        return response.status ? { tokenId, price } : null
      } catch (error) {
        console.error(error)
      }
      return null
    },
})
