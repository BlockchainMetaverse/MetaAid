import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE, useRecoilValue, useSetRecoilState } from 'recoil'
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

  const [reqState, setReqState] = useState(false)

  // 모든 토큰 get을 위한 state
  const setTokenIdList = useSetRecoilState(TokenIdListState)
  const nftList = useRecoilValue(NftListState)
  const refreshNftList = useRecoilRefresher_UNSTABLE(NftListState)

  const handleDonation = (tokenId: number, price: number): void => {
    const req: IPurchase = {
      tokenId,
      price,
    }
    setReqState(true) // 비동기로 기다리고 있기떄문에 지갑에서 수락, 거부후에 값 수정됨
    setNftPurchaseReq(req)
  }

  const goDonationSuccess = useCallback((): void => {
    navigate('/donation-success')
  }, [navigate])

  useEffect(() => {
    if (type === 'sales') {
      // donation 페이지 일경우 NftList 강제 refresh
      setTokenIdList(tokenIds)
      refreshNftList()
      return
    }
    // Todo: success 페이지 일경우 nftList reset
  }, [type, setTokenIdList, refreshNftList, setNftItemReqTokenId])

  useEffect(() => {
    if (!nftPurchasedItem) return
    setNftItemReqTokenId(nftPurchasedItem.tokenId)
  }, [nftPurchasedItem, setNftItemReqTokenId])

  useEffect(() => {
    reqState && nftItem && goDonationSuccess()
  }, [goDonationSuccess, nftItem, reqState])
  return (
    <>
      {type === 'success' && nftItem ? (
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
