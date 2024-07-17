import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from 'next/image';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: "rgb(240, 240, 240)",
    color: "black",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    textAlign: "left",
  };

  const sectionStyle: React.CSSProperties = {
    flex: "1 1 200px",
    margin: "10px",
  };

  const aboutSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    minWidth: '30%',
  };

  const openHourSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    maxWidth: '20%',
  };

  const contactSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    maxWidth: '30%',
  };

  const linksSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    maxWidth: '20%',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const textStyle: React.CSSProperties = {
    margin: "5px 0",
  };

  const linkStyle: React.CSSProperties = {
    color: "black",
    textDecoration: "none",
    margin: "5px 0",
  };

  const iconStyle: React.CSSProperties = {
    color: "rgb(0, 87, 255)",
  };

  return (
    <footer style={footerStyle}>
      <div style={aboutSectionStyle} className="footer-section">
        <Link href="/" legacyBehavior>
          <a className="flex justify-center items-center w-full sm:max-w-xs">
            <Image 
              src="/logo3.jpg" 
              alt="Company Logo" 
              width={150} 
              height={50} 
              className="w-full h-auto"
            />
          </a>
        </Link>        
        <p style={textStyle}>
          We provide high-quality security doors and shutters to protect your home and business.
        </p>
      </div>

      <div style={openHourSectionStyle} className="footer-section">
        <h2 style={headingStyle}>Opening Hours</h2>
        <p style={textStyle}><strong>Mon - Fri</strong></p>
        <p style={textStyle}>8.30am - 5.30pm</p>
        <p style={textStyle}><strong>Sat</strong></p>
        <p style={textStyle}>8.30pm - 2pm</p>
        <p style={textStyle}><strong>Sun</strong></p>
        <p style={textStyle}>Closed</p>
      </div>

      <div style={contactSectionStyle} className="footer-section">
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle}/> 3/48 Barretta Rd, Ravenhall, VIC 3023, Australia
        </p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faPhone} style={iconStyle}/> Phone: 0434 227 688 (Steven Vo)
        </p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faPhone} style={iconStyle}/> Phone: 0401 086 636 (Michael Tran)
        </p>
        <p style={textStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle}/><a href="mailto:DTMDGROUP@outlook.com.au" style={linkStyle}> DTMDGROUP@outlook.com.au</a>
        </p>
      </div>

      <div style={linksSectionStyle} className="footer-section">
        <h2 style={headingStyle}>Quick Links</h2>
        <p style={textStyle}>
          <Link href="/" style={linkStyle}>Home</Link>
        </p>
        <p style={textStyle}>
          <Link href="/menu" style={linkStyle}>Menu</Link>
        </p>
        <p style={textStyle}>
          <Link href="/about" style={linkStyle}>About Us</Link>
        </p>
        <p style={textStyle}>
          <Link href="/contact" style={linkStyle}>Contact</Link>
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-section {
            min-width: 100% !important;
            max-width: 100% !important;
            text-align: center;
          }
          .footer-section img {
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
