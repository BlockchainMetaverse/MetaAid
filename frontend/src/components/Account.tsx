import React, { FC, useState } from 'react'
import { style } from '../data/style'
import { MdOutlineContentCopy } from 'react-icons/md'
import { BsCheckAll } from 'react-icons/bs'
import WalletDisconnect from './wallet/WalletDisconnect'
import { AccountInfoType } from '../lib/type'
import CopyToClipboard from 'react-copy-to-clipboard'
import { sleep } from '../lib/utils'

interface AccountProps {
  info: AccountInfoType
}

const Account: FC<AccountProps> = ({ info: { account, balance } }) => {
  const accountElipsis = (): string => {
    return `${account.slice(0, 5)}...${account.slice(-4)}`
  }

  const [copied, setCopied] = useState(false)

  const handleCopy = async (): Promise<void> => {
    setCopied(true)
    await sleep(3000)
    setCopied(false)
  }

  return (
    <div className={`${style.roundBox}`}>
      <div className={`${style.innerContentInterval} pt-0`}>
        <div className="bg-gray-400 w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto overflow-hidden">
          <img src="./images/account.png" alt="profile" />
        </div>
      </div>
      <div className={style.innerContentInterval}>
        <div className="w-min mx-auto">
          <CopyToClipboard text={account} onCopy={handleCopy}>
            <button
              type="button"
              className={`border flex items-center ${style.roundContent} ${
                copied
                  ? 'border-green-500 bg-green-200 bg-opacity-20 text-gray-800'
                  : 'border-gray-500 bg-gray-800 bg-opacity-80 text-white'
              }`}>
              <p className="text-sm md:text-base">{accountElipsis()}</p>
              <span className="inline-flex items-center ml-2 h-4 w-4">
                {copied ? (
                  <span className="inline-block text-green-500 -ml-1">
                    <BsCheckAll size={'1.5rem'} />
                  </span>
                ) : (
                  <MdOutlineContentCopy />
                )}
              </span>
            </button>
          </CopyToClipboard>
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
