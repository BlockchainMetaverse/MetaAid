import React, { FC } from 'react'

interface ItemEmpty {
  mainTitle: string
  subTitle: string
  color?: string
}

const ItemEmpty: FC<ItemEmpty> = ({ mainTitle, subTitle, color }) => {
  // view
  return (
    <div className={`text-${color || 'gray-800'}`}>
      <div className="md:text-3xl py-2 md:py-3 text-center w-11/12 md:w-3/4 mx-auto">
        <img src="./images/empty.svg" alt="Empty NFT" />
      </div>
      <h2 className="text-xl tracking-tight font-black md:text-3xl py-2 md:py-3">{mainTitle}</h2>
      <p className="text-base md:text-xl font-normal py-2 md:py-3">{subTitle}</p>
    </div>
  )
}

export default ItemEmpty
