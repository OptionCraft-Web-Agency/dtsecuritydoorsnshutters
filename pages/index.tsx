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
          height: "calc(100vh - 80px)",
          backgroundImage: `url(/RollerDoor3.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center', 
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
            margin:'20px'
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '2vw 0'
        }}
      >
        <h2 style={{ fontSize: '2.5vw', marginBottom:'2vw' }}>Our Services</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1vw',
            width: '80%',
            margin: '0 auto'
          }}
        >
          <div style={{ textAlign: 'center', paddingBottom: '1vw', color:'white', backgroundColor:'black' }}>
            <img
              src="/RollerDoor1.jpg"
              alt="Roller Doors"
              style={{
                width: '100%',
                height: '20vw', // Fixed height for all images
                objectFit: 'cover', // Ensure the images cover the area
                marginBottom: '1vw'
              }}
            />
            <h3 style={{ fontSize: '1.2vw' }}>Roller Doors</h3>
            <p style={{ fontSize: '1vw' }}>High-quality roller doors designed for smooth operation and robust security.</p>
          </div>

          <div style={{ textAlign: 'center', paddingBottom: '1vw', color:'white', backgroundColor:'black' }}>
            <img
              src="/Blinds1.jpg"
              alt="Blinds"
              style={{
                width: '100%',
                height: '20vw',
                objectFit: 'cover',
                marginBottom: '1vw'
              }}
            />
            <h3 style={{ fontSize: '1.2vw' }}>Blinds</h3>
            <p style={{ fontSize: '1vw' }}>Stylish and functional blinds to enhance your privacy and control natural lighting.</p>
          </div>

          <div style={{ textAlign: 'center', paddingBottom: '1vw', color:'white', backgroundColor:'black' }}>
            <img
              src="/SecurityDoor1.jpg"
              alt="Security Doors"
              style={{
                width: '100%',
                height: '20vw',
                objectFit: 'cover',
                marginBottom: '1vw'
              }}
            />
            <h3 style={{ fontSize: '1.2vw' }}>Security Doors</h3>
            <p style={{ fontSize: '1vw' }}>Durable security doors that provide peace of mind with enhanced protection.</p>
          </div>

          <div style={{ textAlign: 'center', paddingBottom: '1vw', color:'white', backgroundColor:'black' }}>
            <img
              src="/Window1.jpg"
              alt="Windows"
              style={{
                width: '100%',
                height: '20vw',
                objectFit: 'cover',
                marginBottom: '1vw'
              }}
            />
            <h3 style={{ fontSize: '1.2vw' }}>Windows</h3>
            <p style={{ fontSize: '1vw' }}>Custom-designed windows that bring natural beauty right into your home.</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display:'flex',
          flexDirection:'row',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            width:'50%', 
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <p style={{ fontSize: "1.5vw", textAlign:'left', padding:'10px 0px' }}>
              Embrace the Harmony of Safety and Style
            </p>
            <p style={{ fontSize: "1vw", textAlign:'left', padding:'5px 0px' }}>
              Tailored designs to reflect your personal style
            </p>
            <p style={{ fontSize: "1vw", textAlign:'left', padding:'5px 0px' }}>
              Robust construction for assured security
            </p>
            <p style={{ fontSize: "1vw", textAlign:'left', padding:'5px 0px' }}>
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
            width: '750px', // Container width
            height: 'auto', // Height to fit content
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // Four columns
            gridTemplateRows: 'repeat(5, 1fr)', // Six rows
            gap: '1vw', // Spacing between images
            padding: '1vw', // Padding around the grid
            paddingRight: '10vw'
          }}
        >
          {/* Adjust the grid positioning to fit the provided layout */}
          {/* Image 1 - Top left, taking up two columns and three rows */}
          <img
            src="/RollerDoor1.jpg"
            alt="Outdoor Blinds"
            style={{
              gridColumn: '1 / span 2',
              gridRow: '2 / span 2',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Image 2 - Top right, taking up two columns and two rows */}
          <img
            src="/Blinds1.jpg"
            alt="Stylish Blinds"
            style={{
              gridColumn: '3 / span 2',
              gridRow: '1 / span 2',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Image 3 - Middle right, taking up two columns and two rows, starting from the third row */}
          <img
            src="/SecurityDoor1.jpg"
            alt="Elegant Security Doors"
            style={{
              gridColumn: '3 / span 2',
              gridRow: '3 / span 2',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Image 4 - Bottom left, taking up two columns and two rows */}
          <img
            src="/Window1.jpg"
            alt="Modern Windows"
            style={{
              gridColumn: '1 / span 2',
              gridRow: '4 / span 2',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

      </div>

      <div
        style={{
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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <p style={{ fontSize: "1.5vw", padding:'10px 0px' }}>
            Secure Your Home With Us
          </p>
          <p style={{ fontSize: "1vw", padding:'5px 0px' }}>
            Contact us today to schedule a consultation or ask any questions.          
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems:'center',            
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
          backgroundColor: 'rgba(0, 87, 255, 0.64)',
          textAlign: 'center',
          padding: '4vw 0', // Adjust padding to fit content
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center children horizontally
          margin:'30px 0px'
        }}
      >
        <h2
          style={{
            color: 'white',
            fontSize: '2.5vw', // Increase font size for the heading
            margin: '0 0 1vw 0',
          }}
        >
          What Our Customers Are Saying
        </h2>

        <p
          style={{
            color: 'white',
            fontSize: '1.25vw', // Adjust font size for the subheading
            maxWidth: '70%', // Adjust width to fit content
            margin: '0 auto 4vw', // Adjust margin to provide spacing
          }}
        >
          We guarantee our, professional services. Our objective is the satisfaction of our clients.
        </p>

        <div
          style={{
            backgroundColor: 'white',
            fontSize: '1.25vw', // Adjust font size for the review text
            padding: '2vw',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '70%', // Adjust width to fit content
            position: 'relative', // For the speech bubble effect
            margin: '0 auto', // Center the blockquote
          }}
        >
          {/* Star ratings */}
          <div style={{ fontSize: '1.5vw', color: 'black', padding: '1vw 0' }}> {/* Adjust size and spacing */}
            &#9733; &#9733; &#9733; &#9733; &#9733; {/* Filled stars */}
          </div>

          <p>
            Our Security Door From DT Security Has Provided Us With Peace Of Mind. It's Sturdy, Reliable, And Looks Great In Our Home.
          </p>

          {/* Speech bubble arrow */}
          <div style={{
            position: 'absolute',
            bottom: '-1vw', // Adjust to position the arrow
            left: '10%',
            width: '0',
            height: '0',
            borderLeft: '1vw solid transparent', // Adjust size to match speech bubble size
            borderRight: '1vw solid transparent',
            borderTop: '1vw solid white',
            transform: 'translateX(-50%)',
          }}></div>

          <p style={{ fontSize: '1.5vw', position: 'absolute', bottom: '-3vw', left: '10%', transform: 'translateX(-50%)', color:'white'}}> {/* Adjust for positioning */}
            John Smith
          </p>
        </div>

        {/* Navigation dots */}
        <div style={{ fontSize: '1.5vw', color: 'white', marginTop: '3vw', display: 'flex', gap: '0.5vw', justifyContent: 'center' }}> {/* Use flexbox for even spacing */}
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
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            height: 'calc(100vh - 80px)',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5vw', // Changed from rem to vw
            boxSizing: 'border-box',
          }}
        >
          <p style={{ fontSize: "3vw", marginBottom: "2vw" }}>Inquiry</p> {/* Changed font-size and margin-bottom to vw */}
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%', // Consider using a percentage for responsive width
          }}>
            <input type="text" id="name" name="name" placeholder="Name" style={{ marginBottom: '2vw', padding: '1vw', borderRadius: '0.5vw',border:'1px solid black' }} />
            
            <input type="email" id="email" name="email" placeholder="Email" style={{ marginBottom: '2vw', padding: '1vw', borderRadius: '0.5vw',border:'1px solid black' }} />

            <input type="phone" id="phone" name="phone" placeholder="Phone Number" style={{ marginBottom: '2vw', padding: '1vw', borderRadius: '0.5vw',border:'1px solid black' }} />
            
            <textarea id="message" name="message" placeholder="Message" rows="4" style={{ marginBottom: '2vw', padding: '1vw', borderRadius: '0.5vw',border:'1px solid black' }} />
            
            <button type="submit" style={{
              padding: '1.5vw',
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

        <div
          style={{
            height: 'calc(100vh - 80px)',
            width: '50%',
            backgroundImage: `url(/RollerDoor1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </div>
      </div>

      {/* foooter */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2vw 0',
        backgroundColor: '#f0f0f0',
        color: '#333',
        fontSize: '1vw',
        width: '100%',
      }}>
        <div style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          paddingBottom: '1vw',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="Logo1.png" style={{ marginRight: '1vw', width: '6vw' }} />
            <img src="Logo2.png" style={{ marginRight: '1vw', width:'9vw' }} />
          </div>

          {/* Navigation Links */}
          <div>
            <a href="#linkOne" style={{ margin: '0 1vw' }}>Home</a>
            <a href="#linkTwo" style={{ margin: '0 1vw' }}>Our Services</a>
            <a href="#linkThree" style={{ margin: '0 1vw' }}>Our Project</a>
            <a href="#linkFour" style={{ margin: '0 1vw' }}>About Us</a>
            <a href="#linkFive" style={{ margin: '0 1vw' }}>Contact Us</a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div style={{
          marginTop: '1vw',
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8vw',
        }}>
          <span>© 2023 Relume. All rights reserved.</span>
          <div>
            <a href="#privacy" style={{ margin: '0 1vw' }}>Privacy Policy</a>
            <a href="#terms" style={{ margin: '0 1vw' }}>Terms of Service</a>
            <a href="#cookies" style={{ margin: '0 1vw' }}>Cookies Settings</a>
          </div>
        </div>
      </footer>
    </>
  );
}
