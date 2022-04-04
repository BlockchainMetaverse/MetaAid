import React, { FC, useCallback, useEffect, useState } from 'react'
import { CardStateType, IPurchase, ITokenItem } from '../lib/type'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { NftPurchasedStateSelector, nftPurchaseReqState, TokenIdListState } from '../state/nftState'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import { accountInfoState } from '../state/walletState'
import { useNavigate } from 'react-router-dom'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

interface CardNFTButton {
  type: CardStateType
  disabled: boolean
  isLoading: boolean
  message: string
  token: ITokenItem
  selectedItem: () => void
}

const CardNFTButton: FC<CardNFTButton> = ({ type, token, disabled, message, selectedItem }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#4738BB',
          },
        },
      },
    },
  })

  const { id, price } = token
  const navigate = useNavigate()

  const setTokenIdList = useSetRecoilState(TokenIdListState)
  const setNftPurchaseReq = useSetRecoilState(nftPurchaseReqState)
  const accountInfo = useRecoilValue(accountInfoState)
  const nftPurchasedItem = useRecoilValue<IPurchase | null>(
    NftPurchasedStateSelector(accountInfo.account),
  )
  const [reqState, setReqState] = useState(false)

  const handleDonation = (): void => {
    selectedItem()
    const req: IPurchase = {
      tokenId: id,
      price,
    }
    setNftPurchaseReq(req)
    setReqState(true)
  }

  const goDonationSuccess = useCallback((): void => {
    navigate('/donation-success')
  }, [navigate])

  useEffect(() => {
    if (!nftPurchasedItem) return
    type === 'sales' && reqState && setTokenIdList([nftPurchasedItem.tokenId])
  }, [nftPurchasedItem, type, setTokenIdList, reqState])

  useEffect(() => {
    reqState && nftPurchasedItem && goDonationSuccess()
  }, [nftPurchasedItem, reqState, goDonationSuccess])

  // view
  return (
    <>
      <div className="bg-gray-600 rounded-md overflow-hidden">
        <ThemeProvider theme={theme}>
          <Button
            fullWidth={true}
            startIcon={<CurrencyBitcoinIcon color="inherit" />}
            variant="contained"
            size="medium"
            disabled={disabled}
            sx={{
              ':hover': {
                backgroundColor: deepPurple['A400'],
              },
            }}
            onClick={handleDonation}>
            {message}
          </Button>
        </ThemeProvider>
      </div>
    </>
  )
}

export default CardNFTButton
