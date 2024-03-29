import Head from "next/head";

import React, { CSSProperties } from "react";

import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import ContactUsInfo from "@/components/ContactUsInfo";
import ContactUsForm from "@/components/ContactUsForm";
import Footer from "@/components/Footer";

const ContactUsSection: React.FC = () => {
  const sectionStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "min(4vw, 7vw)", // Adjusted for better text scaling
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  return <div style={sectionStyle}>Contact Us</div>;
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
        <link
          rel="canonical"
          href="https://dtsecuritydoorsandshutters.com.au/contact"
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
