import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { style } from '../../data/style'

const WalletDisconnect: FC = () => {
  const { t } = useTranslation()
  // todo disconnect function
  return (
    <button
      type="button"
      className={`px-4 py-2 border border-gray-600 text-gray-600 font-bold text-xs md:text-sm ${style.roundContent}hover:bg-aid-blue transition duration-300`}>
      {t('wallet.wallet_disconnect')}
    </button>
  )
}

export default WalletDisconnect
