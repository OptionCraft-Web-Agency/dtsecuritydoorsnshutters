import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            style={{
              borderRadius: "4px",
              border: "1px solid #C9E2F9",
              background: "rgba(0, 87, 255)",
              boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              color: "#FFF",
              fontSize: "min(3vw, 12px)",
              padding: "min(1vw, 10px)",
              textTransform: "capitalize",
              marginBottom: isMobile ? "10px" : "0",
            }}
          >
            View Our Product Range
          </button>
          <button
            style={{
              borderRadius: "4px",
              border: "1px solid rgba(0, 87, 255)",
              background: "white",
              boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              color: "rgba(0, 87, 255)",
              fontSize: "min(3vw, 12px)",
              padding: "min(1vw, 10px)",
              textTransform: "capitalize",
              marginLeft: isMobile ? "0" : "10px",
            }}
          >
            Request a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
