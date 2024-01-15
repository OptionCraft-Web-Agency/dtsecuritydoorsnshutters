import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ContactUsInfo from './ContactUsInfo';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const footerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '5vw' : '2vw 0',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: isMobile ? '4vw' : '1vw',
    width: '100%',
  };

  const logoContainerStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #ddd',
    padding: isMobile ? '2vw' : '0 20px',
    paddingBottom: isMobile ? '2vw' : '1vw',
    backgroundColor: '#f0f0f0',
  };

  const linkStyle: CSSProperties = {
    margin: isMobile ? '1vw 0' : '0 1vw',
    textDecoration: 'none',
    color: '#333',
    transition: 'color 0.3s',
    fontSize: isMobile ? '3.5vw' : 'inherit',
  };

  const contactSectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    backgroundColor: 'white',
    color: 'black',
    padding: isMobile ? '2vw' : '20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    background: '#f0f0f0',
  };

  return (
    <footer style={footerStyle}>
      {/* Footer Top Part */}
      <div style={logoContainerStyle}>
        {/* Logos */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo 1 */}
          <div style={{ marginRight: '1vw', width: isMobile ? '100%' : '6vw', height: 'auto', position: 'relative' }}>
            <Image src="/Logo1.png" alt="Logo 1" layout="fill" objectFit="contain" />
          </div>
          {/* Logo 2 */}
          <div style={{ marginRight: '1vw', width: isMobile ? '100%' : '9vw', height: 'auto', position: 'relative' }}>
            <Image src="/Logo2.png" alt="Logo 2" layout="fill" objectFit="contain" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <a href="#linkOne" style={linkStyle}>Home</a>
          <a href="#linkTwo" style={linkStyle}>Our Services</a>
          <a href="#linkThree" style={linkStyle}>Our Project</a>
          <a href="#linkFour" style={linkStyle}>About Us</a>
          <a href="#linkFive" style={linkStyle}>Contact Us</a>
        </div>
      </div>

      {/* Contact Section */}
      <div style={contactSectionStyle}>
        <div style={{ width: isMobile ? '100%' : '65%', display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: isMobile ? '3.5vw' : '2vw' }}>Contact Details</p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faMap} style={{ marginRight: "10px" }} />
            30 Ralston Ave, Sunshine North VIC 3020
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
            0434 227 688
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
            dt.windowsndoors@gmail.com
          </p>
          <div style={{ width: "100%", height: "200px", marginTop: "20px" }}>
            <iframe
            title="DT Security Doors & Shutters Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=30%20Ralston%20Ave%2C%20Sunshine%20North%20VIC%203020&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
        <div style={{ width: isMobile ? '100%' : '35%', display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: isMobile ? '3.5vw' : '2vw' }}>Opening Hours</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%", width: "100%", justifyContent: "space-evenly" }}>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Monday:</strong> 8:30am-5pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Tuesday:</strong> 8:30am-5pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Wednesday:</strong> 8:30am-5pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Thursday:</strong> 8:30am-5pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Friday:</strong> 8:30am-5pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Saturday:</strong> Closed</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
