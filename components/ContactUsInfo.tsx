import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUsInfo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    gap: '20px',
  };

  const gridStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    gap: '20px',
  };

  const cardStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '200px',
    textAlign: 'center',
  };

  const titleStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const textStyle: CSSProperties = {
    fontSize: '1rem',
    marginBottom: '10px',
  };

  const iconStyle: CSSProperties = {
    marginRight: '10px',
    fontSize: '1.2rem',
    color: 'rgb(0, 87, 255)',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2 
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            marginBottom: "1.5vw",
            fontWeight: "bold",
            textAlign: "center", 
          }}
        >
          Get in Touch
        </h2>
        <p 
          style={{     
            textAlign: "center",
            fontSize: isMobile ? "4vw" : "1.25vw",
            padding: "0 5%",
            margin: "1vw 0 3vw 0",
            color: "#333", 
          }}
        >
          Need more information about our insurance solutions? Contact us today to find the right coverage for your needs.
        </p>
      </div>
      <div style={gridStyle}>
        <div style={cardStyle}>
          <div style={titleStyle}>
            <FontAwesomeIcon icon={faMap} style={iconStyle} aria-hidden="true" />
            <p>Our Location</p>
          </div>
          <div style={textStyle}>
            <a href="https://www.google.com/maps/search/?api=1&query=3/48+Barretta+Rd,+Ravenhall,+VIC+3023,+Australia" target="_blank" rel="noopener noreferrer">
              3/48 Barretta Rd, Ravenhall, VIC 3023, Australia
            </a>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            <p>Call Us On</p>
          </div>
          <div style={textStyle}>
            <a href="tel:0434227688">0434 227 688</a> - <strong>Steven Vo</strong>
          </div>
          <div style={textStyle}>
            <a href="tel:0401086636">0401 086 636</a> - <strong>Michael Tran</strong>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <p>Email us</p>
          </div>
          <div style={textStyle}>
            <a href="mailto:DTMDGROUP@outlook.com.au">DTMDGROUP@outlook.com.au</a>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: isMobile ? '300px' : '400px', marginTop: '20px' }}>
        <iframe
          title="DT Security Doors & Shutters Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: '0' }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=3%2F48%20Barretta%20Rd%20Ravenhall%20VIC%203023%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsInfo;
