import React, { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import AboutUsInfo from "@/components/AboutUsInfo";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQ";
import Head from "next/head";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sectionStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  const textStyle: CSSProperties = {
    fontSize: "clamp(2rem, 4vw, 7vw)", // Ensures a minimum font size of 2rem, scales with viewport width, max 7vw
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      style={sectionStyle}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <span style={textStyle}>
          About Us
        </span>
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>
          DT Security Doors & Shutters - Customized Home Safety Solutions in
          Melbourne
        </title>
        <meta
          name="description"
          content="At DT Security Doors & Shutters, we prioritize client satisfaction with top-notch security doors, blinds, fly screens, and awnings, crafted to ensure safety and elegance for your home in Melbourne."
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="DT Security Doors & Shutters - Tailored Safety and Style for Your Home"
        />
        <meta
          property="og:description"
          content="Discover DT Security Doors & Shutters where exceptional craftsmanship meets personalized service to secure and beautify your Melbourne home with our range of security solutions."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="DT Security Doors & Shutters - Enhance Your Home Safety and Style"
        />
        <meta
          name="twitter:description"
          content="Providing Melbourne homes with bespoke security doors, blinds, and shutters, DT Security Doors & Shutters is dedicated to superior quality and client satisfaction."
        />

        <meta name="author" content="DT Security Doors & Shutters" />
        <meta
          name="copyright"
          content="&copy; 2024 DT Security Doors & Shutters"
        />
      </Head>
      <Header />
      <MainHeader />
      <AboutUsSection />
      <div style={{ margin: "80px 0px" }}>
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
