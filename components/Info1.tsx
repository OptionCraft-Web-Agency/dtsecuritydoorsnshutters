import React, { useState, useEffect, CSSProperties } from 'react';

const Info1: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Debounce function to limit the rate at which handleResize is called
    const debouncedHandleResize = debounce(handleResize, 100);

    // Set the initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', debouncedHandleResize);

    // Cleanup function
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  // Styles
  const containerStyle: CSSProperties = { textAlign: 'center' };
  const titleStyle: CSSProperties = { fontWeight: 'bold', fontSize: 'min(1.8vw, 40px)' };
  const subtitleStyle: CSSProperties = { marginBottom: '20px', fontSize: 'min(1.2vw, 26px)' };
  const flexContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-evenly',
    alignItems: isMobile ? 'center' : 'stretch',
    textAlign: 'left',
    marginTop: '20px'
  };
  const itemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    width: isMobile ? '100%' : '22%',
    marginBottom: '20px'
  };
  const imageContainerStyle: CSSProperties = { width: '10%', maxWidth: '60px' };
  const textStyle: CSSProperties = { fontWeight: 'bold', fontSize: 'min(1vw, 18px)' };
  const descriptionStyle: CSSProperties = { fontSize: 'min(1vw, 16px)' };

  return (
    <div style={{ textAlign: "center" }}>
    <p style={{ fontWeight: "bold", fontSize: "min(1.8vw, 40px)" }}>
      Maximize Comfort and Security with Diverse Roller Shutters Operation
      Modes
    </p>
    <p style={{ marginBottom: "20px", fontSize: "min(1.2vw, 26px)" }}>
      Choose an operation style that aligns with your home&apos;s design
      and your convenience needs
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        textAlign: "left",
      }}
    >
      {/* 1 */}
      <div
        style={{ display: "flex", flexDirection: "column", width: "22%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "10%", maxWidth: "4vw" }}>
            <img
              src="/RollerDoor1.jpg"
              style={{ width: "100%", height: "auto" }}
              alt="Manual Strap Winch"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "min(1vw, 18px)" }}>
              Manual Strap Winch
            </p>
            <p style={{ fontSize: "min(0.8vw, 14px)" }}>
              (Manual Operation)
            </p>
          </div>
        </div>
        <p style={{ fontSize: "min(1vw, 16px)" }}>
          The manual strap winch is an ideal choice for traditional homes,
          offering a non-invasive and electricity-free operation,
          particularly suitable for double brick structures.
        </p>
      </div>

      {/* 2 */}
      <div
        style={{ display: "flex", flexDirection: "column", width: "22%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "10%", maxWidth: "4vw" }}>
            <img
              src="/RollerDoor1.jpg"
              style={{ width: "100%", height: "auto" }}
              alt="Manual Strap Winch"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "min(1vw, 18px)" }}>
              Strap Coiler System
            </p>
            <p style={{ fontSize: "min(0.8vw, 14px)" }}>
              (Manual Operation)
            </p>
          </div>
        </div>
        <p style={{ fontSize: "min(1vw, 16px)" }}>
          Perfect for confined spaces like small washrooms, our manual
          strap coiler system offers a convenient solution for smaller
          windows, combining ease of use with space efficiency.
        </p>
      </div>

      {/* 3 */}
      <div
        style={{ display: "flex", flexDirection: "column", width: "22%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "10%", maxWidth: "4vw" }}>
            <img
              src="/RollerDoor1.jpg"
              style={{ width: "100%", height: "auto" }}
              alt="Manual Strap Winch"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "min(1vw, 18px)" }}>
              Electric Switch
            </p>
            <p style={{ fontSize: "min(0.8vw, 14px)" }}>
              (Electric Operation)
            </p>
          </div>
        </div>
        <p style={{ fontSize: "min(1vw, 16px)" }}>
          Our electrically operated shutters feature an integrated switch,
          seamlessly blending with your home&apos;s interior just like a
          regular light switch, offering both convenience and a modern
          touch.
        </p>
      </div>

      {/* 4 */}
      <div
        style={{ display: "flex", flexDirection: "column", width: "22%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "10%", maxWidth: "4vw" }}>
            <img
              src="/RollerDoor1.jpg"
              style={{ width: "100%", height: "auto" }}
              alt="Manual Strap Winch"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "min(1vw, 18px)" }}>
              Remote Control
            </p>
            <p style={{ fontSize: "min(0.8vw, 14px)" }}>
              (Electric Operation)
            </p>
          </div>
        </div>
        <p style={{ fontSize: "min(1vw, 16px)" }}>
          Experience the ultimate convenience with our remote-controlled
          roller shutters, allowing you to adjust your shutters
          effortlessly from any location in your room, adding a layer of
          modern ease to your home security.
        </p>
      </div>
    </div>
  </div>
  );
};

// Debounce function to optimize resize event handling
function debounce(func: () => void, delay: number) {
    let timer: number;
    return function() {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        func();
      }, delay);
    };
  }
  
export default Info1;