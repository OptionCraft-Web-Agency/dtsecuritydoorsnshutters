import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUsInfo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    backgroundColor: 'white',
    color: 'black',
    padding: isMobile ? '10px' : '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const infoRowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    fontSize: isMobile ? '4vw' : '1vw',
  };

  const columnStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: isMobile ? '10px' : '20px',
  };

  const titleStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: isMobile ? '4vw' : '2vw',
  };

  const textStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: isMobile ? '3.5vw' : '1vw',
  };

  const iconStyle: CSSProperties = {
    marginRight: '10px',
    fontSize: isMobile ? '3.5vw' : '1vw',
  };

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <p style={titleStyle}>Contact Details</p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faMap} style={iconStyle} />
          30 Ralston Ave, Sunshine North VIC 3020
        </p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faPhone} style={iconStyle} />
          0434 227 688
        </p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
          dt.windowsndoors@gmail.com
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
            src="https://maps.google.com/maps?q=30%20Ralston%20Ave%2C%20Sunshine%20North%20VIC%203020&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>

      <div style={columnStyle}>
        <p style={titleStyle}>Opening Hours</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%', width: '100%', justifyContent: 'space-evenly' }}>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Monday:</span> <span>8:30am-5pm</span></p>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Tuesday:</span> <span>8:30am-5pm</span></p>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Wednesday:</span> <span>8:30am-5pm</span></p>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Thursday:</span> <span>8:30am-5pm</span></p>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Friday:</span> <span>8:30am-5pm</span></p>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Saturday:</span> <span>Closed</span></p>
          <p style={infoRowStyle}><span style={{ fontWeight: 'bold' }}>Sunday:</span> <span>Closed</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
