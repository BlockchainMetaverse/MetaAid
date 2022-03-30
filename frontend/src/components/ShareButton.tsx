import React, { FC } from 'react'
import {
  FaGithub,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaRocket,
  FaLinkedin,
} from 'react-icons/fa'
import { PlatformEnum, SnsType } from '../lib/type'

interface ShareButtonProps {
  sns: SnsType
}

const ShareButton: FC<ShareButtonProps> = ({ sns }) => {
  return (
    <a href={sns.link} target="_blank" className="block p-1 text-3xl" rel="noreferrer">
      {sns.platform === PlatformEnum.GITHUB && <FaGithub />}
      {sns.platform === PlatformEnum.DISCORD && <FaDiscord />}
      {sns.platform === PlatformEnum.FACEBOOK && <FaFacebook />}
      {sns.platform === PlatformEnum.INSTAGRAM && <FaInstagram />}
      {sns.platform === PlatformEnum.TWITTER && <FaTwitter />}
      {sns.platform === PlatformEnum.TELEGRAM && <FaTelegram />}
      {sns.platform === PlatformEnum.YOUTUBE && <FaYoutube />}
      {sns.platform === PlatformEnum.ROCKET && <FaRocket />}
      {sns.platform === PlatformEnum.LINKEDIN && <FaLinkedin />}
      <span className="sr-only">{sns.platform}</span>
    </a>
  )
}

export default ShareButton
