import React from 'react';

const HomePage: React.FC = () => {
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
          width: "578px",
          height: "340px",
          borderRadius: "12px",
          opacity: 0.7,
          background: "linear-gradient(0deg, rgba(130, 123, 114, 0.22) 0%, rgba(130, 123, 114, 0.22) 100%), #D9D9D9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
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
          <p style={{ fontSize: "1.8vw", fontWeight: 'bold' }}>
            Enhance Home Security with Customized Solutions from DT Security Doors & Shutters
          </p>
          <p style={{ fontSize: "1vw" }}>
            Discover our range of expertly crafted security doors, blinds, and flyscreens to protect and beautify your home.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "80%",
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
              fontSize: "1vw",
              fontStyle: "normal",
              lineHeight: "12px",
              textTransform: "capitalize",
              padding: "1vw",
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
              fontSize: "1vw",
              fontStyle: "normal",
              lineHeight: "12px",
              textTransform: "capitalize",
              padding: "1vw",
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
