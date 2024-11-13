import React, { useState, useEffect, CSSProperties, useRef } from 'react';
import useOnScreen from '@/components/useOnScreen';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faThermometerHalf, faSun, faFan, faLeaf } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WindowsTitle: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sectionStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  const textStyle: CSSProperties = {
    fontSize: "clamp(2rem, 4vw, 7vw)", // Ensures a minimum font size of 2rem, scales with viewport width, max 7vw
  };
  
  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={sectionStyle}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <span style={textStyle}>
          Windows
        </span>
      </div>
    </motion.div>
  );
};

const InfoSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '0px');

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateMedia);
    updateMedia();

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const sectionStyles: CSSProperties = {
    fontFamily: '"Inter", sans-serif',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '2rem' : '3rem',
    textAlign: 'center',
  };
    
  const textSectionStyle: CSSProperties = {
    marginBottom: '1rem',
  };

  const titleStyle: CSSProperties = {
    fontSize: isMobile ? '1.5rem' : '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const paragraphStyle: CSSProperties = {
    marginBottom: '2rem',
    fontSize: isMobile ? '0.9rem' : '1rem',
    padding: isMobile ? '0 1rem' : '0',
    width: '100%', // Ensure full width
  };

  const featuresGridStyle: CSSProperties = {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1rem',
    maxWidth: '800px',
  };

  const featureItemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1rem',
    marginBottom: isMobile ? '1rem' : '0',
    textAlign: 'center',
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

  const features = [
    { icon: faThermometerHalf, title: "Thermal Performance", description: "Optimal thermal performance reducing heating and cooling costs." },
    { icon: faLock, title: "Enhanced Security", description: "State-of-the-art security features for peace of mind." },
    { icon: faSun, title: "Natural Light", description: "Maximized natural light intake with energy-efficient glass." },
    { icon: faFan, title: "Air Flow Regulation", description: "Superior air flow regulation for comfortable living environments." },
    { icon: faLeaf, title: "Eco-Friendly", description: "Eco-friendly materials supporting sustainable living." },
  ];

  return (
    <div
      ref={ref}
      style={{
        ...sectionStyles,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      <div style={textSectionStyle}>
        <h2 style={titleStyle}>Enhancing Your Home with Our Windows Collection</h2>
        <p style={paragraphStyle}>
          Explore our diverse range of window solutions designed for aesthetic harmony and functional excellence. Each window is crafted for superior performance, offering unparalleled insulation, security, and style.
        </p>
      </div>
      <ul style={featuresGridStyle}>
        {features.map((feature, index) => (
          <li key={index} style={featureItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <strong>{feature.title}</strong>
            <span>{feature.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 

const images = [
    '/image/WindowImage/WindowImage1.jpg',
    '/image/WindowImage/WindowImage2.jpg',
    '/image/WindowImage/WindowImage3.jpg',
    '/image/WindowImage/WindowImage4.jpg'

];
  
const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state based on the window size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(150px, 1fr))' : 'repeat(4, 1fr)',
    gap: '10px',
    padding: isMobile ? '10px' : '20px',
  };

  const galleryImageStyle: CSSProperties = {
    width: '100%',
    height: '200px', // Set a fixed height for all images
    objectFit: 'cover', // This will cover the area without stretching the image
    opacity: 1,
    transition: 'opacity 0.3s ease',
  };

  const titleStyle: CSSProperties = {
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
        transition: 'opacity 2s ease-in-out',
      }}
    >
      <h2 style={titleStyle}>Window Gallery</h2>
      <div style={galleryStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(image)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={image}
              alt={`Curtin ${index + 1}`}
              style={galleryImageStyle}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      )}
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
      <Gallery />
      <Footer />
    </div>
  );
}
