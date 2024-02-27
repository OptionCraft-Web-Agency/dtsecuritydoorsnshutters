import React, { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import AboutUsInfo from '@/components/AboutUsInfo';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQ';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      style={sectionStyle}
    >
      About Us
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <div>
      <Header />
      <MainHeader />
      <AboutUsSection />
      <div style={{margin:'80px 0px'}}>
        <AnimatePresence>
          <AboutUsInfo />
        </AnimatePresence>
      </div>
      <WhyChooseUsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
