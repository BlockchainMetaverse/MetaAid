import React, { FC } from 'react'
import { IPurchase, ITokenItem } from '../lib/type'
import { useSetRecoilState } from 'recoil'
import { nftPurchaseReqState } from '../state/nftState'
import LoadingButton from '@mui/lab/LoadingButton'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'

interface CardNFTButton {
  disabled: boolean
  isLoading: boolean
  message: string
  token: ITokenItem
  selectedItem: () => void
}

const CardNFTButton: FC<CardNFTButton> = ({
  token,
  disabled,
  isLoading,
  message,
  selectedItem,
}) => {
  const { id, price } = token

  const setNftPurchaseReq = useSetRecoilState(nftPurchaseReqState)

  const handleDonation = (): void => {
    selectedItem()
    const req: IPurchase = {
      tokenId: id,
      price,
    }
    setNftPurchaseReq(req)
  }

  // view
  return (
    <div className="mt-4 pb-1">
      <div className="bg-aid-light-blue rounded-md overflow-hidden">
        <LoadingButton
          onClick={handleDonation}
          fullWidth={true}
          loading={isLoading}
          loadingPosition="start"
          startIcon={<CurrencyBitcoinIcon />}
          variant="contained"
          size="medium"
          disabled={disabled}>
          {message}
        </LoadingButton>
      </div>
      {/* <button
        type="button"
        className="w-full flex items-center justify-center p-2 rounded-lg text-white text-sm font-extrabold bg-aid-purple hover:bg-aid-blue hover:text-gray-800 md:py-4 md:px-10 transition-all duration-300"
        disabled={disabled || isLoading}
        onClick={handleDonation}>
        {message}
      </button> */}
    </div>
  )
}

export default CardNFTButton
