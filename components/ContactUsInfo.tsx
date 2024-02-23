import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUsInfo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the window size initially and set the isMobile state
    setIsMobile(window.innerWidth < 768);

    // Function to update the state based on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean-up function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    color: 'black',
    padding: isMobile ? '2vw' : '20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  };

  const columnStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: "20px",
  };

  const titleStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: isMobile ? '3.5vw' : '2vw',
  };

  const textStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: isMobile ? '3.5vw' : 'inherit', // Adjusted fontSize to use 'inherit' for non-mobile sizes
    marginBottom: '10px', // Added to space out the contact details
  };

  const timeTextStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // Keeps items spaced apart but within their container
    width: '100%', // Ensures the container fills its parent
    fontSize: isMobile ? '3.5vw' : 'inherit',
    marginBottom: '10px',
  }

  const iconStyle: CSSProperties = {
    marginRight: '10px',
    fontSize: isMobile ? '3.5vw' : 'inherit', // Adjusted fontSize to match text
  };

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <p style={titleStyle}>Contact Details</p>
        <div style={textStyle}>
          <FontAwesomeIcon icon={faMap} style={iconStyle} aria-hidden="true" />
          <span>3/48 Barretta Rd, Ravenhall, VIC 3023, Australia</span>
        </div>
        <p style={textStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            0434 227 688{'\u00A0'}-{'\u00A0'}<strong>Steven Vo</strong>
          </p>
          <p style={textStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            0401 086 636{'\u00A0'}-{'\u00A0'}<strong>Michael Tran</strong>
          </p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
          DTMDGROUP@outlook.com.au
        </p>
        <div style={{ width: '100%', height: '200px', marginTop: '20px' }}>
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

      <div style={columnStyle}>
        <p style={titleStyle}>Opening Hours</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%', width: '100%', justifyContent: 'space-evenly' }}>
          <p style={timeTextStyle}><strong>Monday:</strong> 8:30am-5:30pm</p>
          <p style={timeTextStyle}><strong>Tuesday:</strong> 8:30am-5:30pm</p>
          <p style={timeTextStyle}><strong>Wednesday:</strong> 8:30am-5:30pm</p>
          <p style={timeTextStyle}><strong>Thursday:</strong> 8:30am-5:30pm</p>
          <p style={timeTextStyle}><strong>Friday:</strong> 8:30am-5:30pm</p>
          <p style={timeTextStyle}><strong>Saturday:</strong> 8:30am-2:30pm</p>
          <p style={timeTextStyle}><strong>Sunday:</strong> Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
