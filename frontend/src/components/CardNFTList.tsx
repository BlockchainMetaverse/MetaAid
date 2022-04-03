import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE, useRecoilValue, useSetRecoilState } from 'recoil'
import { tokenIds } from '../data/response'
import { CardStateType, IPurchase } from '../lib/type'
import {
  NftListStateSelector,
  NftPurchasedStateSelector,
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
  // const setNftPurchaseReq = useSetRecoilState<IPurchase>(nftPurchaseReqState)
  const nftPurchasedItem = useRecoilValue<IPurchase | null>(
    NftPurchasedStateSelector(accountInfo.account),
  )

  const [reqState, setReqState] = useState(false)

  // 모든 토큰 get을 위한 state
  const setTokenIdList = useSetRecoilState(TokenIdListState)
  const nftList = useRecoilValue(NftListStateSelector)
  const refreshNftList = useRecoilRefresher_UNSTABLE(NftListStateSelector)

  const goDonationSuccess = useCallback((): void => {
    navigate('/donation-success')
  }, [navigate])

  const handleDonation = (): void => {
    setReqState(true)
  }

  useEffect(() => {
    if (type === 'sales') {
      // donation 페이지 일경우 NftList 강제 refresh
      setTokenIdList(tokenIds)
      refreshNftList()
      return
    }
  }, [type, setTokenIdList, refreshNftList])

  useEffect(() => {
    if (!nftPurchasedItem) return
    type === 'success' && setTokenIdList([nftPurchasedItem.tokenId])
  }, [nftPurchasedItem, type, setTokenIdList])

  useEffect(() => {
    reqState && nftPurchasedItem && goDonationSuccess()
  }, [nftPurchasedItem, reqState, goDonationSuccess])

  // view
  return (
    <>
      {nftList.map((nft) => (
        <CardNFTItem
          key={nft.id}
          type={type}
          dataFormat={dataFormat}
          token={nft}
          selectedItem={handleDonation}
        />
      ))}
    </>
  )
}

export default CardNFList
