import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import Link from "next/link";

import Header from '@/components/Header'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

type ServiceItemProps = {
  imageUrl: string;
  title: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ imageUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    
    // Set initial size on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust styles based on viewport width for responsiveness
  const itemStyle: CSSProperties = {
    textAlign: 'center',
    paddingBottom: viewportWidth < 768 ? '5%' : '1vw', // Increase padding on small screens
    color: 'black',
    backgroundColor: 'white',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered
      ? '0 4px 8px rgba(22, 110, 187, 0.5)'
      : '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
  };

  const imageContainerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: viewportWidth < 768 ? '50vw' : '10vw', // Adjust height for mobile view
    marginBottom: '1vw',
  };

  const titleStyle: CSSProperties = {
    fontSize: viewportWidth < 768 ? '5vw' : '1.2vw', // Increase font size for better readability on mobile
  };

  return (
    <Link href={title === "Security Doors" ? "/Product" : title === "Roller Shutters" ? "/RollerShutters" : title === "Curtins" ? "/Curtins" : title === "Windows" ? "/Windows" : title === "Fly Screens" ? "/FlyScreens" : "#"}>
      <div
        style={itemStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={imageContainerStyle}>
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p style={titleStyle}>{title}</p>
      </div>
    </Link>
  );
};

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

const ProductShowcase: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false);

  // Effect to update the state based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Set the initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '5vw 0',
    height: 'auto', // Adjusted for mobile responsiveness
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.5vw', // Significantly reduced for better readability on mobile
    marginBottom: '1.5vw',
    fontWeight: 'bold',
    textAlign: 'center', // Ensure title is centered on small screens
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive grid layout
    gap: '1vw',
    width: '90%', // Adjusted for smaller screens
    margin: '0 auto',
  };

  const descriptionStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: isMobile ? '4vw' : '1.25vw', // Adjust font size for mobile
    padding: '0 5%', // Adjust padding for text alignment
    margin: '1vw 0 3vw 0', // Margin for spacing
    color: '#333', // Adjust color for readability
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Seamless Security Meets Style with Custom Doors and Windows.</h2>
      <p style={descriptionStyle}>
        Our custom doors and windows are the epitome of elegance and security, meticulously crafted to enhance your home's aesthetic and safety. With a focus on innovative design and durability, we offer a wide range of styles and finishes to perfectly match your architectural needs. Each product is designed with precision engineering, ensuring optimal functionality without compromising on style. From advanced security features to energy-efficient materials, our doors and windows offer a perfect blend of form and function for the modern homeowner.
      </p>
      <div style={gridStyle}>
        <ServiceItem imageUrl="/RollerDoor1.jpg" title="Roller Shutters" />
        <ServiceItem imageUrl="/Blinds1.jpg" title="Curtins" />
        <ServiceItem imageUrl="/SecurityDoor1.jpg" title="Security Doors" />
        <ServiceItem imageUrl="/Window1.jpg" title="Windows" />
        <ServiceItem imageUrl="/Window1.jpg" title="Fly Screens" />
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
      <ProductShowcase />
      <Footer />
    </div>
  )
}
