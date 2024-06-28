import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurServices: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    padding: '4vw 0',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isMobile ? '8vw' : '3rem',
    color: '#333',
    fontWeight: '600',
    marginBottom: '2vw',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2vw',
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
    fontWeight: 'bold',
    fontSize: isMobile ? '4vw' : '1.2rem',
    marginBottom: '0.5vw',
  };

  const services = [
    {
      image: '/RollerDoor1.jpg',
      name: 'Roller Shutters',
      description: 'High-quality roller shutters designed for smooth operation and robust security.',
      link: '/RollerShutters',
    },
    {
      image: '/image/CurtinImage/CurtinImage1.jpg',
      name: 'Curtains',
      description: 'Stylish and functional curtains to enhance your privacy and control natural lighting.',
      link: '/Curtains',
    },
    {
      image: '/image/SecurityDoorImage/SecurityDoorImage13.jpg',
      name: 'Security Doors',
      description: 'Durable security doors that provide peace of mind with enhanced protection.',
      link: '/Product',
    },
    {
      image: '/image/WindowImage/WindowImage1.jpg',
      name: 'Windows',
      description: 'Custom-designed windows that bring natural beauty right into your home.',
      link: '/Windows',
    },
    {
      image: '/image/FlyScreenImage/FlyScreenImage2.jpg',
      name: 'Fly Screen',
      description: 'Durable fly screens for effective insect protection and easy integration with any window style.',
      link: '/FlyScreens',
    },
  ];

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>Our Services</p>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <div
              style={itemStyle}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  layout="fill" 
                  objectFit="cover" 
                  placeholder="blur" 
                  blurDataURL="/placeholder.png" // Placeholder image
                />
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

export default OurServices;
