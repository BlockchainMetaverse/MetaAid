import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import TitleBox from '../components/TitleBox'
import WalletBox from '../components/wallet/WalletBox'
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
      <div data-aos="fade-up" data-aos-delay="300">
        <img className="max-h-75 md:max-h-96 mx-auto" src="./images/wallet.svg" alt="wallet" />
      </div>
      <div className={`${style.contentInterval}`}>
        <WalletBox />
      </div>
    </div>
  )
}

export default Wallteconnect
