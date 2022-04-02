import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CardNFTItem from '../components/CardNFTItem'
import { FireCracker } from '../components/FireCracker'
import Share from '../components/Share'
import SuccessCard from '../components/SuccessCard'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'
import Button from './../components/Button'

const DonationSuccess: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="pt-4 md:pt-6">
      <FireCracker />
      <div data-aos="fade-up" className={`max-w-2xl mx-auto ${style.contentInterval}`}>
        <SuccessCard />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className={`${style.contentInterval} pb-0 md:pb-0 max-w-2xl mx-auto`}>
        {/* <CardNFTItem
          type={CardStateType.view}
          dataFormat={'image'}
          dataSource={'./images/temp/1.png'}
        /> */}
        <p className="title tracking-tight font-black text-sm md:text-base py-2 text-center text-white md:py-4">
          Your NFT #1234
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className={`${style.contentInterval} text-center`}>
        <Share title={t('donation.sns_title')} hashtag={t('donation.sns_hashtag')} />
      </div>
      {/* <div className={`${style.contentInterval} pt-0 md:pt-0 max-w-2xl mx-auto`}>
        <CardNFT type={CardStateType.view} />
        <p className="title tracking-tight font-black text-xl md:text-base py-1 text-center text-white md:py-2">
          Your NFT #1234
        </p>
      </div> */}
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className={`${style.contentInterval} ${style.buttonOutInterval} flex justify-center`}>
        <Button title={t('button.home')} />
        <Button title={t('button.check_nft')} />
      </div>
    </div>
  )
}

export default DonationSuccess
