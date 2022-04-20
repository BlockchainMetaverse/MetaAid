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
import { teamInfo } from '../../data/response'
import { PlatformEnum } from '../../lib/type'

const Header: FC = () => {
  return (
    <footer className="py-4 md:py-6 mt-auto px-8 bg-gray-800">
      <div className="max-w-2xl mx-auto text-white flex">
        <p className="text-sm md:text-lg pl-2">Powered by Meta Aid Team</p>
        <div className="hidden md:flex ml-4">
          {teamInfo.snsList.map((sns, index) => (
            <a
              key={index}
              href={sns.link}
              target="_blank"
              className="flex items-center px-1 mx-4"
              rel="noreferrer">
              <span className="text-2xl">
                {sns.platform === PlatformEnum.GITHUB && <FaGithub />}
                {sns.platform === PlatformEnum.DISCORD && <FaDiscord />}
                {sns.platform === PlatformEnum.FACEBOOK && <FaFacebook />}
                {sns.platform === PlatformEnum.INSTAGRAM && <FaInstagram />}
                {sns.platform === PlatformEnum.TWITTER && <FaTwitter />}
                {sns.platform === PlatformEnum.TELEGRAM && <FaTelegram />}
                {sns.platform === PlatformEnum.YOUTUBE && <FaYoutube />}
                {sns.platform === PlatformEnum.ROCKET && <FaRocket />}
                {sns.platform === PlatformEnum.LINKEDIN && <FaLinkedin />}
              </span>
              <span className="pl-2">{sns.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Header
