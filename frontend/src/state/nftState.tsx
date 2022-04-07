import { atom, selectorFamily } from 'recoil'
import { staticNFTList, tokenIds } from '../data/response'
import { CardStateType, IPurchase, ITokenItem, IUserTokenItem, IUriData } from '../lib/type'
import { header } from '../lib/utils'
import { saleContract, web3 } from '../web3Config'
import { initialPurchase } from './initialState'
import { accountInfoState } from './walletState'

export const TokenIdListState = atom<number[]>({
  key: 'TokenIdListState',
  default: [],
})

export const ErrorState = atom<string>({
  key: 'ErrorState',
  default: '',
})

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

const getOpenseaTokenList = async (): Promise<ITokenItem[]> => {
  return staticNFTList
  // try {
  //   if (!window.ethereum) return []
  //   // polygon 네트워크로 switch
  //   await window.ethereum.request({
  //     method: 'wallet_addEthereumChain',
  //     params: [
  //       {
  //         ...networks['polygon'],
  //       },
  //     ],
  //   })
  //   return await getTokenList(tokenIds)
  // } catch (err) {
  //   console.error('err', err)
  //   throw err
  // }
  // return []
}

const getUserTokenList = async (account: string): Promise<ITokenItem[]> => {
  try {
    const allTokenList: ITokenItem[] = await getTokenList(tokenIds)
    const tokenReq: [string[], string[]] = await saleContract.methods
      .getMetaAidTokens(account)
      .call()
    const userTokenIds = tokenReq[0]
    const purchasedTokens = tokenReq[1]
    const filteredtokenData: IUserTokenItem[] = userTokenIds
      .map((id, index) => ({
        tokenId: Number(id),
        purchasedTokens: Number(purchasedTokens[index]),
      }))
      .filter((token) => token.purchasedTokens)
    if (!filteredtokenData.length) return []
    let resultData: ITokenItem[] = []
    filteredtokenData.forEach((filterToken) => {
      const targetItem = allTokenList.find(
        (token) => token.id === filterToken.tokenId,
      ) as ITokenItem
      targetItem.purchasedTokens = filterToken.purchasedTokens
      resultData = [...resultData, targetItem]
    })
    return resultData
  } catch (error) {
    console.error(error)
  }
  return []
}

/* eslint-disable indent */
export const NftListStateSelector = selectorFamily<ITokenItem[], CardStateType>({
  key: 'NftListStateSelector',
  get: (type: CardStateType) => async ({ get }): Promise<ITokenItem[]> => {
    const tokenIds = get(TokenIdListState)
    const { account } = get(accountInfoState)
    return type === 'profile' && account
      ? getUserTokenList(account)
      : type === 'home'
      ? getOpenseaTokenList()
      : getTokenList(tokenIds)
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
  get: (account: string) => async ({ get }) => {
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
