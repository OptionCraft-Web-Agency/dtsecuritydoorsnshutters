import React, { useState, useEffect, CSSProperties, useRef } from 'react';
import useOnScreen from '@/components/useOnScreen';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBolt, faVolumeDown, faPalette, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import Info1 from "@/components/Info1";

const RollerShuttersTitle: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '0px');

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
    <div 
      ref={ref}
      style={{
          ...sectionStyle,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
      }}
    >
      Roller Shutters
    </div>
  );
};

const WhyRollerShutters: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
  
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
      <div
        ref={ref}
        style={{
            ...sectionStyle,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 2s ease-in-out', 
        }}
      >
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
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleCardMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const sectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '1rem' : '2rem',
    background: 'linear-gradient(to right, rgb(0, 87, 255), rgb(0, 44, 128))', 
    color: 'white',
    textAlign: isMobile ? 'center' : 'left',
  };

  const headerStyle: CSSProperties = {
    flex: 1,
    fontSize: isMobile ? '4vw' : '2rem', // Adjusted for more dynamic resizing
    fontWeight: 'bold',
    textAlign: 'left',
    margin: '1rem', // Simplified, adjust as needed
  };

  const cardContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: '1rem',
    width: isMobile ? '100%' : 'auto',
    marginTop: isMobile ? '5vw' : '0'
  };

  const cardStyle: CSSProperties = {
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: isMobile ? '90%' : '250px', // Adjust width based on screen size
    margin: '0 auto', // Automatically adjust margin to center cards
    transition: 'transform 0.2s ease-in-out',
  };

  const iconStyle: CSSProperties = {
    fontSize: isMobile ? '6vw' : '3rem', // Adjust icon size for better visibility
  };

  const buttonStyle: CSSProperties = {
    display: 'inline-flex', // Use inline-flex to ensure button text and icon align correctly
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    fontSize: isMobile ? '3.5vw' : '1rem',
    fontWeight: 'bold',
    color: 'rgb(0, 87, 255)',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    transition: 'all 0.2s',
    gap: '0.5rem',
  };

  return (
    <div
      ref={ref}
      style={{
          ...sectionStyle,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out', 
      }}
    >      
      <div style={headerStyle}>Design & Secure Your Space</div>
      <div style={cardContainerStyle}>
        {/* Contact Us card */}
        <div style={cardStyle} onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
          <a href="/Contact" style={buttonStyle}>
            <FontAwesomeIcon icon={faInfoCircle} style={iconStyle} />
            <span>Contact Us</span>
          </a>
        </div>
        {/* Color Visualization card */}
        <div style={cardStyle} onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
          <a href="/Visualisation" style={buttonStyle}>
            <FontAwesomeIcon icon={faPalette} style={iconStyle} />
            <span>Color Visualization</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const images = [
  '/image/RollerShuttersImage/RollerShuttersImage1.jpg',
  '/image/RollerShuttersImage/RollerShuttersImage2.jpg',
  '/image/RollerShuttersImage/RollerShuttersImage3.jpg',
  '/image/RollerShuttersImage/RollerShuttersImage4.jpg',
  '/image/RollerShuttersImage/RollerShuttersImage5.jpg',
];

const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(150px, 1fr))' : 'repeat(4, 1fr)',
    gap: '10px',
    padding: isMobile ? '10px' : '20px',
  };

  const galleryImageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px', // Set a fixed height for all images
    objectFit: 'cover', // This will cover the area without stretching the image
    opacity: 1,
    transition: 'opacity 0.3s ease',
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    margin: '0 0 20px',
    color: '#333',
    fontSize: isMobile ? '8vw' : '3rem',
    fontWeight: 'bold',
    marginTop: '2vw',
  };

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
      <div 
          ref={ref}       
          style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out'}}
      >
          <h2 style={titleStyle}>Fly Screen Gallery</h2>
          <div style={galleryStyle}>
              {images.map((image, index) => (
                  <div key={index}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      onClick={() => handleClick(image)}
                      style={{ cursor: 'pointer' }}>
                  <img src={image}
                      alt={`Fly Screen ${index + 1}`}
                      style={{
                          ...galleryImageStyle,
                          opacity: hoverIndex === index ? 0.7 : 1,
                      }} />
                  </div>
              ))}
          </div>
          {selectedImage && (
              <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={handleClose}>
                  <img src={selectedImage} alt="Enlarged view" style={{ maxWidth: '90%', maxHeight: '90%' }} />
              </div>
          )}
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
        <AccessToolsSection />
        {/* <Info1/> */}
        <Gallery />
        <Footer />
    </div>
  );
}
