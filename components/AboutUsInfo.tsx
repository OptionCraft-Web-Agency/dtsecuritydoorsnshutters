import React, { CSSProperties } from 'react';
import Image from 'next/image';

const AboutUsInfo: React.FC = () => {
  // Style definitions
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    padding: '0 4vw',
  };

  const paragraphStyle: CSSProperties = {     
    fontSize: '2.5vw',
    marginBottom: '2vw',
    fontWeight: 'bold',
  };

  const descriptionStyle: CSSProperties = { marginBottom: '1vw' };
  const imageContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '1vw',
  };
  const imageStyle: CSSProperties = { width: '10vw', height: '10vw' };
  const buttonStyle: CSSProperties = {
    borderRadius: '4px',
    border: '1px solid rgba(0, 87, 255)',
    background: 'white',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    color: 'rgba(0, 87, 255)',
    fontSize: '1vw',
    fontStyle: 'normal',
    lineHeight: '12px',
    textTransform: 'capitalize',
    padding: '1vw',
    width: '10vw',
    margin: '2vw 0vw',
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
        Discover the DT Security Doors & Shutters Difference: Committed to
        Excellence
      </p>
      <p style={descriptionStyle}>
        At DT Security Doors & Shutters, client satisfaction is at the heart
        of everything we do. We understand that true client happiness goes
        beyond just offering a product; it&apos;s about providing a solution
        that brings security and elegance to your home. With a dedication to
        exceptional craftsmanship and personalized service, we ensure every
        product from security doors to plantation shutters meets your
        specific needs. Reflecting on our journey, we&apos;ve evolved from
        focusing solely on steel doors to offering a comprehensive range of
        home safety solutions in Melbourne. Our expanded offerings include
        premium quality security doors, versatile blinds, fly screens, and
        elegant awnings, tailored to enhance the safety and style of your
        living space.
      </p>
      <div style={imageContainerStyle}>
        <Image
          style={imageStyle}
          src="/QualityLogo.png"
          alt="Quality Assurance Logo"
        />
        <Image
          style={imageStyle}
          src="/WarrantyLogo.png"
          alt="Warranty Logo"
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
