import React, { CSSProperties, useState, useEffect } from 'react';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import CostCalc from '@/components/CostCalc';
import Footer from '@/components/Footer';

const CostCalculatorSection: React.FC = () => {
  const sectionStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 'min(4vw, 7vw)',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  return (
    <div style={sectionStyle}>
      Cost Calculator
    </div>
  );
};

const PriceGuaranteeSection: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState(false);
  
    useEffect(() => {
      // Delay the animation slightly to ensure it triggers after mount
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 100); // A 100ms delay is usually enough
  
      return () => clearTimeout(timer); // Clean up the timer
    }, []);
  
    return (
      <section
        className="bg-white py-8 px-4"
        style={{
          maxWidth: '100%',
          margin: '30px 0',
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        <h2
          style={{
            color: "black",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            margin: "0 0 1rem 0",
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Price Match Promise
        </h2>
  
        <p
          style={{
            color: "black",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            maxWidth: "90%",
            margin: "0 auto",
            textAlign: 'center',
          }}
        >
          Experience unparalleled value with our roller shutter cost estimator. Empower yourself with an instant preliminary quote and feel at ease to compare it with others. We stand by the superior quality and affordability of our offerings – confident that we're unmatched in both. If you find a better price for comparable quality, we’re ready to discuss it. Your satisfaction is our benchmark, and we're committed to delivering excellence without compromise.
        </p>
      </section>
    );
  };
    

export default function CostCalculator() {
  return (
    <div>
      <Header />
      <MainHeader />
      <CostCalculatorSection />
      <PriceGuaranteeSection />
      <CostCalc />
      <Footer />
    </div>
  );
}
