import React, { FC } from 'react'
import { style } from '../data/style'
import { AlignType } from '../lib/type'

interface TitleBoxProps {
  mainTitle: string
  subTitle?: string
  description?: string
  align: AlignType
  color?: string
}

const TitleBox: FC<TitleBoxProps> = ({ mainTitle, subTitle, description, align, color }) => {
  return (
    <div className={`text-${align} ${style.contentInterval} text-${color || 'gray-800'}`}>
      <h2
        data-aos="fade-up"
        className="text-3xl tracking-tight font-black md:text-5xl py-3 md:py-4">
        {mainTitle}
      </h2>
      {subTitle && (
        <p data-aos="fade-up" className="text-lg md:text-2xl font-normal py-3 md:py-4">
          {subTitle}
        </p>
      )}
      {description && (
        <p data-aos="fade-up" className="text-base md:text-lg font-normal py-3 md:py-4">
          {description}
        </p>
      )}
    </div>
  )
}

export default TitleBox
