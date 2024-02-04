import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';

const AboutUsInfo: React.FC = () => {
  // State to manage screen width
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

  // Style definitions
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    padding: isMobile ? '0 10%' : '0 4vw', // Adjust padding for mobile
  };

  const paragraphStyle: CSSProperties = {
    fontSize: isMobile ? '6vw' : '2.5rem', // Adjust font size for mobile
    marginBottom: '2vw',
    fontWeight: 'bold',
  };

  const descriptionStyle: CSSProperties = {
    marginBottom: '1vw',
    fontSize: isMobile ? '4vw' : '1.25vw', // Adjust font size for mobile
  };

  const imageContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '1vw',
  };

  // Adjust image dimensions for mobile
  const imageWidth = isMobile ? 80 : 100;
  const imageHeight = isMobile ? 80 : 100;

  const buttonStyle: CSSProperties = {
    borderRadius: '4px',
    border: '1px solid rgba(0, 87, 255)',
    background: 'white',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    color: 'rgba(0, 87, 255)',
    fontSize: isMobile ? '4vw' : '1vw', // Adjust font size for mobile
    fontStyle: 'normal',
    lineHeight: isMobile ? '5vw' : '1.2vw', // Adjust line height for mobile
    textTransform: 'capitalize',
    padding: isMobile ? '3vw' : '1vw', // Adjust padding for mobile
    width: isMobile ? '50vw' : '10vw', // Adjust width for mobile
    margin: '2vw 0',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
  };

  const hoverButtonStyle: CSSProperties = {
    ...buttonStyle,
    background: 'rgba(0, 87, 255)',
    color: 'white',
  };

  // Function to convert CSSProperties to a style string
  const convertStyleToString = (style: CSSProperties): string => {
    return Object.entries(style)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`)
      .join(';');
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        About Us
      </p>
      <p style={descriptionStyle}>
        At DT Security Doors & Shutters, client satisfaction is at the heart
        of everything we do. We understand that true client happiness goes
        beyond just offering a product; it's about providing a solution
        that brings security and elegance to your home. With a dedication to
        exceptional craftsmanship and personalized service, we ensure every
        product from security doors to plantation shutters meets your
        specific needs. Reflecting on our journey, we've evolved from
        focusing solely on steel doors to offering a comprehensive range of
        home safety solutions in Melbourne. Our expanded offerings include
        premium quality security doors, versatile blinds, fly screens, and
        elegant awnings, tailored to enhance the safety and style of your
        living space.
      </p>
      <div style={imageContainerStyle}>
        <Image
          src="/QualityLogo.png"
          alt="Quality Assurance Logo"
          width={imageWidth}
          height={imageHeight}
          layout="fixed"
        />
        <Image
          src="/WarrantyLogo.png"
          alt="Warranty Logo"
          width={imageWidth}
          height={imageHeight}
          layout="fixed"
        />
      </div>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.cssText = convertStyleToString(hoverButtonStyle)}
        onMouseLeave={(e) => e.currentTarget.style.cssText = convertStyleToString(buttonStyle)}
      >
        Contact Us
      </button>
    </div>
  );
};

export default AboutUsInfo;
