import React, { FC } from 'react'
import { ImageInfoType } from '../lib/type'

interface ImageCardProps {
  width?: string
  widthMd?: string
  info: ImageInfoType
  index: number
}

const ImageCard: FC<ImageCardProps> = ({ width, widthMd, info, index }) => {
  const { fileName, fileFormat } = info
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={200 * index}
      className={`p-2 rounded-lg ${width ? 'w-' + width : ''} ${widthMd ? 'md:w-' + widthMd : ''}`}>
      <div className="rounded-lg overflow-hidden w-full h-0 pb-full relative shadow-2xl">
        <i className="absolute block inset-0 bg-gray-800 bg-opacity-20" />
        <img
          src={`./images/contents/${fileName}.${fileFormat}`}
          className="w-full h-auto"
          alt="war"
        />
      </div>
    </div>
  )
}

export default ImageCard
