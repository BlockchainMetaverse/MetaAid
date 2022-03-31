// import { stringify } from 'querystring'
import { ethers } from 'ethers'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { walletList } from '../../data/response'
import { AccountInfoType, Wallet, WalletType } from '../../lib/type'
import { accountInfoState } from '../../state/atom'
import WalletBoxButton from './WalletBoxButton'

const WalletBox: FC = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState<number | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

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
        setErrorMessage('Install MetaMask!')
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
    if (!errorMessage) return
    alert(errorMessage)
    setErrorMessage('')
  }, [errorMessage])

  useEffect(() => {
    // todo: 값 있을경우 페이지 이동시키기
  }, [accountInfo])

  return (
    <div className="mx-auto md:max-w-md">
      <div className="rounded-lg overflow-hidden">
        {walletList.map((wallet) => (
          <WalletBoxButton key={wallet.id} wallet={wallet} connectWallet={connectWallet} />
        ))}
      </div>
    </div>
  )
}

export default WalletBox
