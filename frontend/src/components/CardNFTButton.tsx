import React, { FC, useCallback, useEffect, useState } from 'react'
import { CardStateType, IPurchase, ITokenItem } from '../lib/type'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { NftPurchasedStateSelector, nftPurchaseReqState, TokenIdListState } from '../state/nftState'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import { accountInfoState } from '../state/walletState'
import { useNavigate } from 'react-router-dom'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { openSeaUri } from '../data/response'

interface CardNFTButton {
  type: CardStateType
  token: ITokenItem
  disabled: boolean
  message: string
}

const CardNFTButton: FC<CardNFTButton> = ({ type, token, disabled, message }) => {
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
    const req: IPurchase = {
      tokenId: id,
      price,
    }
    setNftPurchaseReq(req)
    setReqState(true)
  }

  const goOpensea = (): void => {
    window.open(`${openSeaUri}/${id}`, '_blank')
  }

  const goDonationSuccess = useCallback((): void => {
    navigate('/donation-success')
  }, [navigate])

  const handleClick = (): void => {
    type === 'sales' ? handleDonation() : goOpensea()
  }

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
            style={{ textTransform: 'none' }}
            disabled={disabled}
            sx={{
              ':hover': {
                backgroundColor: deepPurple['A400'],
              },
            }}
            onClick={handleClick}>
            <span className="text-white text-sm md:text-base">{message}</span>
          </Button>
        </ThemeProvider>
      </div>
    </>
  )
}

export default CardNFTButton
