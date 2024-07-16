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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle: CSSProperties = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardContainerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  };

  const cardStyle: CSSProperties = {
    width: '90%',
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    textAlign: 'center',
    margin: '10px',
    color: 'black',
  };

  const iconStyle: CSSProperties = {
    marginBottom: '10px',
    color: 'rgb(0, 87, 255)',
  };

  const headingStyle: CSSProperties = {
    fontSize: '1.5rem',
    margin: '0.5rem 0',
    fontWeight: 'bold',
  };

  const paragraphStyle: CSSProperties = {
    fontSize: '1rem',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Why Choose Us?</h2>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <FontAwesomeIcon icon={faMoneyBillWave} size="3x" style={iconStyle} />
          <h3 style={headingStyle}>Competitive Pricing</h3>
          <p style={paragraphStyle}>Our pricing strategy is designed to be transparent and give you the best value for our products and services.</p>
        </div>
        <div style={cardStyle}>
          <FontAwesomeIcon icon={faShieldAlt} size="3x" style={iconStyle} />
          <h3 style={headingStyle}>Satisfaction Guarantee</h3>
          <p style={paragraphStyle}>Rest easy with our satisfaction guarantee, ensuring your peace of mind with every purchase.</p>
        </div>
        <div style={cardStyle}>
          <FontAwesomeIcon icon={faCogs} size="3x" style={iconStyle} />
          <h3 style={headingStyle}>Skilled Craftsmanship</h3>
          <p style={paragraphStyle}>Our expert technicians ensure the highest standards of installation with a wealth of industry experience.</p>
        </div>
        <div style={cardStyle}>
          <FontAwesomeIcon icon={faGlobeAsia} size="3x" style={iconStyle} />
          <h3 style={headingStyle}>Locally Owned</h3>
          <p style={paragraphStyle}>Dedicated to supporting the local economy, our business is proudly Australian owned and operated.</p>
        </div>
        <div style={cardStyle}>
          <FontAwesomeIcon icon={faStar} size="3x" style={iconStyle} />
          <h3 style={headingStyle}>Assured Quality</h3>
          <p style={paragraphStyle}>We stand behind the excellence of our products, which are extensively tested and certified to meet Australian standards.</p>
        </div>
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
