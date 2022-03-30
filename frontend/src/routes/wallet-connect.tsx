import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import TitleBox from '../components/TitleBox'
import WalletBox from '../components/WalletBox'
import { style } from './../data/style'

const Wallteconnect: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <TitleBox
        mainTitle={t('wallet.connect_wallet')}
        subTitle={t('wallet.connect_with_one')}
        align={'center'}
        color={'white'}
      />
      <div data-aos="fade-up" data-aos-delay="300" className={`${style.contentInterval}`}>
        <img className="max-h-52 md:max-h-60 mx-auto" src="./images/wallet.svg" alt="wallet" />
      </div>
      <div data-aos="fade-up" data-aos-delay="400" className={`${style.contentInterval}`}>
        <WalletBox />
      </div>
    </div>
  )
}

export default Wallteconnect
