import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';

function debounce(func: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

const Info1: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  const containerStyle: CSSProperties = {
    textAlign: 'center',
    maxWidth: '100vw',
    padding: '4rem 0',
    backgroundColor: '#FAFAFA',
    color: '#333',
  };

  const titleStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: 'min(1.8vw, 24px)',
  };


  const flexContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '20px',
    flexWrap: 'wrap',
  };

  const itemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: isMobile ? '100%' : '22%',
    marginBottom: '20px',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    minHeight: '250px', // Ensure a minimum height for each item for consistency
  };

  const imageContainerStyle: CSSProperties = {
    width: '80px',
    height: '80px',
    marginBottom: '1.5rem',
  };

  const textStyle: CSSProperties = {
    fontWeight: 600,
    fontSize: isMobile ? '5vw' : '1rem',
    marginBottom: '1rem',
  };

  const descriptionStyle: CSSProperties = {
    fontSize: isMobile ? '4vw' : '0.9rem',
    textAlign: 'justify',
    lineHeight: '1.5',
    minHeight: '80px', // Set a minimum height for the description to align items vertically
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Maximize Comfort and Security with Diverse Roller Shutters Operation Modes</p>
      <div style={flexContainerStyle}>
      <div style={itemStyle}>
          <div style={imageContainerStyle}>
            <Image
              src="/RollerDoor1.jpg"
              width={60}
              height={60}
              alt="Manual Strap Winch"
            />
          </div>
          <p style={textStyle}>Manual Strap Winch</p>
          <p style={descriptionStyle}>
            The manual strap winch is an ideal choice for traditional homes, offering a non-invasive and electricity-free operation.
          </p>
        </div>
        <div style={itemStyle}>
          <div style={imageContainerStyle}>
            <Image
              src="/RollerDoor2.jpg"
              width={60}
              height={60}
              alt="Strap Coiler System"
            />
          </div>
          <p style={textStyle}>Strap Coiler System</p>
          <p style={descriptionStyle}>
            Perfect for confined spaces like small washrooms, our manual strap coiler system offers ease of use and space efficiency.
          </p>
        </div>
        <div style={itemStyle}>
          <div style={imageContainerStyle}>
            <Image
              src="/RollerDoor3.jpg"
              width={60}
              height={60}
              alt="Electric Switch"
            />
          </div>
          <p style={textStyle}>Electric Switch</p>
          <p style={descriptionStyle}>
            Our electrically operated shutters feature an integrated switch, seamlessly blending with your home's interior.
          </p>
        </div>
        <div style={itemStyle}>
          <div style={imageContainerStyle}>
            <Image
              src="/RollerDoor4.jpg"
              width={60}
              height={60}
              alt="Remote Control"
            />
          </div>
          <p style={textStyle}>Remote Control</p>
          <p style={descriptionStyle}>
            Experience the ultimate convenience with remote-controlled roller shutters, allowing for easy operation from anywhere in the room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info1;
