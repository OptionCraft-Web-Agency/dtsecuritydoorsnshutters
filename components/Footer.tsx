import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const footerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vw 0',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: '1vw',
    width: '100%',
  };

  const logoContainerStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f0f0f0', // Matching background color
    padding:'0 20px',
    paddingBottom: '1vw',
  };

  const linkStyle: CSSProperties = {
    margin: '0 1vw',
    textDecoration: 'none',
    color: '#333',
    transition: 'color 0.3s',
  };

  const contactSectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0', // Matching background color
    color: 'black',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  };

  const contactDetailsStyle: CSSProperties = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  };

  // ... other style definitions ...

  return (
    <footer style={footerStyle}>
      {/* Footer Top Part */}
      <div style={logoContainerStyle}>
        {/* Logos */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo 1 */}
          <div style={{ marginRight: '1vw', width: '6vw', height: 'auto', position: 'relative' }}>
            <Image src="/Logo1.png" alt="Logo 1" layout="fill" objectFit="contain" />
          </div>
          {/* Logo 2 */}
          <div style={{ marginRight: '1vw', width: '9vw', height: 'auto', position: 'relative' }}>
            <Image src="/Logo2.png" alt="Logo 2" layout="fill" objectFit="contain" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <a href="#linkOne" style={linkStyle}>Home</a>
          <a href="#linkTwo" style={linkStyle}>Our Services</a>
          <a href="#linkThree" style={linkStyle}>Our Project</a>
          <a href="#linkFour" style={linkStyle}>About Us</a>
          <a href="#linkFive" style={linkStyle}>Contact Us</a>
        </div>
      </div>

      <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            color: "black",
            padding: "0px 20px",
            fontFamily: "Arial, sans-serif",
            width: "100%",
            background: "#f0f0f0"
          }}
        >
          <div
            style={{
              width: "65%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "2vw" }}>
              Contact Details
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faMap} style={{ marginRight: "10px" }} />
              30 Ralston Ave, Sunshine North VIC 3020
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
              0434 227 688
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px" }}
              />
              dt.windowsndoors@gmail.com
            </p>
            <div style={{ width: "100%", height: "200px", marginTop: "20px" }}>
              <iframe
                title="DT Security Doors & Shutters Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=30%20Ralston%20Ave%2C%20Sunshine%20North%20VIC%203020&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          <div
            style={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "2vw" }}>Opening Hours</p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Monday:</span>{" "}
                <span>8:30am-5pm</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Tuesday:</span>{" "}
                <span>8:30am-5pm</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Wednesday:</span>{" "}
                <span>8:30am-5pm</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Thursday:</span>{" "}
                <span>8:30am-5pm</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Friday:</span>{" "}
                <span>8:30am-5pm</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Saturday:</span>{" "}
                <span>Closed</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Sunday:</span>{" "}
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
