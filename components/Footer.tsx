import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
      {/* Contact Section */}
      <div style={contactSectionStyle}>
        <div style={{ width: isMobile ? '100%' : '65%', display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: isMobile ? '3.5vw' : '2vw' }}>Contact Details</p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faMap} style={{ marginRight: "10px" }} />
            3/48 Barretta Rd Ravenhall VIC 3023 Australia
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
            0434 227 688 - Steven Vo
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
            0401 086 636 - Michael Tran
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: isMobile ? '3.5vw' : 'inherit' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
            DTMDGROUP@outlook.com.au
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
            src="https://maps.google.com/maps?q=3%2F48%20Barretta%20Rd%20Ravenhall%20VIC%203023%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
        <div style={{ width: isMobile ? '100%' : '35%', display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: isMobile ? '3.5vw' : '2vw' }}>Opening Hours</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%", width: "100%", justifyContent: "space-evenly" }}>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Monday:</strong> 8:30am-5:30pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Tuesday:</strong> 8:30am-5:30pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Wednesday:</strong> 8:30am-5:30pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Thursday:</strong> 8:30am-5:30pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Friday:</strong> 8:30am-5:30pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Saturday:</strong> 8:30am-2:30pm</p>
            <p style={{ fontSize: isMobile ? '3.5vw' : 'inherit' }}><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
