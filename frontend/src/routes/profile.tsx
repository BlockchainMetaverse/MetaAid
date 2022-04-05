import React, { FC, Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Account from '../components/Account'
import CardNFTList from '../components/CardNFTList'
import CardLoading from '../components/indicator/CardLoading'
import Share from '../components/Share'
import { tokenIds } from '../data/response'
import { style } from '../data/style'
import { accountInfoState } from '../state/walletState'

const Profile: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const accountInfo = useRecoilValue(accountInfoState)
  const { active } = accountInfo

  useEffect(() => {
    !active && navigate('/wallet-connect')
  }, [active, navigate])

  // view
  return (
    <div className="max-w-2xl mx-auto pt-4 md:pt-6">
      {active && (
        <div data-aos="fade-up" className={`${style.contentInterval}`}>
          <Account info={accountInfo} />
        </div>
      )}
      <div className={`${style.contentInterval}`}>
        <div className="flex flex-wrap -mx- w-full">
          <Suspense
            fallback={tokenIds.map((id) => (
              <div className="w-1/2" key={id}>
                <CardLoading />
              </div>
            ))}>
            <CardNFTList type={'profile'} dataFormat={'video'} />
          </Suspense>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className={`${style.contentInterval} text-center`}>
        <Share title={t('donation.sns_title')} hashtag={t('donation.sns_hashtag')} />
      </div>
    </div>
  )
}

export default Profile
