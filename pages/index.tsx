import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";

//images
export default function Home() {
  return (
    <>
      <Header />
      <MainHeader />

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%)",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "578px",
            height: "340px",
            borderRadius: "12px",
            opacity: 0.7,
            background:
              "linear-gradient(0deg, rgba(130, 123, 114, 0.22) 0%, rgba(130, 123, 114, 0.22) 100%), #D9D9D9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
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
            <p style={{ fontSize: "1.5vw" }}>
              Secure and Beautify Your Home with XYZ Company
            </p>
            <p style={{ fontSize: "1vw" }}>
              Expert Craftsmanship in Security Doors, Blinds, Flyscreens, and
              More
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "70%",
              padding: "1rem",
            }}
          >
            <button
              style={{
                borderRadius: "4px",
                border: "1px solid #C9E2F9",
                background: "rgba(0, 87, 255, 0.64)",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
                color: "#FFF",
                fontFamily: "Lexend",
                fontSize: "1vw",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "12px",
                textTransform: "capitalize",
                padding: "1vw",
              }}
            >
              Explore Our Range
            </button>
            <button
              style={{
                borderRadius: "4px",
                border: "1px solid rgba(0, 87, 255, 0.64)",
                background: "transparent",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
                color: "rgba(0, 87, 255, 0.64)",
                fontFamily: "Lexend",
                fontSize: "1vw",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "12px",
                textTransform: "capitalize",
                padding: "1vw",
              }}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3>Our Services</h3>

        <div>
          <div
            style={{
              backgroundImage: `url(/RollerDoor1.jpg)`,
              backgroundSize: "cover", // Optional: Adjust how the image covers the div
              backgroundPosition: "center", // Optional: Adjust the position of the image
              height: "200px", // Set the height as needed
              width: "100%", // Set the width as needed
            }}
          ></div>

          <div
            style={{
              backgroundImage: `url("/Blinds1.jpg"])`,
              backgroundSize: "cover", // Optional: Adjust how the image covers the div
              backgroundPosition: "center", // Optional: Adjust the position of the image
              height: "200px", // Set the height as needed
              width: "100%", // Set the width as needed
            }}
          ></div>

          <div
            style={{
              backgroundImage: `url("/SecurityDoor1.jpg")`,
              backgroundSize: "cover", // Optional: Adjust how the image covers the div
              backgroundPosition: "center", // Optional: Adjust the position of the image
              height: "200px", // Set the height as needed
              width: "100%", // Set the width as needed
            }}
          ></div>

          <div
            style={{
              backgroundImage: `url("/Window1.jpg")`,
              backgroundSize: "cover", // Optional: Adjust how the image covers the div
              backgroundPosition: "center", // Optional: Adjust the position of the image
              height: "200px", // Set the height as needed
              width: "100%", // Set the width as needed
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
