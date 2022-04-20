import React, { FC, Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { languages, Languages, initLanguage } from '../../lang/i18n'
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
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState<Languages>(
    Object.values(languages).find((language) => language !== initLanguage) ?? 'en',
  )

  const handleChangeLanguage = (lang: Languages): void => {
    setLang(Object.values(languages).find((language) => language !== lang) ?? 'en')
    i18n.changeLanguage(lang)
  }

  const navigation = [
    { name: t('donation'), link: '/donation' },
    // { name: t('war_news'), link: '/war-news' },
    { name: t('profile'), link: '/profile' },
    { name: t('qna'), link: '/qna' },
  ]

  const headerBg = { backgroundImage: 'url(/images/header_bg.svg)' }

  return (
    <Popover>
      <div
        className="py-8 px-4 md:py-6 md:px-8 fixed top-0 left-0 right-0 z-20 bg-left-top bg-repeat-x h-20 md:h-32 flex flex-col justify-center"
        style={headerBg}>
        <nav className="relative flex items-center justify-between" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto relative z-30">
              <Link to="/">
                <img
                  className="h-12 w-auto md:h-14"
                  src="./images/logo_text.svg"
                  alt="Meta aid Logo"
                />
                <span className="sr-only">Meta aid</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:ml-auto md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="font-bold text-lg text-white hover:text-aid-blue transition-all duration-300">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pr-2 md:pr-4">
            <button
              type="button"
              className="font-bold text-lg text-white flex items-center hover:text-aid-blue transition-all duration-300 md:ml-8"
              key={lang}
              onClick={() => handleChangeLanguage(lang)}>
              <span className="block text-gray-100 mr-2 text-2xl">
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              {t(`${lang}`)}
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* START: mobile용 nav 내용 */}
          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="duration-300 ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0">
            <Popover.Panel
              focus
              className="popup fixed z-20 inset-0 py-4 px-4 md:py-6 md:px-8 bg-aid-purple transition transform origin-top-right md:hidden">
              <div className="overflow-hidden text-white bg-aid-purple">
                <div className="text-right">
                  <Popover.Button className="rounded-md p-2 pr-0 inline-flex items-center justify-center text-white bg-aid-purple">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="px-2 py-5 space-y-1 text-center">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Popover.Button>
                        <Link
                          to={item.link}
                          className="block px-3 py-2 rounded-md text-lg font-bold">
                          {item.name}
                        </Link>
                      </Popover.Button>
                    </div>
                  ))}
                </div>
                <div className="md:hidden flex absolute bottom-10 left-0 right-0 justify-center">
                  {teamInfo.snsList.map((sns, index) => (
                    <a
                      key={index}
                      href={sns.link}
                      target="_blank"
                      className="flex items-center px-1 mx-2"
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
                {/* <button
                  type="button"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </button> */}
              </div>
            </Popover.Panel>
          </Transition>
          {/* END: mobile용 nav 내용 */}
        </nav>
      </div>
    </Popover>
  )
}

export default Header
