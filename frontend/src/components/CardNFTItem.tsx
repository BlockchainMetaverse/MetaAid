import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CardStateType, ITokenItem } from '../lib/type'
import { FaDove } from 'react-icons/fa'

interface CardNFTItem {
  type: CardStateType
  dataFormat: string
  token: ITokenItem
  handleDonation: (id: number, price: number) => void
}

const CardNFTItem: FC<CardNFTItem> = ({ type, dataFormat, token, handleDonation }) => {
  const {
    id,
    remainTokens,
    price,
    detail: { name, description, image },
  } = token
  const { t } = useTranslation()
  const ethereumBg = { backgroundImage: 'url(/images/ethereum.svg)' }

  // view
  return (
    <div className={`p-1 md:p-2 w-1/2 ${type === CardStateType.success ? 'mx-auto' : ''}`}>
      <div className="block bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <div className="w-full pb-full h-0 relative text-2xl text-white">
          {dataFormat === 'image' ? (
            // <img src="./images/temp/1.png" alt="NFT" />
            <img src={image} alt="NFT" />
          ) : (
            <video autoPlay loop muted controls className="w-full min-w-full min-h-full max-w-none">
              <source src={image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="p-2 text-xs">
          <p className="text-gray-400 py-1">{description}</p>
          <div className="flex items-center">
            <span className="block py-1 text-white font-bold">{name}</span>
            <div className="flex items-center ml-auto py-1">
              <i className="w-4 h-4 bg-no-repeat bg-left-top bg-contain" style={ethereumBg} />
              <span className="block text-white font-bold">{price}</span>
            </div>
          </div>
          <div className="flex items-center justify-end py-1 -mx-1">
            <div className="text-gray-400 px-1">
              <FaDove />
            </div>
            <span className="block text-gray-400 px-1">{remainTokens} left</span>
          </div>
          {type === CardStateType.sales && (
            <div className="mt-4 pb-1">
              <button
                type="button"
                className="w-full flex items-center justify-center p-2 rounded-lg text-white text-sm font-extrabold bg-aid-purple hover:bg-aid-blue hover:text-gray-800 md:py-4 md:px-10 transition-all duration-300"
                onClick={() => handleDonation(id, price)}>
                {t('donation')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardNFTItem
