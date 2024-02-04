import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OurServices: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // This ensures SSR compatibility
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: isMobile ? '1vw 0' : '2vw 0',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isMobile ? '6vw' : '2.5rem', 
    marginBottom: '1rem', 
    fontWeight: 'bold',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '1vw',
    width: '80%',
    margin: '0 auto',
  };

  const itemStyle: React.CSSProperties = {
    textAlign: 'center',
    paddingBottom: '1vw',
    color: 'white',
    backgroundColor: 'black',
    transition: 'transform 0.3s ease-in-out',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5vw' : '1vw',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: isMobile ? '3vw' : '1.2vw', 
    fontWeight: 'bold',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative', 
    width: '100%', 
    height: '20vw', 
    marginBottom: '1vw',
  };

  const services = [
    {
      image: '/RollerDoor1.jpg',
      name: 'Roller Doors',
      description: 'High-quality roller doors designed for smooth operation and robust security.'
    },
    {
      image: '/Blinds1.jpg',
      name: 'Blinds',
      description: 'Stylish and functional blinds to enhance your privacy and control natural lighting.'
    },
    {
      image: '/SecurityDoor1.jpg',
      name: 'Security Doors',
      description: 'Durable security doors that provide peace of mind with enhanced protection.'
    },
    {
      image: '/Window1.jpg',
      name: 'Windows',
      description: 'Custom-designed windows that bring natural beauty right into your home.'
    }
  ];

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>Our Services</p>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            style={itemStyle}
          >
            <div style={imageContainerStyle}>
              <Image src={service.image} alt={service.name} layout="fill" objectFit="cover" />
            </div>
            <p style={nameStyle}>{service.name}</p>
            <p style={descriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
