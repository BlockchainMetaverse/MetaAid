import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { style } from '../data/style'

const Hero: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="relative overflow-hidden bg-aid-purple -mx-4 md:-mx-8">
      <div className="custom-shape-divider-bottom-1647846273">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-8 md:pb-20 lg:max-w-2xl lg:w-full lg:py-20">
            <main className="mx-auto max-w-7xl px-4 md:px-8 mt-0">
              <div className="lg:text-left">
                <h1
                  data-aos="fade-up"
                  className="text-4xl tracking-tight font-extrabold text-white md:text-5xl">
                  <span className="block">{t('hero.main_title_first')}</span>{' '}
                  <span className="block text-aid-blue mt-2">{t('hero.main_title_second')}</span>
                </h1>
                <p
                  data-aos="fade-up"
                  className="mt-6 text-base text-white md:mt-8 md:text-lg lg:mx-0">
                  {t('hero.sub_title')}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={`md:flex md:justify-center lg:justify-start ${style.buttonOutInterval} ${style.contentInterval}`}>
                  <Button title={t('donation')} handleClick={() => navigate('/donation')} />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 lg:mr-3">
          <img
            className="h-72 w-full md:h-96 lg:w-full lg:h-full"
            src="./images/hero_icon.svg"
            alt="donation crytocurrency"
          />
        </div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="-mt-5 lg:-mt-0">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
