import React, { FC } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { MdOutlineContentCopy } from 'react-icons/md'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'

interface ShareCampainProps {
  title: string
  hashtag: string
  type: CardStateType
}

const ShareCampain: FC<ShareCampainProps> = ({ title, hashtag, type }) => {
  return (
    <>
      <p
        className={`text-base md:text-lg text-white text-center font-bold ${
          type === 'home' ? 'text-gray-800' : ''
        } ${style.contentInterval} pb-0`}>
        {title}
      </p>
      <div className={style.contentInterval}>
        <CopyToClipboard text={hashtag}>
          <button
            type="button"
            className={`items-center bg-white rounded-lg overflow-hidden py-1 md:py-2 px-4 w-fit mx-auto ${
              type === 'home' ? 'border border-gray-800' : ''
            }`}>
            <p className="text-sm md:text-lg inline align-middle">{hashtag}</p>
            <span className="inline-block px-2 -mr-2 align-middle">
              <MdOutlineContentCopy />
            </span>
          </button>
        </CopyToClipboard>
      </div>
    </>
  )
}

export default ShareCampain
