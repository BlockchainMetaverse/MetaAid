import React, { FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import CardNFTList from '../components/CardNFTList'
import { FireCracker } from '../components/FireCracker'
import CardLoading from '../components/indicator/CardLoading'
import Share from '../components/Share'
import SuccessCard from '../components/SuccessCard'
import { style } from '../data/style'
import Button from './../components/Button'

const DonationSuccess: FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className="pt-4 md:pt-6">
      <FireCracker />
      <div data-aos="fade-up" className={`max-w-2xl mx-auto ${style.contentInterval}`}>
        {/* Todo: change indicator */}
        <Suspense
          fallback={
            <div className="w-1/2">
              <CardLoading />
            </div>
          }>
          <SuccessCard />
        </Suspense>
      </div>
      <div className={`${style.contentInterval} pb-0 md:pb-0 max-w-2xl mx-auto`}>
        <div className="flex flex-wrap -mx-1 w-full">
          <Suspense
            fallback={
              <div className="w-1/2">
                <CardLoading />
              </div>
            }>
            <CardNFTList type={'success'} dataFormat={'video'} />
          </Suspense>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className={`${style.contentInterval} text-center`}>
        <Share hashtag={t('donation.sns_hashtag')} />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className={`${style.contentInterval} ${style.buttonOutInterval} flex justify-center`}>
        <Button handleClick={() => navigate('/')} title={t('button.home')} />
        <Button handleClick={() => navigate('/profile')} title={t('button.check_nft')} />
      </div>
    </div>
  )
}

export default DonationSuccess
