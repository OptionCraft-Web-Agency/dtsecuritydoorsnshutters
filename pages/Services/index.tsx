import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { CSSProperties } from 'react';

import Header from '@/components/Header'
import MainHeader from '@/components/MainHeader'

import Store from '@/components/Store'

import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const ServicesSection: React.FC = () => {
  const sectionStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 'min(4vw, 7vw)', // Adjusted for better text scaling
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  return (
    <div style={sectionStyle}>
      Our Services
    </div>
  );
};


export default function Services() {
  return (
    <div>
      <Header />
      <MainHeader />
      <ServicesSection />
      <Store />
      <Footer />
    </div>
  )
}
