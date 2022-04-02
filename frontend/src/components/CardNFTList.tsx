import React, { FC, useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { CardStateType, IPurchase, ITokenItem } from '../lib/type'
import { NftListState, nftPurchaseReqState, nftPurchaseState } from '../state/nftState'
import { accountInfoState } from '../state/walletState'
import CardNFTItem from './CardNFTItem'

interface CardNFList {
  type: CardStateType
  dataFormat: string
}

const CardNFList: FC<CardNFList> = ({ type, dataFormat }) => {
  const [nftList, setNftList] = useRecoilState<ITokenItem[]>(NftListState)

  const accountInfo = useRecoilValue(accountInfoState)
  const setNftPurchaseReq = useSetRecoilState(nftPurchaseReqState)
  const nftPurchase = useRecoilValue<string>(nftPurchaseState(accountInfo.account))

  const handleDonation = (tokenId: number, price: number): void => {
    const req: IPurchase = {
      tokenId,
      price,
    }
    setNftPurchaseReq(req)
  }

  useEffect(() => {
    setNftList(nftList)
    console.log('nftList', nftList)
  }, [nftList, setNftList])

  useEffect(() => {
    console.log('nftPurchase', nftPurchase)
  }, [nftPurchase])
  return (
    <>
      {nftList.map((nft) => (
        <CardNFTItem key={nft.id} type={type} dataFormat={dataFormat} token={nft} handleDonation={handleDonation} />
      ))}
      {/* <CardNFT type={type} dataFormat={dataFormat} dataSource={dataSource} />
      <CardNFT type={type} dataFormat={dataFormat} dataSource={dataSource} /> */}
    </>
  )
}

export default CardNFList
