import React, { FC } from 'react'
import { style } from '../data/style'
import {
  FacebookShareButton,
  TwitterShareButton,
  // LinkedinShareButton,
  TelegramShareButton,
} from 'react-share'

import {
  FacebookIcon,
  TwitterIcon,
  // LinkedinIcon,
  TelegramIcon,
} from 'react-share'
import { metaAidUri, snsTitle } from '../data/response'

interface ShareProps {
  hashtag: string
}

const Share: FC<ShareProps> = ({ hashtag }) => {
  const hashtags: string[] = hashtag.split('#').filter((tag) => !!tag)
  return (
    <>
      <div
        className={`flex items-center justify-center text-white text-4xl md:text-5xl -mx-4 md:-mx-6 ${style.contentInterval}`}>
        <div className="px-3">
          <FacebookShareButton url={metaAidUri} quote={snsTitle} hashtag={hashtag}>
            <FacebookIcon size={60} round={true} />
          </FacebookShareButton>
        </div>
        <div className="px-3">
          <TwitterShareButton url={metaAidUri} title={snsTitle} hashtags={hashtags}>
            <TwitterIcon size={60} round={true} />
          </TwitterShareButton>
        </div>
        <div className="px-3">
          <TelegramShareButton url={metaAidUri}>
            <TelegramIcon size={60} round={true} />
          </TelegramShareButton>
        </div>
      </div>
    </>
  )
}

export default Share
