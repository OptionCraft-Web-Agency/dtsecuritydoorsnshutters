import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const footerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '5vw' : '2vw 0',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: isMobile ? '4vw' : '1vw',
    width: '100%',
  };

  const footerHeaderStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: isMobile ? '20px' : '40px', // Adjust gap based on mobile or desktop view
    width: '100%',
  };

  const logoStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };

  const navStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px', // Spacing between navigation links
    fontWeight: 'bold', // Make navigation links bold
  };

  const navItemStyle: CSSProperties = {
    cursor: 'pointer',
    fontSize: isMobile ? '4vw' : '1.2vw', // Increased font size for both mobile and desktop
    padding: '5px 0', // Optional: add some padding for better tap targets on mobile
  };

  const contactSectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? '2vw' : '20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    paddingTop:'0px'
  };

  const iconStyle: CSSProperties = {
    marginRight: '10px',
    fontSize: isMobile ? '3.5vw' : 'inherit',
  };

  const textStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: isMobile ? '3.5vw' : 'inherit',
    marginBottom: '10px',
  };

  const timeTextStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: isMobile ? '3.5vw' : 'inherit',
    marginBottom: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-header" style={footerHeaderStyle}>
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="flex">
            <Image src="/logo3.jpg" alt="Company Logo" width={150} height={50} />
          </a>
        </Link>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul style={navStyle}>
            {/* Update these links as per your routing */}
            <li style={navItemStyle}><Link href="/">Home</Link></li>
            <li style={navItemStyle}><Link href="/Services">Our Services</Link></li>
            <li style={navItemStyle}><Link href="/AboutUs">About Us</Link></li>
            <li style={navItemStyle}><Link href="/ContactUs">Contact Us</Link></li>
            <li style={navItemStyle}><Link href="/Visualisation">Color Visualization</Link></li>
          </ul>
        </nav>
      </div>

      <div style={contactSectionStyle}>
        <div style={{ width: isMobile ? '100%' : '65%', display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: isMobile ? '3.5vw' : '2vw' }}>Contact Details</p>
          <div style={textStyle}>
            <FontAwesomeIcon icon={faMap} style={iconStyle} aria-hidden="true" />
            <span>3/48 Barretta Rd, Ravenhall, VIC 3023, Australia</span>
          </div>
          <p style={textStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            0434 227 688{'\u00A0'}-{'\u00A0'}<strong>Steven Vo</strong>
          </p>
          <p style={textStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            0401 086 636{'\u00A0'}-{'\u00A0'}<strong>Michael Tran</strong>
          </p>
          <p style={textStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            DTMDGROUP@outlook.com.au
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
              src="https://maps.google.com/maps?q=3%2F48%20Barretta%20Rd%20Ravenhall%20VIC%203023%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
        <div style={{ width: isMobile ? '100%' : '35%', display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: isMobile ? '3.5vw' : '2vw' }}>Opening Hours</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
            <p style={timeTextStyle}><strong>Monday:</strong> <span>8:30am-5:30pm</span></p>
            <p style={timeTextStyle}><strong>Tuesday:</strong> <span>8:30am-5:30pm</span></p>
            <p style={timeTextStyle}><strong>Wednesday:</strong> <span>8:30am-5:30pm</span></p>
            <p style={timeTextStyle}><strong>Thursday:</strong> <span>8:30am-5:30pm</span></p>
            <p style={timeTextStyle}><strong>Friday:</strong> <span>8:30am-5:30pm</span></p>
            <p style={timeTextStyle}><strong>Saturday:</strong> <span>8:30am-2:30pm</span></p>
            <p style={timeTextStyle}><strong>Sunday:</strong> <span>Closed</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
