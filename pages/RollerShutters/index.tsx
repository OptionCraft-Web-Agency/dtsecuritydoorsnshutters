import Image from 'next/image';
import React, { useState, useEffect, CSSProperties } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBolt, faVolumeDown, faPalette, faCalculator } from '@fortawesome/free-solid-svg-icons';

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
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const sectionStyle: CSSProperties = {
      fontFamily: '"Inter", sans-serif',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '2rem' : '3rem',
      textAlign: 'center',
    };
  
    const titleStyle: CSSProperties = {
      fontSize: isMobile ? '1.5rem' : '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    };
  
    const descriptionStyle: CSSProperties = {
      marginBottom: '2rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      maxWidth: '600px',
      padding: isMobile ? '0 1rem' : '0',
    };
  
    const listStyle: CSSProperties = {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '1rem',
      maxWidth: '800px',
    };
  
    const listItemStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1rem',
      marginBottom: isMobile ? '1rem' : '0',
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
      fontSize: '1.5rem',
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
  
const AccessToolsSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle: CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stack cards vertically on mobile
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '1rem' : '2rem', // Smaller padding on mobile
        background: 'linear-gradient(to right, rgb(0, 87, 255), rgb(0, 44, 128))', 
        color: 'white',
        textAlign: isMobile ? 'center' : 'left', // Center text on mobile
    };

    const headerStyle: CSSProperties = {
        flex: 1,
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'left',
        margin: '0 2rem',
    };

    const cardContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stack cards vertically on mobile
        justifyContent: 'center',
        gap: isMobile ? '1rem' : '1rem', // Adjust gap on mobile
        width: isMobile ? '100%' : 'auto', // Full width on mobile
    };

    const cardStyle: CSSProperties = {
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        color: '#333',
        transition: 'transform 0.2s ease-in-out',
        width: isMobile ? '90%' : '250px', // Adjust width on mobile
        margin: isMobile ? '0 auto' : '1rem', // Center cards on mobile
    };

    const iconStyle: CSSProperties = {
        fontSize: '3rem',
        color: 'rgb(0, 87, 255)',
    };

    const buttonStyle: CSSProperties = {
        display: 'flex', // Enables flexbox
        alignItems: 'center', // Centers items vertically in the container
        justifyContent: 'center', // Centers items horizontally in the container
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgb(0, 87, 255)', 
        border: '2px solid white',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        transition: 'all 0.2s',
        gap: '0.5rem', // Adds space between the icon and the text
      };

    // Handlers
    const handleCardMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleCardMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    // Component
    return (
        <div style={sectionStyle}>
            <div style={headerStyle}>
                Design & Secure Your Space
            </div>
            <div style={cardContainerStyle}>
                <div style={cardStyle} onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
                    <a href="/Visualisation" style={buttonStyle}>
                        <FontAwesomeIcon icon={faCalculator} style={iconStyle} />
                        <span>Cost Calculator</span>
                    </a>
                </div>
                <div style={cardStyle} onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
                    <a href="/Visualisation" style={buttonStyle}>
                        <FontAwesomeIcon icon={faPalette} style={iconStyle} />
                        <span>Color Visualization</span>
                    </a>
                </div>
                {/* Add more cards as needed */}
            </div>
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
        <AccessToolsSection /> {/* Added this line */}

        <Info1/>
        <Footer />
    </div>
  );
}
