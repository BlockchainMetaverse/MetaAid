import React, { FC, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { tokenIds } from '../data/response'
import { CardStateType, IPurchase, ITokenItem } from '../lib/type'
import {
  NftItemReqTokenIdState,
  NftItemState,
  NftListState,
  nftPurchaseReqState,
  nftPurchaseState,
  TokenIdListState,
} from '../state/nftState'
import { accountInfoState } from '../state/walletState'
import CardNFTItem from './CardNFTItem'

interface CardNFList {
  type: CardStateType
  dataFormat: string
}

const CardNFList: FC<CardNFList> = ({ type, dataFormat }) => {
  const navigate = useNavigate()

  // success 위한 state
  const accountInfo = useRecoilValue(accountInfoState)
  const setNftPurchaseReq = useSetRecoilState(nftPurchaseReqState)
  const setNftItemReqTokenId = useSetRecoilState(NftItemReqTokenIdState)
  const nftPurchasedItem = useRecoilValue<IPurchase | null>(nftPurchaseState(accountInfo.account))

  const nftItem = useRecoilValue<ITokenItem | null>(NftItemState)

  // 모든 토큰 get을 위한 state
  const setTokenIdList = useSetRecoilState(TokenIdListState)
  const nftList = useRecoilValue(NftListState)

  const handleDonation = (tokenId: number, price: number): void => {
    const req: IPurchase = {
      tokenId,
      price,
    }
    setNftPurchaseReq(req)
  }

  const goDonationSuccess = useCallback((): void => {
    navigate('/donation-success')
  }, [navigate])

  useEffect(() => {
    if (type === CardStateType.sales) {
      setTokenIdList(tokenIds)
    }
  }, [type, setTokenIdList])

  useEffect(() => {
    if (!nftPurchasedItem) return
    setNftItemReqTokenId(nftPurchasedItem.tokenId)
  }, [nftPurchasedItem, setNftItemReqTokenId])

  useEffect(() => {
    console.log('nftList', nftList)
  }, [nftList])
  useEffect(() => {
    console.log('nftItem', nftItem)
    nftItem && goDonationSuccess()
  }, [goDonationSuccess, nftItem])
  return (
    <>
      {type === CardStateType.success && nftItem ? (
        <CardNFTItem
          type={type}
          dataFormat={dataFormat}
          token={nftItem}
          handleDonation={handleDonation}
        />
      ) : (
        nftList.map((nft) => (
          <CardNFTItem
            key={nft.id}
            type={type}
            dataFormat={dataFormat}
            token={nft}
            handleDonation={handleDonation}
          />
        ))
      )}
    </>
  )
}

export default CardNFList
