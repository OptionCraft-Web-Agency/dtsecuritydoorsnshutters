import React, { useState, useEffect, CSSProperties } from 'react';

const Info2: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0

  useEffect(() => {
    // Set the initial width once the component has mounted
    setWindowWidth(window.innerWidth);

    const debounce = (func: () => void, delay: number) => {
      let timer: NodeJS.Timeout;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, delay);
      };
    };

    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  // Styles
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const imageContainerStyle: CSSProperties = {
    display: 'flex',
    width: isMobile ? '100%' : '50%',
    justifyContent: 'center'
  };

  const contentContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: isMobile ? '100%' : '50%',
    justifyContent: 'center',
    padding: "2vw"
  };

  const innerContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    marginTop: '20px'
  };

  const columnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: isMobile ? '100%' : '50%',
  };

  const textStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: isMobile ? 'smaller' : 'inherit'
  };

  return (
    <div style={containerStyle}>
      {/* left */}
      <div style={imageContainerStyle}>
        <img src="/RollerDoor1.jpg" alt="Roller Door" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* right */}
      <div style={contentContainerStyle}>
        <p style={textStyle}>
          Discover the Best Roller Shutters for Enhanced Home Security
        </p>
        <p>
          Explore our highly-rated roller shutters, providing unmatched
          protection for your home. Delve into detailed descriptions and
          specifications to select the ideal shutter solution for robust
          home safety.
        </p>

        <div style={innerContainerStyle}>
          {/* Advanced Protection */}
          <div style={columnStyle}>
            <p style={textStyle}>Advanced Protection</p>
            <p>
              Our roller shutters are engineered with cutting-edge security
              features to deter intruders and safeguard your residence
              effectively.
            </p>
          </div>

          {/* Long-Lasting Durability */}
          <div style={columnStyle}>
            <p style={textStyle}>Long-Lasting Durability</p>
            <p>
              Constructed from premium materials, our roller shutters are
              designed for longevity, ensuring they endure extreme weather
              and wear over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;
