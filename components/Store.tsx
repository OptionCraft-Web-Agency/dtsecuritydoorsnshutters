import React, { useState, CSSProperties } from 'react';
import Image from 'next/image';

type ServiceItemProps = {
  imageUrl: string;
  title: string;
};

const Store: React.FC = () => {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '5vw 0',
    height: 'calc(100vh - 80px)',
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.5vw',
    marginBottom: '2vw',
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1vw',
    width: '80%',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Seamless Security Meets Style with Custom Doors and Windows.</h2>
      <div style={gridStyle}>
        <ServiceItem imageUrl="/RollerDoor1.jpg" title="Roller Doors" />
        <ServiceItem imageUrl="/Blinds1.jpg" title="Blinds" />
        <ServiceItem imageUrl="/SecurityDoor1.jpg" title="Security Doors" />
        <ServiceItem imageUrl="/Window1.jpg" title="Windows" />
      </div>
    </div>
  );
};

const ServiceItem: React.FC<ServiceItemProps> = ({ imageUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle: CSSProperties = {
    textAlign: 'center',
    paddingBottom: '1vw',
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
    height: '10vw',
    marginBottom: '1vw',
  };

  const titleStyle: CSSProperties = {
    fontSize: '1.2vw',
  };

  return (
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
  );
};

export default Store;
