import { useWeb3React } from '@web3-react/core'
import React, { FC, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { walletList } from '../../data/response'
import { injected } from '../../lib/connection'
import { Wallet, WalletType } from '../../lib/type'
import WalletBoxButton from './WalletBoxButton'

const WalletBox: FC = () => {
  const navigate = useNavigate()
  // const {chainId, account, active, activate, deactivate} = useWeb3React()
  const { active, account, activate, error: connectError } = useWeb3React()

  const wallets: WalletType[] = walletList

  const connectWallet = (type: keyof typeof Wallet): void => {
    console.log('active', active)
    // active && goDonation()
    type === Wallet.META_MASK ? metaMaskConnect() : walletConnect()
  }

  const metaMaskConnect = async (): Promise<void> => {
    try {
      await activate(injected, (error) => {
        console.log(error.name === 'NoEthereumProviderError')
      })
    } catch (error) {
      console.error(error)
    }
  }
  const walletConnect = async (): Promise<void> => {
    // todo..
  }

  const goDonation = useCallback((): void => {
    navigate('/donation')
  }, [navigate])

  useEffect(() => {
    if (!active) return
    goDonation()
  }, [account, active, goDonation])

  useEffect(() => {
    connectError && console.log('error', connectError.message)
  }, [connectError])

  return (
    <div className="mx-auto md:max-w-md">
      <div className="rounded-lg overflow-hidden">
        {wallets.map((wallet) => (
          <WalletBoxButton key={wallet.id} wallet={wallet} connectWallet={connectWallet} />
        ))}
      </div>
    </div>
  )
}

export default WalletBox
