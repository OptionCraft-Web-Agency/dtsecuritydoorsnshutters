import React, { useState, useEffect } from 'react';

const CallToAction: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveredLearnMore, setIsHoveredLearnMore] = useState(false);
  const [isHoveredContactUs, setIsHoveredContactUs] = useState(false);

  const navigateToServices = () => {
    window.location.href = '/Services'; 
  };

  const navigateToContacts = () => {
    window.location.href = '/ContactUs'; 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    height: isMobile ? 'auto' : '50vh',
    width: '100%',
    backgroundImage: `url(/RollerDoor2.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '30px 0px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '20px' : '0',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: isMobile ? '20px' : '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: isMobile ? 'center' : 'left',
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: '4px',
    border: '1px solid #C9E2F9',
    background: 'rgba(0, 87, 255)',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    color: '#FFF',
    fontSize: isMobile ? '3vw' : '1vw',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: isMobile ? '16px' : '12px',
    textTransform: 'capitalize',
    padding: isMobile ? '10px' : '1vw',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    margin: isMobile ? '10px 0' : '0',
  };

  const hoverStyle: React.CSSProperties = {
    ...buttonStyle,
    background: '#0056b3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p style={{ fontSize: isMobile ? '4vw' : '2vw', padding: '10px 0px', fontWeight: 'bold' }}>
          Secure Your Home With Us
        </p>
        <p style={{ fontSize: isMobile ? '3vw' : '1vw', padding: '5px 0px' }}>
          Contact us today to schedule a consultation or ask any questions.
        </p>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', width: isMobile ? '100%' : '70%', padding: isMobile ? '0' : '1rem' }}>
          <button
            style={isHoveredLearnMore ? hoverStyle : buttonStyle}
            onMouseEnter={() => setIsHoveredLearnMore(true)}
            onMouseLeave={() => setIsHoveredLearnMore(false)}
            onClick={navigateToServices}
          >
            Learn More
          </button>

          <button
            style={isHoveredContactUs ? { ...hoverStyle, background: 'white', color: '#0056b3' } : { ...buttonStyle, background: 'white', color: 'rgba(0, 87, 255)' }}
            onMouseEnter={() => setIsHoveredContactUs(true)}
            onMouseLeave={() => setIsHoveredContactUs(false)}
            onClick={navigateToContacts}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
