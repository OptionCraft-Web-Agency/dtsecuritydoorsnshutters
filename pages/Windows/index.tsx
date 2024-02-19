import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faLock, faPaintBrush, faCloudRain, faHandshake } from '@fortawesome/free-solid-svg-icons';

const InfoSection: React.FC = () => {
  const sectionContainer: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1rem',
  };

  const infoSectionStyle: CSSProperties = {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
  };

  const headingStyle: CSSProperties = {
    fontSize: '2.4rem',
    color: '#0a3f5e',
    margin: '0 0 2rem',
    fontWeight: '600',
  };

  const paragraphStyle: CSSProperties = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  };

  const featureListStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem 0',
  };

  const featureItemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    margin: '0.5rem 0',
  };

  const iconStyle: CSSProperties = {
    marginRight: '10px',
    color: '#0a3f5e',
    fontSize: '1.25rem',
  };

  return (
    <div style={sectionContainer}>
      <div style={infoSectionStyle}>
        <h2 style={headingStyle}>Our Windows Collection</h2>
        <p style={paragraphStyle}>
          Discover our range of high-quality windows designed for style, comfort, and security. Our windows provide excellent insulation, enhance natural lighting, and add elegance to your space.
        </p>
        <div style={featureListStyle}>
          {[faTerminal, faLock, faPaintBrush, faCloudRain, faHandshake].map((icon, index) => (
            <div key={index} style={featureItemStyle}>
              <FontAwesomeIcon icon={icon} style={iconStyle} />
              <span>Feature description related to the icon above.</span>
            </div>
          ))}
        </div>
        <p style={paragraphStyle}>
          Enhance the value and comfort of your home with our premium window solutions. Contact us today for a consultation and quote.
        </p>
      </div>
    </div>
  );
};

const WindowsTitle: React.FC = () => {
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
        Windows
    </div>
    );
};

const galleryImages = [
    '/Window1.jpg',
    '/SecurityDoor1.jpg',
    '/Blinds1.jpg',
    '/Window1.jpg',
    '/Blinds1.jpg',
    '/Window1.jpg',
    '/SecurityDoor1.jpg',
  ];
  
const GallerySlideshow: React.FC = () => {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const numOfVisibleImages = 4; // Number of images to show at once
    const length = galleryImages.length;

    const nextSlide = () => {
        setCurrentStartIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            return nextIndex + numOfVisibleImages - 1 < length ? nextIndex : length - numOfVisibleImages < 0 ? 0 : length - numOfVisibleImages;
        });
    };

    const prevSlide = () => {
        setCurrentStartIndex(prevIndex => {
            // Corrected the variable name inside the function
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? 0 : newIndex;
        });
    };

    const galleryStyle: CSSProperties = {
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-start',
    };

    const slideStyle: CSSProperties = {
        minWidth: `calc(100% / ${numOfVisibleImages})`, 
        transition: 'transform 0.5s ease-in-out',
        position: 'relative', // Ensure this is here for layout="fill" to work correctly
    };
    

    const arrowStyle: CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '0.5rem',
        color: 'white',
    };

    return (
        <div style={{ position: 'relative' }}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ ...arrowStyle, left: '10px' }} onClick={prevSlide} />
            <FontAwesomeIcon icon={faChevronRight} style={{ ...arrowStyle, right: '10px' }} onClick={nextSlide} />
            <div style={galleryStyle}>
                {galleryImages.slice(currentStartIndex, currentStartIndex + numOfVisibleImages).map((image, index) => (
                    <div key={index} style={slideStyle}>
                        <Image 
                            src={image} 
                            alt={`Slide ${index}`} 
                            layout="fill"
                            objectFit="cover" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function Windows() {
  return (
    <div>
      <Header />
      <MainHeader />
      <WindowsTitle />
      <InfoSection />
      <GallerySlideshow />
      <Footer />
    </div>
  );
}
