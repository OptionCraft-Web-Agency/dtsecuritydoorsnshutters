import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Header></Header>
  )
}
