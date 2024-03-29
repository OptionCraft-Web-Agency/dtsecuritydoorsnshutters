import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillWave,
  faShieldAlt,
  faCogs,
  faGlobeAsia,
  faStar,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const WhyChooseUsSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // This code runs after the component is mounted, so it's safe to use window here
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      // Set the initial value based on the current window size
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener when the component is unmounted
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const sectionStyle: CSSProperties = {
      padding: isMobile ? '20px' : ' 2vw 4vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    const cardContainerStyle: CSSProperties = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '2vw',
      marginTop: isMobile ? '10px' : '2vw',
    };
  
    const cardStyle: CSSProperties = {
      width: isMobile ? '90%' : '300px',
      padding: isMobile ? '10px' : '2vw',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      textAlign: 'center',
      margin: isMobile ? '10px' : '1vw',
      color: 'black',
    };
  
    const iconStyle: CSSProperties = {
      marginBottom: '1vw',
      color: 'rgb(0, 87, 255)',
    };
  
    const headingStyle: CSSProperties = {
      fontSize: isMobile ? '4vw' : '2vw',
      margin: '0.5rem 0',
      fontWeight: 'bold',
    };
  
    const paragraphStyle: CSSProperties = {
      fontSize: isMobile ? '3.5vw' : '1vw',
    };

    return (
        <section style={sectionStyle}>
            <h2 style={{ fontSize: isMobile ? '6vw' : '2.5rem', marginBottom: '1rem', fontWeight:'bold' }}>Why Choose Us?</h2>
            <div style={cardContainerStyle}>
                {/* Transparent Pricing */}
                <div style={cardStyle}>
                    <FontAwesomeIcon icon={faMoneyBillWave} size="3x" style={iconStyle} />
                    <h3 style={headingStyle}>Competitive Pricing</h3>
                    <p style={paragraphStyle}>Our pricing strategy is designed to be transparent and give you the best value for our products and services.</p>
                </div>

                {/* Warranty */}
                <div style={cardStyle}>
                    <FontAwesomeIcon icon={faShieldAlt} size="3x" style={iconStyle} />
                    <h3 style={headingStyle}>Comprehensive Warranty</h3>
                    <p style={paragraphStyle}>Relax with the assurance of a full 15-year manufacturer&apos;s warranty on our entire product range.</p>
                </div>

                {/* Technician Expertise */}
                <div style={cardStyle}>
                    <FontAwesomeIcon icon={faCogs} size="3x" style={iconStyle} />
                    <h3 style={headingStyle}>Skilled Craftsmanship</h3>
                    <p style={paragraphStyle}>Our expert technicians ensure the highest standards of installation with a wealth of industry experience.</p>
                </div>

                {/* Australian Owned */}
                <div style={cardStyle}>
                    <FontAwesomeIcon icon={faGlobeAsia} size="3x" style={iconStyle} />
                    <h3 style={headingStyle}>Locally Owned</h3>
                    <p style={paragraphStyle}>Dedicated to supporting the local economy, our business is proudly Australian owned and operated.</p>
                </div>

                {/* Quality Assurance */}
                <div style={cardStyle}>
                    <FontAwesomeIcon icon={faStar} size="3x" style={iconStyle} />
                    <h3 style={headingStyle}>Assured Quality</h3>
                    <p style={paragraphStyle}>We stand behind the excellence of our products, which are extensively tested and certified to meet Australian standards.</p>
                </div>

                {/* Customer Service */}
                <div style={cardStyle}>
                    <FontAwesomeIcon icon={faHeadset} size="3x" style={iconStyle} />
                    <h3 style={headingStyle}>Superior Service</h3>
                    <p style={paragraphStyle}>Our customer service is second to none, with a dedicated team ready to support you at every step.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
