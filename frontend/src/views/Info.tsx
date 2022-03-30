import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CardInfo from '../components/CardInfo'
import TitleBox from '../components/TitleBox'
import { style } from '../data/style'
import { personInfoList } from './../data/response'

const Why: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleBox mainTitle={t('main.team_title')} align={'center'} color={'white'} />
      <div className={`${style.contentInterval} max-w-lg mx-auto`}>
        <div className="flex -mx-4">
          {personInfoList.map((info) => (
            <CardInfo key={info.id} info={info} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Why
