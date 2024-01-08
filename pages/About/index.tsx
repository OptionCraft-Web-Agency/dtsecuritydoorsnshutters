import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'

import Header from '@/components/Header'
import MainHeader from '@/components/MainHeader'

import AboutUsInfo from '@/components/AboutUsInfo'

import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Services() {
  return (
    <div>
      <Header />
      <MainHeader />


      <Footer />
    </div>
  )
}
