import React, { FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { CardStateType, ITokenItem } from '../lib/type'
import { FaDove } from 'react-icons/fa'
import CardNFTButton from './CardNFTButton'
import CardButtonLoading from './indicator/CardButtonLoading'

interface CardNFTItem {
  type: CardStateType
  dataFormat: string
  token: ITokenItem
}

const CardNFTItem: FC<CardNFTItem> = ({ type, dataFormat, token }) => {
  const {
    remainTokens,
    purchasedTokens,
    price,
    detail: { name, description, image },
  } = token

  const { t } = useTranslation()
  // const coinBg = { backgroundImage: 'url(/images/ethereum.svg)' }
  const coinBg = { backgroundImage: 'url(/images/matic.png)' }

  // view
  return (
    <div className={`p-1 md:p-2 w-1/2 ${type === 'success' ? 'mx-auto' : ''}`}>
      <div className="block bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <div className="w-full pb-full h-0 relative text-2xl text-white">
          {dataFormat === 'image' ? (
            // <img src="./images/temp/1.png" alt="NFT" />
            <img src={image} alt="NFT" />
          ) : (
            <video autoPlay loop muted controls className="w-full min-w-full max-w-none">
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
              <i className="w-4 h-4 bg-no-repeat bg-left-top bg-contain mr-1" style={coinBg} />
              <span className="block text-white font-bold">{price}</span>
            </div>
          </div>
          {type !== 'home' && (
            <div className="flex items-center justify-end py-1 -mx-1">
              <div className="text-gray-400 px-1">
                <FaDove />
              </div>
              <span className="block text-gray-400 px-1">
                {type === 'profile' ? `You own ${purchasedTokens}` : `${remainTokens} left`}
              </span>
            </div>
          )}
          {type !== 'home' && (
            <Suspense
              fallback={
                <div className="mt-4 pb-1">
                  <CardButtonLoading message={token.remainTokens ? t('donation') : t('soldout')} />
                </div>
              }>
              <div className="mt-4 pb-1">
                <CardNFTButton
                  type={type}
                  token={token}
                  disabled={type === 'sales' && !token.remainTokens}
                  message={
                    type === 'sales'
                      ? token.remainTokens
                        ? t('donation')
                        : t('soldout')
                      : t('go_to_opensea')
                  }
                />
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardNFTItem
