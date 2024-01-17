import Image from 'next/image';
import React, { CSSProperties } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBolt, faVolumeDown, faPalette } from '@fortawesome/free-solid-svg-icons';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

import Info1 from "@/components/Info1";


const RollerShuttersTitle: React.FC = () => {
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
      Roller Shutters
    </div>
  );
};

const WhyRollerShutters: React.FC = () => {
    const sectionStyle: CSSProperties = {
      fontFamily: '"Inter", sans-serif',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      textAlign: 'center',
    };
  
    const titleStyle: CSSProperties = {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    };
  
    const descriptionStyle: CSSProperties = {
      marginBottom: '2rem',
      fontSize: '1rem',
      maxWidth: '600px',
    };
  
    const listStyle: CSSProperties = {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '1rem',
      maxWidth: '800px',
    };
  
    const listItemStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1rem',
    };
  
    const iconStyle: CSSProperties = {
      backgroundColor: '#eeeeee',
      borderRadius: '50%',
      width: '3rem',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
      fontSize: '1.5rem', // Font size for FontAwesome icons
    };
  
    return (
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Why Roller Shutters?</h2>
        <p style={descriptionStyle}>
          Discover the benefits of roller shutters for security, energy efficiency, and more:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <strong>Enhanced Security</strong> Robust construction deters break-ins.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <strong>Energy Efficiency</strong> Insulates against heat and cold.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faVolumeDown} />
            </div>
            <strong>Noise Reduction</strong> Cuts down external noise effectively.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <strong>Customization</strong> Variety of styles to complement your home.
          </li>
        </ul>
      </div>
    );
  };
  
export default function RollerShutters() {
  return (
    <div>
      <Header />
      <MainHeader />
      <RollerShuttersTitle />
    <WhyRollerShutters/>
    <Info1/>
      <Footer />
    </div>
  );
}
