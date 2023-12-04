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
          textAlign:'center',
          justifyContent:'center',
          alignItems: 'center',
          fontSize:'3vw',
          height:'100vh'
        }}
      >
        <h3 style={{padding:'20px'}}>Our Services</h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              backgroundImage: `url(/RollerDoor1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "40vw",
              margin: '2vw'
            }}
          ></div>

          <div
            style={{
              backgroundImage: `url("/Blinds1.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "40vw",
              margin: '2vw'
            }}
          ></div>

          <div
            style={{
              backgroundImage: `url("/SecurityDoor1.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "40vw",
              margin: '2vw'
            }}
          ></div>

          <div
            style={{
              backgroundImage: `url("/Window1.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "40vw",
              margin: '2vw'
            }}
          ></div>
        </div>


      </div>

      <div
        style={{
          display:'flex',
          flexDirection:'row'
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
            height:'100vh',
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
            backgroundColor:'blue', 
            width:'50%', 
            height:'100vh'
          }}
        >
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
          backgroundColor:'rgba(0, 87, 255, 0.64)',
          textAlign:'center',
          height: '50vh',
          width: '100%',
        }}
      >
        <h3
          style={{
            color:'white',
            fontSize:'2vw'
          }}
        >
          What Our Customers Are Saying
        </h3>

        <p
          style={{
            color:'white',
            fontSize:'1.5vw'
          }}
        >
          We guarantee our,  professional services. Our objective is the satisfaction of our clients.
        </p>
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
            height: '100vh',
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
            height: '100vh',
            width: '50%',
            backgroundImage: `url(/RollerDoor1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </div>
      </div>

    </>
  );
}
