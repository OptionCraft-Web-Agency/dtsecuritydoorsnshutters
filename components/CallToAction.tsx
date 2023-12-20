import React from 'react';

const CallToAction: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    height: '50vh',
    width: '100%',
    backgroundImage: `url(/RollerDoor2.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '30px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: '4px',
    border: '1px solid #C9E2F9',
    background: 'rgba(0, 87, 255)',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    color: '#FFF',
    fontSize: '1vw',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '12px',
    textTransform: 'capitalize',
    padding: '1vw',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const hoverStyle: React.CSSProperties = {
    ...buttonStyle,
    background: '#0056b3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p style={{ fontSize: '2vw', padding: '10px 0px', fontWeight: 'bold' }}>
          Secure Your Home With Us
        </p>
        <p style={{ fontSize: '1vw', padding: '5px 0px' }}>
          Contact us today to schedule a consultation or ask any questions.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '70%', padding: '1rem' }}>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.cssText = Object.entries(hoverStyle).map(([key, value]) => `${key}:${value}`).join(';'))}
            onMouseLeave={(e) => (e.currentTarget.style.cssText = Object.entries(buttonStyle).map(([key, value]) => `${key}:${value}`).join(';'))}
          >
            Learn More
          </button>

          <button
            style={{ ...buttonStyle, background: 'white', color: 'rgba(0, 87, 255)' }}
            onMouseEnter={(e) => (e.currentTarget.style.cssText = Object.entries({ ...hoverStyle, background: 'white', color: '#0056b3' }).map(([key, value]) => `${key}:${value}`).join(';'))}
            onMouseLeave={(e) => (e.currentTarget.style.cssText = Object.entries({ ...buttonStyle, background: 'white', color: 'rgba(0, 87, 255)' }).map(([key, value]) => `${key}:${value}`).join(';'))}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
