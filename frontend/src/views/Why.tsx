import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ImageCard from '../components/ImageCard'
import TitleBox from '../components/TitleBox'
import { warMainImage, warSubImages } from '../data/response'
import { style } from '../data/style'

const Why: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleBox
        mainTitle={t('main.why_main_title')}
        subTitle={t('main.why_sub_title')}
        align={'center'}
        color={'white'}
      />
      <div className={`md:flex max-w-3xl mx-auto ${style.contentInterval} -mt-4 md:-mt-6`}>
        <p
          data-aos="fade-right"
          className="text-sm font-normal text-white p-2 md:w-3/4 md:min-w-3/4">
          {t('main.why_description')}
        </p>
        <div data-aos="fade-left" className="hidden md:block">
          <ImageCard info={warMainImage} index={0} />
        </div>
      </div>
      <div className={`flex flex-wrap max-w-4xl mx-auto ${style.contentInterval}`}>
        {warSubImages.map((image, index) => (
          <div key={image.id} className="w-1/2 md:w-1/4">
            <ImageCard info={image} index={index} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Why
