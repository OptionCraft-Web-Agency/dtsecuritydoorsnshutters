import React, { CSSProperties } from 'react';
import Image from 'next/image';

const OurServices: React.FC = () => {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '2vw 0',
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.5vw',
    marginBottom: '2vw',
    fontWeight: 'bold',
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1vw',
    width: '80%',
    margin: '0 auto',
  };

  const itemStyle: CSSProperties = {
    textAlign: 'center',
    paddingBottom: '1vw',
    color: 'white',
    backgroundColor: 'black',
    transition: 'transform 0.3s ease-in-out',
  };

  const hoverItemStyle: CSSProperties = {
    ...itemStyle,
    transform: 'scale(1.05)', // Ensure this is a string
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = hoverItemStyle.transform || ''; // Provide a fallback
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = itemStyle.transform || ''; // Provide a fallback
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Our Services</h2>

      <div style={gridStyle}>
        {/* Roller Doors */}
        <div style={itemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={{ position: 'relative', width: '100%', height: '20vw', marginBottom: '1vw' }}>
            <Image src="/RollerDoor1.jpg" alt="Roller Doors" layout="fill" objectFit="cover" />
          </div>
          <h3 style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>Roller Doors</h3>
          <p style={{ fontSize: '1vw' }}>
            High-quality roller doors designed for smooth operation and robust security.
          </p>
        </div>

        {/* Blinds */}
        <div style={itemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={{ position: 'relative', width: '100%', height: '20vw', marginBottom: '1vw' }}>
            <Image src="/Blinds1.jpg" alt="Blinds" layout="fill" objectFit="cover" />
          </div>
          <h3 style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>Blinds</h3>
          <p style={{ fontSize: '1vw' }}>
            Stylish and functional blinds to enhance your privacy and control natural lighting.
          </p>
        </div>

        {/* Security Doors */}
        <div style={itemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={{ position: 'relative', width: '100%', height: '20vw', marginBottom: '1vw' }}>
            <Image src="/SecurityDoor1.jpg" alt="Security Doors" layout="fill" objectFit="cover" />
          </div>
          <h3 style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>Security Doors</h3>
          <p style={{ fontSize: '1vw' }}>
            Durable security doors that provide peace of mind with enhanced protection.
          </p>
        </div>

        {/* Windows */}
        <div style={itemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={{ position: 'relative', width: '100%', height: '20vw', marginBottom: '1vw' }}>
            <Image src="/Window1.jpg" alt="Windows" layout="fill" objectFit="cover" />
          </div>
          <h3 style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>Windows</h3>
          <p style={{ fontSize: '1vw' }}>
            Custom-designed windows that bring natural beauty right into your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
