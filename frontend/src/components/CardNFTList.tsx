import React, { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { CardStateType, ITokenItem } from '../lib/type'
import { NftListState } from '../state/nftState'
import CardNFTItem from './CardNFTItem'

interface CardNFList {
  type: CardStateType
  dataFormat: string
}

const CardNFList: FC<CardNFList> = ({ type, dataFormat }) => {
  const [nftList, setNftList] = useRecoilState<ITokenItem[]>(NftListState)

  useEffect(() => {
    setNftList(nftList)
    console.log('nftList', nftList)
  }, [nftList, setNftList])
  return (
    <>
      {nftList.map((nft) => (
        <CardNFTItem key={nft.id} type={type} dataFormat={dataFormat} token={nft} />
      ))}
      {/* <CardNFT type={type} dataFormat={dataFormat} dataSource={dataSource} />
      <CardNFT type={type} dataFormat={dataFormat} dataSource={dataSource} /> */}
    </>
  )
}

export default CardNFList
