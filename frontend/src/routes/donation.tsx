import React, { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Account from '../components/Account'
import CardNFT from '../components/CardNFT'
import TextBox from '../components/TextBox'
import { data } from '../data/response'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'
import { accountInfoState } from '../state/atom'

const Donation: FC = () => {
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
      <div data-aos="fade-up" data-aos-delay="200" className={`${style.contentInterval}`}>
        <TextBox
          label={t('donation.to_ukraine')}
          value={data.addressUk}
          disabled={true}
          color={'white'}
        />
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" className={`${style.contentInterval}`}>
        <div className="flex flex-wrap -mx-1">
          <CardNFT
            type={CardStateType.sales}
            dataFormat={'image'}
            dataSource={'./images/temp/1.png'}
          />
          <CardNFT
            type={CardStateType.sales}
            dataFormat={'image'}
            dataSource={'./images/temp/1.png'}
          />
        </div>
      </div>
    </div>
  )
}

export default Donation
