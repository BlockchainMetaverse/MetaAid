import React, { FC, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './routes/home'
import './assets/style/pages.scss'
import Donation from './routes/donation'
import WarNews from './routes/war-news'
import QnA from './routes/qna'
import DonationSuccess from './routes/donation-success'
import Wallteconnect from './routes/wallet-connect'
import Profile from './routes/profile'
import AOS from 'aos'

import 'aos/dist/aos.css'

const App: FC = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 50,
      duration: 1000,
      easing: 'ease',
      mirror: true,
    })
    AOS.refresh()
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/wallet-connect" element={<Wallteconnect />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/war-news" element={<WarNews />} />
          <Route path="/qna" element={<QnA />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
