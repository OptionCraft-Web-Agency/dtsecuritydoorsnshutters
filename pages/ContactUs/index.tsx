import Head from "next/head";
import React, { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import ContactUsInfo from "@/components/ContactUsInfo";
import ContactUsForm from "@/components/ContactUsForm";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUsSection: React.FC = () => {
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
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={sectionStyle}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <span style={textStyle}>
          Contact Us
        </span>
      </div>
    </motion.div>
  );
};

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>
          Contact DT Security Doors & Shutters - Secure Your Home in Style
        </title>
        <meta
          name="description"
          content="Reach out to DT Security Doors & Shutters for bespoke security solutions in Melbourne. Contact us today for a consultation to enhance the safety and elegance of your home."
        />
        <meta
          property="og:title"
          content="Get in Touch with DT Security Doors & Shutters"
        />
        <meta
          property="og:description"
          content="Looking for custom security doors or shutters? Contact DT Security Doors & Shutters in Melbourne for products that combine safety with style."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Contact DT Security Doors & Shutters"
        />
        <meta
          name="twitter:description"
          content="Secure and stylize your Melbourne home with DT Security Doors & Shutters. Contact us for more information."
        />
        <meta
          name="twitter:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
      </Head>
      <div>
        <Header />
        <MainHeader />
        <ContactUsSection />
        <ContactUsInfo />
        <ContactUsForm />
        <Footer />
      </div>
    </>
  );
}
