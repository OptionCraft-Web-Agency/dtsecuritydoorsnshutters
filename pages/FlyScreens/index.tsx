import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

const FlyScreensTitle: React.FC = () => {
    const sectionStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 'min(4vw, 7vw)',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
    };
    
    return (
    <div style={sectionStyle}>
        Fly Screens
    </div>
    );
};

export default function Curtains() {
  return (
    <div>
      <Header />
      <MainHeader />
      <FlyScreensTitle />
      <Footer />
    </div>
  );
}
