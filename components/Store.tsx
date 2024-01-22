import React, { useState, CSSProperties } from 'react';
import Image from 'next/image';
import Link from "next/link";

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
    marginBottom: '1.5vw',
    fontWeight: 'bold'
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1vw',
    width: '80%',
    margin: '0 auto',
  };

  const descriptionStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: '1.5vw',
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
    // fontWeight: 'bold'
  };

  return (
    <Link href={title === "Security Doors" ? "/Product" : title === "Roller Shutters" ? "/RollerShutters" : "#"}>
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

export default Store;
