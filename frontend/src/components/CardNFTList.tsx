import React, { FC, useEffect } from 'react'
import { useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValue } from 'recoil'
import { tokenIds } from '../data/response'
import { CardStateType } from '../lib/type'
import { NftListStateSelector, TokenIdListState } from '../state/nftState'
import { accountInfoState } from '../state/walletState'
import CardNFTItem from './CardNFTItem'

interface CardNFList {
  type: CardStateType
  dataFormat: string
}

const CardNFList: FC<CardNFList> = ({ type, dataFormat }) => {
  const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState)

  // 모든 토큰 get을 위한 state
  const [tokenIdList, setTokenIdList] = useRecoilState(TokenIdListState)
  const nftList = useRecoilValue(NftListStateSelector(type))
  const refreshNftList = useRecoilRefresher_UNSTABLE(NftListStateSelector(type))

  useEffect(() => {
    // donation 페이지 일경우 NftList 강제 refresh
    type === 'sales' && setTokenIdList(tokenIds)
    type === 'profile' && setAccountInfo(accountInfo)
  }, [setTokenIdList, setAccountInfo, type, accountInfo])

  useEffect(() => {
    refreshNftList()
  }, [refreshNftList, tokenIdList])

  useEffect(() => {
    refreshNftList()
  }, [refreshNftList, accountInfo])

  // view
  return (
    <>
      {nftList.map((nft) => (
        <CardNFTItem key={nft.id} type={type} dataFormat={dataFormat} token={nft} />
      ))}
    </>
  )
}

export default CardNFList
