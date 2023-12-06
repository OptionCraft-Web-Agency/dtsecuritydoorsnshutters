import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

//images
export default function Home() {
  return (
    <>
      <div
        style={{
          width:'100vw',
          padding:'0 8vw'
        }}
      >
        <Header />
        <MainHeader />

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%)",
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
              background:
                "linear-gradient(0deg, rgba(130, 123, 114, 0.22) 0%, rgba(130, 123, 114, 0.22) 100%), #D9D9D9",
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
                  background: "rgba(0, 87, 255)",
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
                  border: "1px solid rgba(0, 87, 255)",
                  background: "white",
                  boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
                  color: "rgba(0, 87, 255)",
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "2vw 0",
          }}
        >
          <h2 style={{ fontSize: "2.5vw", marginBottom: "2vw" }}>Our Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1vw",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Full width
                  height: "20vw", // Viewport width based height
                  marginBottom: "1vw",
                }}
              >
                <Image
                  src="/RollerDoor1.jpg"
                  alt="Roller Doors"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Roller Doors</h3>
              <p style={{ fontSize: "1vw" }}>
                High-quality roller doors designed for smooth operation and robust
                security.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Take up full container width
                  height: "20vw", // Set height relative to the viewport width
                  marginBottom: "1vw", // Margin bottom
                }}
              >
                <Image
                  src="/Blinds1.jpg"
                  alt="Blinds"
                  layout="fill" // Fill the parent div
                  objectFit="cover" // Cover the area, similar to background-size: cover in CSS
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Blinds</h3>
              <p style={{ fontSize: "1vw" }}>
                Stylish and functional blinds to enhance your privacy and control
                natural lighting.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Full width
                  height: "20vw", // Height relative to the width of the viewport
                  marginBottom: "1vw", // Margin bottom
                }}
              >
                <Image
                  src="/SecurityDoor1.jpg"
                  alt="Security Doors"
                  layout="fill" // Image will fill the parent div
                  objectFit="cover" // Cover the area, will not stretch the image
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Security Doors</h3>
              <p style={{ fontSize: "1vw" }}>
                Durable security doors that provide peace of mind with enhanced
                protection.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Full width
                  height: "20vw", // Height relative to the width of the viewport
                  marginBottom: "1vw", // Margin bottom
                }}
              >
                <Image
                  src="/Window1.jpg"
                  alt="Window"
                  layout="fill" // Image will fill the parent div
                  objectFit="cover" // Cover the area, will not stretch the image
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Windows</h3>
              <p style={{ fontSize: "1vw" }}>
                Custom-designed windows that bring natural beauty right into your
                home.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height:'100vh'
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              width: "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.5vw",
                  textAlign: "left",
                  padding: "10px 0px",
                }}
              >
                Embrace the Harmony of Safety and Style
              </p>
              <p
                style={{ fontSize: "1vw", textAlign: "left", padding: "5px 0px" }}
              >
                Tailored designs to reflect your personal style
              </p>
              <p
                style={{ fontSize: "1vw", textAlign: "left", padding: "5px 0px" }}
              >
                Robust construction for assured security
              </p>
              <p
                style={{ fontSize: "1vw", textAlign: "left", padding: "5px 0px" }}
              >
                A blend of elegance and efficiency
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
                  background: "rgba(0, 87, 255)",
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
                Learn More
              </button>

              <button
                style={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 87, 255)",
                  background: "transparent",
                  boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
                  color: "rgba(0, 87, 255)",
                  fontFamily: "Lexend",
                  fontSize: "1vw",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  padding: "1vw",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div
            style={{
              width: "750px", // Container width
              height: "auto", // Height to fit content
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)", // Four columns
              gridTemplateRows: "repeat(5, 1fr)", // Six rows
              gap: "1vw", // Spacing between images
              padding: "1vw", // Padding around the grid
              paddingRight: "10vw",
            }}
          >
            {/* Image 1 - Top left, taking up two columns and three rows */}
            <div
              style={{
                gridColumn: "1 / span 2",
                gridRow: "2 / span 2",
                position: "relative", // Required for Image component with layout='fill'
                width: "100%", // Full width of the grid area
                height: "100%", // Full height of the grid area
              }}
            >
              <Image
                src="/RollerDoor1.jpg"
                alt="Outdoor Blinds"
                layout="fill" // The image will fill the dimensions of the parent div
                objectFit="cover" // The image will cover the area, like background-size: cover
              />
            </div>

            {/* Image 2 - Top right, taking up two columns and two rows */}
            <div
              style={{
                gridColumn: "3 / span 2",
                gridRow: "1 / span 2",
                position: "relative", // Needed for layout="fill"
              }}
            >
              <Image
                src="/Blinds1.jpg"
                alt="Stylish Blinds"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Image 3 - Middle right, taking up two columns and two rows, starting from the third row */}
            <div
              style={{
                gridColumn: "3 / span 2",
                gridRow: "3 / span 2",
                position: "relative",
              }}
            >
              <Image
                src="/SecurityDoor1.jpg"
                alt="Elegant Security Doors"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Image 4 - Bottom left, taking up two columns and two rows */}
            <div
              style={{
                gridColumn: "1 / span 2",
                gridRow: "4 / span 2",
                position: "relative",
              }}
            >
              <Image
                src="/Window1.jpg"
                alt="Modern Windows"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            height: "50vh",
            width: "100%",
            backgroundImage: `url(/RollerDoor2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "30px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "1.5vw", padding: "10px 0px" }}>
              Secure Your Home With Us
            </p>
            <p style={{ fontSize: "1vw", padding: "5px 0px" }}>
              Contact us today to schedule a consultation or ask any questions.
            </p>

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
                  background: "rgba(0, 87, 255)",
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
                Learn More
              </button>

              <button
                style={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 87, 255)",
                  background: "white",
                  boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
                  color: "rgba(0, 87, 255)",
                  fontFamily: "Lexend",
                  fontSize: "1vw",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  padding: "1vw",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* customer review */}
        <div
          style={{
            backgroundColor: "rgba(0, 87, 255, 0.64)",
            textAlign: "center",
            padding: "4vw 0", // Adjust padding to fit content
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center children horizontally
            margin: "30px 0px",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "2.5vw", // Increase font size for the heading
              margin: "0 0 1vw 0",
            }}
          >
            What Our Customers Are Saying
          </h2>

          <p
            style={{
              color: "white",
              fontSize: "1.25vw", // Adjust font size for the subheading
              maxWidth: "70%", // Adjust width to fit content
              margin: "0 auto 4vw", // Adjust margin to provide spacing
            }}
          >
            We guarantee our, professional services. Our objective is the
            satisfaction of our clients.
          </p>

          <div
            style={{
              backgroundColor: "white",
              fontSize: "1.25vw", // Adjust font size for the review text
              padding: "2vw",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "70%", // Adjust width to fit content
              position: "relative", // For the speech bubble effect
              margin: "0 auto", // Center the blockquote
            }}
          >
            {/* Star ratings */}
            <div style={{ fontSize: "1.5vw", color: "black", padding: "1vw 0" }}>
              {" "}
              {/* Adjust size and spacing */}
              &#9733; &#9733; &#9733; &#9733; &#9733; {/* Filled stars */}
            </div>

            <p>
              Our Security Door From DT Security Has Provided Us With Peace Of
              Mind. It&apos;s Sturdy, Reliable, And Looks Great In Our Home.
            </p>

            {/* Speech bubble arrow */}
            <div
              style={{
                position: "absolute",
                bottom: "-1vw", // Adjust to position the arrow
                left: "10%",
                width: "0",
                height: "0",
                borderLeft: "1vw solid transparent", // Adjust size to match speech bubble size
                borderRight: "1vw solid transparent",
                borderTop: "1vw solid white",
                transform: "translateX(-50%)",
              }}
            ></div>

            <p
              style={{
                fontSize: "1.5vw",
                position: "absolute",
                bottom: "-3vw",
                left: "10%",
                transform: "translateX(-50%)",
                color: "white",
              }}
            >
              {" "}
              {/* Adjust for positioning */}
              John Smith
            </p>
          </div>

          {/* Navigation dots */}
          <div
            style={{
              fontSize: "1.5vw",
              color: "white",
              marginTop: "3vw",
              display: "flex",
              gap: "0.5vw",
              justifyContent: "center",
            }}
          >
            {" "}
            {/* Use flexbox for even spacing */}
            &#9679; {/* Active dot */}
            &#9675; {/* Inactive dot */}
            &#9675; {/* Inactive dot */}
            &#9675; {/* Inactive dot */}
            &#9675; {/* Inactive dot */}
          </div>
        </div>

        {/* form */}
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              height: "calc(100vh - 80px)",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "5vw", // Changed from rem to vw
              boxSizing: "border-box",
            }}
          >
            <p style={{ fontSize: "3vw", marginBottom: "2vw" }}>Inquiry</p>{" "}
            {/* Changed font-size and margin-bottom to vw */}
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%", // Consider using a percentage for responsive width
              }}
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                style={{
                  marginBottom: "2vw",
                  padding: "1vw",
                  borderRadius: "0.5vw",
                  border: "1px solid black",
                }}
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                style={{
                  marginBottom: "2vw",
                  padding: "1vw",
                  borderRadius: "0.5vw",
                  border: "1px solid black",
                }}
              />

              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                style={{
                  marginBottom: "2vw",
                  padding: "1vw",
                  borderRadius: "0.5vw",
                  border: "1px solid black",
                }}
              />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                style={{
                  marginBottom: "2vw",
                  padding: "1vw",
                  borderRadius: "0.5vw",
                  border: "1px solid black",
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "1.5vw",
                  border: "none",
                  borderRadius: "0.5vw",
                  color: "white",
                  fontSize: "1.2vw",
                  cursor: "pointer",
                  backgroundColor: "rgba(0, 87, 255)",
                  boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
                }}
              >
                Send
              </button>
            </form>
          </div>

          <div
            style={{
              height: "calc(100vh - 80px)",
              width: "50%",
              backgroundImage: `url(/RollerDoor1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* foooter */}
        <footer
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2vw 0",
            backgroundColor: "#f0f0f0",
            color: "#333",
            fontSize: "1vw",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1vw",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "1vw",
                  width: "6vw",
                  height: "auto",
                  position: "relative",
                }}
              >
                <Image
                  src="/Logo1.png"
                  alt="Logo 1" // Remember to provide an alt attribute for accessibility
                  layout="fill"
                  objectFit="contain" // This keeps the aspect ratio of the image
                />
              </div>

              <div
                style={{
                  marginRight: "1vw",
                  width: "9vw",
                  height: "auto",
                  position: "relative",
                }}
              >
                <Image
                  src="/Logo2.png"
                  alt="Logo 2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <a href="#linkOne" style={{ margin: "0 1vw" }}>
                Home
              </a>
              <a href="#linkTwo" style={{ margin: "0 1vw" }}>
                Our Services
              </a>
              <a href="#linkThree" style={{ margin: "0 1vw" }}>
                Our Project
              </a>
              <a href="#linkFour" style={{ margin: "0 1vw" }}>
                About Us
              </a>
              <a href="#linkFive" style={{ margin: "0 1vw" }}>
                Contact Us
              </a>
            </div>
          </div>

          {/* Copyright and Links */}
          <div
            style={{
              marginTop: "1vw",
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.8vw",
            }}
          >
            <span>© 2023 Relume. All rights reserved.</span>
            <div>
              <a href="#privacy" style={{ margin: "0 1vw" }}>
                Privacy Policy
              </a>
              <a href="#terms" style={{ margin: "0 1vw" }}>
                Terms of Service
              </a>
              <a href="#cookies" style={{ margin: "0 1vw" }}>
                Cookies Settings
              </a>
            </div>
          </div>
        </footer>

        {/* contact us */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '20px',
            }}
          >
            <p style={{fontWeight:'bold', fontSize:'2.5vw'}}>Contact Details</p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faMap} style={{ marginRight: '10px' }} />
              30 Ralston Ave, Sunshine North VIC 3020
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              0434 227 688
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
              dt.windowsndoors@gmail.com
            </p>
            <div style={{ width: '100%', height: '200px', marginTop: '20px' }}>
              <iframe
                title="DT Security Doors & Shutters Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: '0' }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=30%20Ralston%20Ave%2C%20Sunshine%20North%20VIC%203020&t=&z=13&ie=UTF8&iwloc=&output=embed">
              </iframe>
            </div>
          </div>

          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '20px',
            }}
          >
            <p style={{fontWeight:'bold', fontSize:'2.5vw'}}>Opening Hours</p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height:'100%', width:'100%', justifyContent:'space-evenly' }}>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Monday:</span> <span>8:30am-5pm</span></p>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Tuesday:</span> <span>8:30am-5pm</span></p>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Wednesday:</span> <span>8:30am-5pm</span></p>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Thursday:</span> <span>8:30am-5pm</span></p>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Friday:</span> <span>8:30am-5pm</span></p>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Saturday:</span> <span>Closed</span></p>
              <p style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}><span style={{ fontWeight: 'bold' }}>Sunday:</span> <span>Closed</span></p>
            </div>

          </div>
        </div>

        {/* contact us form */}
        <div
          style={{
            height: "50vw",
            width: '100%',
            backgroundImage: `url(/RollerDoor2.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            justifyContent: 'center',
            alignItems: 'center', 
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
              justifyContent:'center',
              alignItems:'center',
              height:'100%'
            }}
          >
            <p style={{ fontSize: "2vw", padding:'10px 0px' }}>
              Enquire Form
            </p>

            <form style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%', // Consider using a percentage for responsive width
            }}>
              <div style={{width:'100%'}}>
                {/* left */}
                <div style={{width:'100%', display:'flex', justifyContent:'space-between', fontSize:'1vw'}}>
                  <input type="text" id="name" name="name" placeholder="Name" style={{ width: '49%', marginBottom: '2vw', padding: '0.5vw', borderRadius: '0.5vw',border:'1px solid black' }} />
                  <input type="email" id="email" name="email" placeholder="Email" style={{ width: '49%', marginBottom: '2vw', padding: '0.5vw', borderRadius: '0.5vw',border:'1px solid black' }} />
                </div>
                {/* right */}
                <div style={{width:'100%', display:'flex', justifyContent:'space-between', fontSize:'1vw'}}>
                  <input type="phone" id="phone" name="phone" placeholder="Phone Number" style={{ width: '49%', marginBottom: '2vw', padding: '0.5vw', borderRadius: '0.5vw',border:'1px solid black' }} />
                  <input type="address" id="address" name="address" placeholder="Address" style={{ width: '49%', marginBottom: '2vw', padding: '0.5vw', borderRadius: '0.5vw',border:'1px solid black' }} />
                </div>
              </div>
              
              <textarea id="message" name="message" placeholder="Message" rows="4" style={{ marginBottom: '2vw', padding: '0.5vw', borderRadius: '0.5vw',border:'1px solid black' }} />
              
              <button type="submit" style={{
                padding: '0.5vw',
                border: 'none',
                borderRadius: '0.5vw',
                color: 'white',
                fontSize: '1.2vw',
                cursor: 'pointer',
                backgroundColor: "rgba(0, 87, 255)",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              }}>
                Send
              </button>
            </form>
          </div>
        </div>

        {/* about us */}
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding:'0 4vw'}}>
          <p style={{fontSize:'2vw', marginBottom:'1vw'}}>AT PAGE DOORS & BLINDS WE HAVE A SIMPLE BUSINESS PHILOSOPHY – WE STRIVE FOR HAPPY AND SATISFIED CLIENTS</p>
          <p style={{marginBottom:'1vw'}}>
            Keeping clients happy always sounds like an easy task, and good businesses make it seem as though it is. In order to keep clients happy however, it’s essential to listen, observe and most importantly deliver a first class product accompanied by outstanding service. We take this aspect of our business extremely seriously as our strong reputation demands that we go above and beyond in the pursuit of satisfied clients.
            Our reputation for high standards and hard work combined with our passion for personalised service and custom made solutions coincides with our desire for customer satisfaction, which means we go above and beyond to make sure our clients love the product as much as we do.
            Travelling 10 years to the past, Page Doors & Blinds only sold steel doors. We found this to not only disadvantage ourselves but also our clients. Page Doors and Blinds identified a gap in the market and understood the need for services outside of just steel doors. We wanted to provide the highest quality Security Doors to Melbourne, as well as Blinds, Fly Screens, Blinds, Plantation Shutters, Awnings and Brio Pleated Screens.
          </p>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'1vw'}}>
            <img style={{width:'10vw', height:'10vw'}} src="/QualityLogo.png"></img>
            <img style={{width:'10vw', height:'10vw'}} src="/WarrantyLogo.png"></img>
          </div>
          <button
            style={{
              borderRadius: "4px",
              border: "1px solid rgba(0, 87, 255)",
              background: "white",
              boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              color: "rgba(0, 87, 255)",
              fontFamily: "Lexend",
              fontSize: "1vw",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "12px",
              textTransform: "capitalize",
              padding: "1vw",
              width:'10vw',
              margin:'2vw 0vw'
            }}
          >
            Contact Us
          </button>
        </div>

        {/* store */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "2vw 0",
          }}
        >
          <h2 style={{ fontSize: "2.5vw", marginBottom: "2vw" }}>Our Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1vw",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "black",
                backgroundColor: "white",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Full width
                  height: "10vw",
                  marginBottom: "1vw",
                }}
              >
                <Image
                  src="/RollerDoor1.jpg"
                  alt="Roller Doors"
                  layout="fill" // This will make the image take up the entire parent div
                  objectFit="cover" // This will cover the area, similar to background-size: cover in CSS
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Roller Doors</h3>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "black",
                backgroundColor: "white",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Take up full container width
                  height: "10vw",
                  marginBottom: "1vw", // Margin bottom
                }}
              >
                <Image
                  src="/Blinds1.jpg"
                  alt="Blinds"
                  layout="fill" // Fill the parent div
                  objectFit="cover" // Cover the area, similar to background-size: cover in CSS
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Blinds</h3>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "black",
                backgroundColor: "white",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Full width
                  height: "10vw",
                  marginBottom: "1vw", // Margin bottom
                }}
              >
                <Image
                  src="/SecurityDoor1.jpg"
                  alt="Security Doors"
                  layout="fill" // Image will fill the parent div
                  objectFit="cover" // Cover the area, will not stretch the image
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Security Doors</h3>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "1vw",
                color: "black",
                backgroundColor: "white",
                boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
              }}
            >
              <div
                style={{
                  position: "relative", // Needed for `layout="fill"`
                  width: "100%", // Full width
                  height: "10vw",
                  marginBottom: "1vw", // Margin bottom
                }}
              >
                <Image
                  src="/Window1.jpg"
                  alt="Window"
                  layout="fill" // Image will fill the parent div
                  objectFit="cover" // Cover the area, will not stretch the image
                />
              </div>
              <h3 style={{ fontSize: "1.2vw" }}>Windows</h3>
            </div>
          </div>
        </div>

        {/* info1 */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', fontSize: '1.8vw' }}>Maximize Comfort and Security with Diverse Roller Shutters Operation Modes</p>
          <p style={{ marginBottom: '20px', fontSize: '1.2vw' }}>Choose an operation style that aligns with your home's design and your convenience needs</p>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', textAlign: 'left' }}>
            {/* 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '22%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/RollerDoor1.jpg" style={{ width: '4vw', height: '4vw' }}></img>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <p style={{ fontWeight: 'bold' }}>Manual Strap Winch</p>
                  <p>(Manual Operation)</p>
                </div>
              </div>
              <p>
                The manual strap winch is an ideal choice for traditional homes, offering a non-invasive and electricity-free operation, particularly suitable for double brick structures.
              </p>
            </div>

            {/* 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '22%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/RollerDoor1.jpg" style={{ width: '4vw', height: '4vw' }}></img>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <p style={{ fontWeight: 'bold' }}>Strap Coiler System</p>
                  <p>(Manual Operation)</p>
                </div>
              </div>
              <p>
                Perfect for confined spaces like small washrooms, our manual strap coiler system offers a convenient solution for smaller windows, combining ease of use with space efficiency.
              </p>
            </div>

            {/* 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '22%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/RollerDoor1.jpg" style={{ width: '4vw', height: '4vw' }}></img>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <p style={{ fontWeight: 'bold' }}>Electric Switch</p>
                  <p>(Electric Operation)</p>
                </div>
              </div>
              <p>
                Our electrically operated shutters feature an integrated switch, seamlessly blending with your home's interior just like a regular light switch, offering both convenience and a modern touch.
              </p>
            </div>

            {/* 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '22%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/RollerDoor1.jpg" style={{ width: '4vw', height: '4vw' }}></img>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                  <p style={{ fontWeight: 'bold' }}>Remote Control</p>
                  <p>(Electric Operation)</p>
                </div>
              </div>
              <p>
                Experience the ultimate convenience with our remote-controlled roller shutters, allowing you to adjust your shutters effortlessly from any location in your room, adding a layer of modern ease to your home security.
              </p>
            </div>
          </div>
        </div>

        {/* info2 */}
        <div style={{display:'flex', flexDirection:'row'}}>
          {/* left */}
          <div style={{display:'flex',width:'50%', justifyContent:'center'}}>
            <img src="/RollerDoor1.jpg"></img>
          </div>

          {/* right */}        
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%', justifyContent:'center' }}>
            <p style={{ fontWeight: 'bold' }}>Discover the Best Roller Shutters for Enhanced Home Security</p>
            <p>Explore our highly-rated roller shutters, providing unmatched protection for your home. Delve into detailed descriptions and specifications to select the ideal shutter solution for robust home safety.</p>

            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop:'20px' }}>
              {/* left */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <p style={{ fontWeight: 'bold' }}>Advanced Protection</p>
                <p>Our roller shutters are engineered with cutting-edge security features to deter intruders and safeguard your residence effectively.</p>
              </div>

              {/* right */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <p style={{ fontWeight: 'bold' }}>Long-Lasting Durability</p>
                <p>Constructed from premium materials, our roller shutters are designed for longevity, ensuring they endure extreme weather and wear over time.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
