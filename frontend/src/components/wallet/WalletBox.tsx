// import { stringify } from 'querystring'
import { ethers } from 'ethers'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { walletList } from '../../data/response'
import { AccountInfoType, ErrorType, Wallet, WalletType } from '../../lib/type'
import { accountInfoState } from '../../state/walletState'
import WalletBoxButton from './WalletBoxButton'
import Toast from '../indicator/Toast'
import { initialError } from '../../state/initialState'

const WalletBox: FC = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState<number | null>(null)

  const [error, setError] = useState<ErrorType>(initialError)

  const [accountInfo, setAccountInfo] = useRecoilState<AccountInfoType>(accountInfoState)

  const connectWallet = (type: WalletType): void => {
    type === Wallet.META_MASK ? metaMaskConnect() : walletConnect()
  }

  const walletConnect = async (): Promise<void> => {
    // todo..
  }

  const metaMaskConnect = async (): Promise<void> => {
    try {
      if (!window.ethereum) {
        // metamask 프로그램 설치 안 되어 있는 경우
        setError((error) => ({
          ...error,
          isOpen: true,
          message: 'Install Metamask!',
          link: 'https://metamask.io/',
        }))
        return
      }
      // 연결될때까지 await함
      const [account]: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      handleAccount(account)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAccount = (account: string): void => {
    setAccount(account)
    handleBalance(account.toString())
  }

  const handleBalance = async (account: string): Promise<void> => {
    const balance: string = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [account, 'latest'],
    })
    const formatBalace = Number(parseFloat(ethers.utils.formatEther(balance)).toFixed(4))
    setBalance(formatBalace)
  }

  const goBack = useCallback((): void => {
    navigate(-1)
  }, [navigate])

  useEffect(() => {
    if (!account || balance === null) return
    const accountData = {
      account,
      active: true,
      balance,
    }
    setAccountInfo(accountData)
    goBack()
  }, [account, balance, setAccountInfo, goBack])

  useEffect(() => {
    // 이미 연결 되어있을 경우 mount후 한번만 실행
    accountInfo.active && goBack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goBack])

  return (
    <>
      {error.isOpen && <Toast error={error} onClose={() => setError(initialError)} />}
      <div className="mx-auto md:max-w-md">
        <div className="rounded-lg overflow-hidden">
          {walletList.map((wallet) => (
            <WalletBoxButton key={wallet.id} wallet={wallet} connectWallet={connectWallet} />
          ))}
        </div>
      </div>
    </>
  )
}

export default WalletBox
