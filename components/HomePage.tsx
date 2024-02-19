import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const navigateToServices = () => {
    window.location.href = '/Services'; 
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

  const baseButtonStyle: React.CSSProperties = {
    borderRadius: '4px',
    border: '1px solid #C9E2F9',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    color: '#FFF',
    fontSize: 'min(3vw, 12px)',
    padding: 'min(1vw, 10px)',
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    marginBottom: isMobile ? '10px' : '0',
    marginLeft: isMobile ? '0' : '10px',
  };


  const getButtonStyle = (buttonType: string): React.CSSProperties => {
    let style = { ...baseButtonStyle };

    if (buttonType === 'estimate') {
      style = { ...style, background: 'white', color: 'rgba(0, 87, 255)' };
    } else {
      style = { ...style, background: 'rgba(0, 87, 255)' };
    }

    if (hoveredButton === buttonType) {
      style = { ...style, background: '#0056b3', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', color: '#FFF' }; // Change font color to white on hover
    }

    return style;
  };

  const handleMouseEnter = (buttonType: string) => {
    setHoveredButton(buttonType);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: '4px',
    border: '1px solid #C9E2F9',
    background: 'rgba(0, 87, 255)',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    color: '#FFF',
    fontSize: 'min(3vw, 12px)',
    padding: 'min(1vw, 10px)',
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    marginBottom: isMobile ? '10px' : '0',
    marginLeft: isMobile ? '0' : '10px',
  };

  const hoverStyle: React.CSSProperties = {
    ...buttonStyle,
    background: '#0056b3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const applyHoverStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    Object.assign(e.currentTarget.style, hoverStyle);
  };

  const removeHoverStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    Object.assign(e.currentTarget.style, buttonStyle);
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%)",
        width: "100%",
        height: "calc(100vh - 80px)",
        backgroundImage: `url(/RollerDoor3.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "90%",
          borderRadius: "12px",
          opacity: 0.7,
          background: "linear-gradient(0deg, rgba(130, 123, 114, 0.22) 0%, rgba(130, 123, 114, 0.22) 100%), #D9D9D9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <p style={{ fontSize: "min(4vw, 24px)", fontWeight: "bold" }}>
            Enhance Home Security with Customized Solutions from DT Security Doors & Shutters
          </p>
          <p style={{ fontSize: "min(3vw, 16px)" }}>
            Discover our range of expertly crafted security doors, blinds, and flyscreens to protect and beautify your home.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            padding: "1rem",
          }}
        >
          <button
            style={buttonStyle}
            onMouseEnter={applyHoverStyle}
            onMouseLeave={removeHoverStyle}
            onClick={navigateToServices}
          >
            View Our Product Range
          </button>
          <button
            style={getButtonStyle('estimate')}
            onMouseEnter={() => handleMouseEnter('estimate')}
            onMouseLeave={handleMouseLeave}
          >
            Request a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
