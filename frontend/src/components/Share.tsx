import React, { FC } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa'
import { style } from '../data/style'

interface ShareProps {
  title: string
  hashtag: string
}

const Share: FC<ShareProps> = ({ title, hashtag }) => {
  return (
    <>
      <p className="text-base md:text-lg text-white">{title}</p>
      <div className={style.contentInterval}>
        <div className="items-center bg-white rounded-lg overflow-hidden py-1 md:py-2 px-4 w-fit mx-auto">
          <p className="text-sm md:text-lg inline align-middle">{hashtag}</p>
          <button type="button" className="px-2 -mr-2 align-middle">
            <MdOutlineContentCopy />
          </button>
        </div>
      </div>
      <div
        className={`flex items-center justify-center text-white text-4xl md:text-5xl -mx-4 md:-mx-6 ${style.contentInterval}`}>
        <button
          data-aos="flip-left"
          data-aos-delay="200"
          type="button"
          className="px-4 md:px-6 py-2">
          <FaFacebook />
        </button>
        <button
          data-aos="flip-left"
          data-aos-delay="300"
          type="button"
          className="px-4 md:px-6 py-2">
          <FaTwitter />
        </button>
        <button
          data-aos="flip-left"
          data-aos-delay="400"
          type="button"
          className="px-4 md:px-6 py-2">
          <FaTelegram />
        </button>
      </div>
    </>
  )
}

export default Share
