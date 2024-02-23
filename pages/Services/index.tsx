import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import Link from "next/link";

import Header from '@/components/Header'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

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

const OurServices: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // Correcting the state declaration here
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Ensure this matches throughout

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: isMobile ? '4vw 0' : '4vw 0',
  };

  const titleStyle: CSSProperties = {
    fontSize: isMobile ? '1.5rem' : '2.5rem',
    marginBottom: '1.5vw',
    fontWeight: 'bold',
    textAlign: 'center', // Ensure title is centered on small screens
  };

  const descriptionStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: isMobile ? '4vw' : '1.25vw', // Adjust font size for mobile
    padding: '0 5%', // Adjust padding for text alignment
    margin: '1vw 0 3vw 0', // Margin for spacing
    color: '#333', // Adjust color for readability
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: isMobile ? '2vw' : '2vw',
    width: '90%',
    margin: '0 auto',
  };

  const itemStyle: React.CSSProperties = {
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const textContainerStyle: React.CSSProperties = {
    padding: '1vw',
  };

  const overlayTextStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#ffffff',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const serviceNameStyle: React.CSSProperties = {
    fontWeight: 'bold', // Example style, adjust as needed
    fontSize: isMobile ? '4vw' : '1.2rem', // Responsive font size
    marginBottom: '0.5vw', // Space between name and description
  };

  const services = [
    {
      image: '/RollerDoor1.jpg',
      name: 'Roller Shutters',
      description: 'High-quality roller shutters designed for smooth operation and robust security.',
      link: '/RollerShutters',
    },
    {
      image: '/Blinds1.jpg',
      name: 'Curtins',
      description: 'Stylish and functional curtins to enhance your privacy and control natural lighting.',
      link: '/Curtins',
    },
    {
      image: '/SecurityDoor1.jpg',
      name: 'Security Doors',
      description: 'Durable security doors that provide peace of mind with enhanced protection.',
      link: '/Product',
    },
    {
      image: '/Window1.jpg',
      name: 'Windows',
      description: 'Custom-designed windows that bring natural beauty right into your home.',
      link: '/Windows',
    },
    {
      image: '/RollerDoor1.jpg',
      name: 'Fly Screen',
      description: 'High-quality roller shutters designed for smooth operation and robust security.',
      link: '/FlyScreens',
    },
  ];  

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Seamless Security Meets Style with Custom Doors and Windows.</h2>
      <p style={descriptionStyle}>
        Our custom doors and windows are the epitome of elegance and security, meticulously crafted to enhance your home's aesthetic and safety. With a focus on innovative design and durability, we offer a wide range of styles and finishes to perfectly match your architectural needs. Each product is designed with precision engineering, ensuring optimal functionality without compromising on style. From advanced security features to energy-efficient materials, our doors and windows offer a perfect blend of form and function for the modern homeowner.
      </p>      
      
      <div style={gridStyle}>
        {services.map((service, index) => (
          <Link key={index} href={service.link} passHref>
              <div
                style={itemStyle}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                  <Image src={service.image} alt={service.name} layout="fill" objectFit="cover" />
                </div>
                <div style={textContainerStyle}>
                <p style={serviceNameStyle}>{service.name}</p>
                </div>
                <div style={{ ...overlayTextStyle, opacity: hoveredIndex === index ? 1 : 0 }}>
                <p style={serviceNameStyle}>{service.name}</p>
                  <p>{service.description}</p>                
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <div>
      <Header />
      <MainHeader />
      <ServicesSection />
      <OurServices />
      <Footer />
    </div>
  )
}
