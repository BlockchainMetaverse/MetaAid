import React, { FC } from 'react'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'
import Clipboard from '../components/common/Clipboard'

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
        <Clipboard copyText={hashtag} innerText={hashtag} />
      </div>
    </>
  )
}

export default ShareCampain
