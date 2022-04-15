import React, { FC } from 'react'
import { style } from '../data/style'
import WalletDisconnect from './wallet/WalletDisconnect'
import { AccountInfoType } from '../lib/type'
import Clipboard from '../components/common/Clipboard'

interface AccountProps {
  info: AccountInfoType
}

const Account: FC<AccountProps> = ({ info: { account, balance } }) => {
  const accountElipsis = (): string => {
    return `${account.slice(0, 5)}...${account.slice(-4)}`
  }

  return (
    <div className={`${style.roundBox}`}>
      <div className={`${style.innerContentInterval} pt-0`}>
        <div className="bg-gray-400 w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto overflow-hidden">
          <img src="./images/account.png" alt="profile" />
        </div>
      </div>
      <div className={style.innerContentInterval}>
        <div className="mx-auto">
          <Clipboard copyText={account} innerText={accountElipsis()} />
        </div>
      </div>
      <p className={`text-lg md:text-xl font-bold ${style.innerContentInterval}`}>
        {balance} MATIC
      </p>
      <div className={`${style.innerContentInterval} pb-0`}>
        <WalletDisconnect />
      </div>
    </div>
  )
}

export default Account
