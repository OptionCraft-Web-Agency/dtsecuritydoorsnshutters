import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  isMobile: boolean;
}

interface OverlayProps {
  isHovered: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4vw 0;
`;

const Heading = styled.p<Props>`
  font-size: ${({ isMobile }) => (isMobile ? '8vw' : '2rem')};
  color: #333;
  font-weight: bold;
  margin-bottom: 2vw;
`;

const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (isMobile ? '1fr' : 'repeat(4, 1fr)')};
  gap: ${({ isMobile }) => (isMobile ? '4vw' : '2vw')};
  width: 90%;
  margin: 0 auto;
`;

const Item = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
`;

const TextContainer = styled.div`
  padding: 1vw;
`;

const OverlayText = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const ServiceName = styled.p<Props>`
  font-weight: bold;
  font-size: ${({ isMobile }) => (isMobile ? '4vw' : '1.2rem')};
  margin-bottom: 0.5vw;
`;

const services = [
  {
    image: '/RollerDoor1.jpg',
    name: 'Roller Shutters',
    description: 'High-quality roller shutters designed for smooth operation and robust security.',
    link: '/RollerShutters',
  },
  {
    image: '/image/CurtinImage/CurtinImage1.jpg',
    name: 'Curtains', // Corrected spelling from 'Curtins' to 'Curtains'
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

  return (
    <Container>
      <Heading isMobile={isMobile}>Our Services</Heading>
      <Grid isMobile={isMobile}>
        {services.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <Item
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
              <TextContainer>
                <ServiceName isMobile={isMobile}>{service.name}</ServiceName>
              </TextContainer>
              <OverlayText isHovered={hoveredIndex === index}>
                <ServiceName isMobile={isMobile}>{service.name}</ServiceName>
                <p>{service.description}</p>
              </OverlayText>
            </Item>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default OurServices;
