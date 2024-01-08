import React, { useState, useEffect, CSSProperties } from 'react';

const HomeForm: React.FC = () => {
  // Initialize isMobile with a default value
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on window size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Set the initial state based on the current window size
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const containerStyle: CSSProperties = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const formContainerStyle: CSSProperties = {
    height: 'calc(100vh - 80px)',
    width: isMobile ? '100%' : '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5vw',
    boxSizing: 'border-box',
    order: isMobile ? 2 : 0,
  };

  const inputStyle: CSSProperties = {
    marginBottom: isMobile ? '5%' : '2vw',
    padding: isMobile ? '2%' : '0.5vw',
    borderRadius: isMobile ? '5%' : '0.5vw',
    border: '1px solid black',
  };

  const buttonStyle: CSSProperties = {
    padding: isMobile ? '3%' : '1.5vw',
    border: 'none',
    borderRadius: '0.5vw',
    color: 'white',
    fontSize: 'min(1.2vw, 14px)',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 87, 255)',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const hoverButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: 'rgba(0, 77, 255)',
    transform: 'scale(1.05)',
  };

  const imageStyle: CSSProperties = {
    height: 'calc(100vh - 80px)',
    width: isMobile ? '100%' : '50%',
    backgroundImage: 'url(/RollerDoor1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    order: isMobile ? 1 : 0,
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}></div>
      <div style={formContainerStyle}>
        <p style={{ fontSize: '2.5vw', marginBottom: '2vw', fontWeight: 'bold' }}>
          Inquiry
        </p>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
        }}>
          <input type="text" id="name" name="name" placeholder="Name" style={inputStyle} />
          <input type="email" id="email" name="email" placeholder="Email" style={inputStyle} />
          <input type="phone" id="phone" name="phone" placeholder="Phone Number" style={inputStyle} />
          <textarea id="message" name="message" placeholder="Message" rows={4} style={inputStyle} />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.cssText = Object.entries(hoverButtonStyle).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`).join(';'))}
            onMouseLeave={(e) => (e.currentTarget.style.cssText = Object.entries(buttonStyle).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`).join(';'))}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeForm;
