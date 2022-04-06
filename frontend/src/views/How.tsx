import React, { FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import CardNFTList from '../components/CardNFTList'
import CardLoading from '../components/indicator/CardLoading'
import TitleBox from '../components/TitleBox'
import { tokenIds } from '../data/response'

const Why: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleBox
        mainTitle={t('main.how_main_title')}
        subTitle={t('main.how_sub_title')}
        align={'center'}
      />
      <div className="max-w-lg mx-auto">
        {/* START: 1 step */}
        <div
          data-aos="zoom-in-up"
          className="py-8 md:py-14 -mt-8 md:-mt-14 overflow-hidden relative">
          <div className="w-56 md:w-75 bg-aid-purple rounded-xl border border-gray-800 text-white py-2 px-4 relative z-10">
            <div className="flex items-start">
              <span className="text-base font-bold">1.</span>
              <div className="pl-2">
                <h3 className="text-sm font-bold">{t('main.how_step1_title')}</h3>
                <p className="text-sm pt-1">{t('main.how_step1_description')}</p>
              </div>
            </div>
          </div>
          <div className="absolute right-10 md:right-14 top-1/2 transform z-0">
            {/* ping */}
            <span className="flex h-3 w-3 md:h-5 md:w-5 absolute -right-1 -top-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-5 md:w-5 bg-indigo-600"></span>
            </span>
            {/* //ping */}
            <svg
              width="604"
              height="604"
              viewBox="0 0 604 604"
              fill="none"
              className="w-36 h-36 md:hidden"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4H576.5C589.755 4 600.5 14.7452 600.5 28V604"
                stroke="rgba(31, 41, 55, .6)"
                strokeWidth="8"
              />
            </svg>
            <svg
              width="604"
              height="604"
              viewBox="0 0 604 604"
              fill="none"
              className="hidden md:block w-100 h-100"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4H576.5C589.755 4 600.5 14.7452 600.5 28V604"
                stroke="rgba(31, 41, 55, .6)"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
        {/* START: 2 step */}
        <div
          data-aos="zoom-in-up"
          className="py-8 md:py-14 -mt-8 md:-mt-14 overflow-hidden relative">
          <div className="absolute left-10 md:left-14 top-1/2 transform -scale-x-1 z-0">
            {/* ping */}
            <span className="flex h-3 w-3 md:h-5 md:w-5 absolute -right-1 -top-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-5 md:w-5 bg-indigo-600"></span>
            </span>
            {/* //ping */}
            <svg
              width="604"
              height="604"
              viewBox="0 0 604 604"
              fill="none"
              className="w-36 h-36 md:hidden"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4H576.5C589.755 4 600.5 14.7452 600.5 28V604"
                stroke="rgba(31, 41, 55, .6)"
                strokeWidth="8"
              />
            </svg>
            <svg
              width="604"
              height="604"
              viewBox="0 0 604 604"
              fill="none"
              className="hidden md:block w-100 h-100"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4H576.5C589.755 4 600.5 14.7452 600.5 28V604"
                stroke="rgba(31, 41, 55, .6)"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="w-56 md:w-75 bg-aid-purple rounded-xl border border-gray-800 text-white py-2 px-4 ml-auto relative z-10">
            <div className="flex items-start">
              <span className="text-base font-bold">2.</span>
              <div className="pl-2">
                <h3 className="text-sm font-bold">{t('main.how_step2_title')}</h3>
                <p className="text-sm pt-1">{t('main.how_step2_description')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* START: 3 step */}
        <div
          data-aos="zoom-in-up"
          className="py-8 md:py-14 -mt-8 md:-mt-14 overflow-hidden relative">
          <div className="w-56 md:w-75 bg-aid-purple rounded-xl border border-gray-800 text-white py-2 px-4 relative z-10">
            <div className="flex items-start">
              <span className="text-base font-bold">3.</span>
              <div className="pl-2">
                <h3 className="text-sm font-bold">{t('main.how_step3_title')}</h3>
                <p className="text-sm pt-1">{t('main.how_step3_description')}</p>
              </div>
            </div>
          </div>
          <div className="absolute right-10 md:right-14 top-1/2 transform z-0">
            {/* ping */}
            <span className="flex h-3 w-3 md:h-5 md:w-5 absolute -right-1 -top-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-5 md:w-5 bg-indigo-600"></span>
            </span>
            {/* //ping */}
            <svg
              width="604"
              height="604"
              viewBox="0 0 604 604"
              fill="none"
              className="w-36 h-36 md:hidden"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4H576.5C589.755 4 600.5 14.7452 600.5 28V604"
                stroke="rgba(31, 41, 55, .6)"
                strokeWidth="8"
              />
            </svg>
            <svg
              width="604"
              height="604"
              viewBox="0 0 604 604"
              fill="none"
              className="hidden md:block w-100 h-100"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4H576.5C589.755 4 600.5 14.7452 600.5 28V604"
                stroke="rgba(31, 41, 55, .6)"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
        {/* START: 4 step */}
        {/* <div
          data-aos="zoom-in-up"
          className="py-8 md:py-14 -mt-8 md:-mt-14 overflow-hidden relative">
          <div className="w-36 md:w-48 rounded-full overflow-hidden ml-auto relative z-10">
            <img src="./images/temp/1.png" alt="NFT" />
          </div>
        </div> */}
        <div className="flex flex-wrap -mx-1 w-full">
          <Suspense
            fallback={tokenIds.map((id) => (
              <div className="w-1/2" key={id}>
                <CardLoading />
              </div>
            ))}>
            <CardNFTList type={'home'} dataFormat={'video'} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Why
