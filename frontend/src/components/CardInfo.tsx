import React, { FC } from 'react'
import { InfoType } from '../lib/type'
import ShareButton from './ShareButton'

interface CardInfo {
  info: InfoType
}

const CardInfo: FC<CardInfo> = ({ info }) => {
  return (
    <div data-aos="flip-left" className="px-4 w-1/2 md:px-10">
      <div className="py-2">
        <div className="rounded-full bg-aid-blue w-full h-0 pb-full relative">
          <img
            className="opacity-80 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            src={`./images/${info.imgFileName}`}
            alt="programmer"
          />
          {/* outline style */}
          <span className="block absolute -inset-2 rounded-full border-2 border-indigo-200 transform transition duration-500 delay-100 group hover:rotate-180">
            {/* ping */}
            <span className="flex h-3 w-3 md:h-4 md:w-4 absolute right-6 top-3 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-white"></span>
            </span>
            {/* //ping */}
            {/* info */}
            <div className="info absolute inset-0 rounded-full bg-aid-yellow flex justify-center items-center overflow-hidden transform scale-0 transition duration-100 delay-600 opacity-0 group-hover:opacity-100 group-hover:scale-100">
              <ul className="flex w-full justify-center transform transition duration-500 delay-100 group-hover:rotate-180">
                {info.snsList.map((sns) => (
                  <li key={sns.id} className="w-1/3 px-2 md:px-3">
                    <ShareButton sns={sns} />
                  </li>
                ))}
              </ul>
            </div>
          </span>
        </div>
      </div>
      <div className="mt-4 text-white text-center break-words">
        <div className="py-1 text-sm md:text-base font-bold flex items-center justify-center -mx-1">
          <h3 className="block pl-1 pr-2">{info.nickname}</h3>
          <span className="block pr-1 pl-2 relative">
            {/* <i className="block absolute left-0 w-px h-4/5 top-1/2 transform -translate-y-1/2 bg-white" /> */}
            <i className="block absolute left-0 w-px top-1 bottom-1 bg-white" />
            {info.position}
          </span>
        </div>
        <span className="block py-1 text-xs md:text-sm font-thin">{info.email}</span>
      </div>
    </div>
  )
}

export default CardInfo
