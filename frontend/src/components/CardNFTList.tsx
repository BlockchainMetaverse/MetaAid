import React, { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValue } from 'recoil'
import { tokenIds } from '../data/response'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'
import { NftListStateSelector, TokenIdListState } from '../state/nftState'
import { accountInfoState } from '../state/walletState'
import CardNFTItem from './CardNFTItem'
import ItemEmpty from './ItemEmpty'
import Share from './Share'
import ShareCampain from './ShareCampain'

interface CardNFList {
  type: CardStateType
  dataFormat: string
}

const CardNFList: FC<CardNFList> = ({ type, dataFormat }) => {
  const { t } = useTranslation()
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
  }, [refreshNftList, tokenIdList, accountInfo])

  // view
  return (
    <>
      {type === 'profile' && !nftList.length ? (
        <div className="w-full text-center">
          <ItemEmpty
            mainTitle={t('profile.empty_main_title')}
            subTitle={t('profile.empty_sub_title')}
            color="white"
          />
        </div>
      ) : (
        <>
          {nftList.map((nft) => (
            <CardNFTItem key={nft.id} type={type} dataFormat={dataFormat} token={nft} />
          ))}
        </>
      )}
      {type !== 'sales' && !!nftList.length && (
        <div>
          <ShareCampain
            title={t('donation.sns_title')}
            hashtag={t('donation.sns_hashtag')}
            type={type}
          />
          <div className={`${style.contentInterval} text-center mx-auto`}>
            <Share hashtag={t('donation.sns_hashtag')} />
          </div>
        </div>
      )}
    </>
  )
}

export default CardNFList
