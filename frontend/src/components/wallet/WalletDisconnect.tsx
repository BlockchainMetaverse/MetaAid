import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { style } from '../../data/style'
import { useSetRecoilState } from 'recoil'
import { accountInfoState } from '../../state/walletState'
import { initialAccountInfo } from '../../state/initialState'

const WalletDisconnect: FC = () => {
  const { t } = useTranslation()
  const setAccountInfo = useSetRecoilState(accountInfoState)
  // todo disconnect function
  const disconnect = (): void => {
    setAccountInfo(initialAccountInfo)
  }
  return (
    <button
      type="button"
      className={`px-4 py-2 border border-gray-600 text-gray-600 font-bold text-xs md:text-sm ${style.roundContent}hover:bg-aid-blue transition duration-300`}
      onClick={disconnect}>
      {t('wallet.wallet_disconnect')}
    </button>
  )
}

export default WalletDisconnect
