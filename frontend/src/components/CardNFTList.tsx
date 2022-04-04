import React, { FC, useEffect } from 'react'
import { useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValue } from 'recoil'
import { tokenIds } from '../data/response'
import { CardStateType } from '../lib/type'
import { NftListStateSelector, TokenIdListState } from '../state/nftState'
import CardNFTItem from './CardNFTItem'

interface CardNFList {
  type: CardStateType
  dataFormat: string
}

const CardNFList: FC<CardNFList> = ({ type, dataFormat }) => {
  // 모든 토큰 get을 위한 state
  const [tokenIdList, setTokenIdList] = useRecoilState(TokenIdListState)
  const nftList = useRecoilValue(NftListStateSelector)
  const refreshNftList = useRecoilRefresher_UNSTABLE(NftListStateSelector)

  useEffect(() => {
    // donation 페이지 일경우 NftList 강제 refresh
    type === 'sales' && setTokenIdList(tokenIds)
  }, [setTokenIdList, type])

  useEffect(() => {
    refreshNftList()
  }, [refreshNftList, tokenIdList])

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
