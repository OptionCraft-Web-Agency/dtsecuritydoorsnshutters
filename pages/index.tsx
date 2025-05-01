import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Components
import HomeHeroSection from "@/components/HomeHeroSection";
const OurServices = dynamic(() => import("@/components/OurServices"));
const CallToAction = dynamic(() => import("@/components/CallToAction"));
const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection"));
const CustomerReview = dynamic(() => import("@/components/CustomerReview"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const ContactUsForm = dynamic(() => import("@/components/ContactUsForm"));

export default function Home() {
  return (
    <>
      <Head>
        <title>DT Security Doors & Shutters - Home</title>
        <meta
          name="description"
          content="Explore high-quality security doors, roller shutters, and window solutions with DT Security Doors & Shutters. Enhance the safety and style of your Melbourne home today."
        />
        <meta
          property="og:title"
          content="DT Security Doors & Shutters - Secure Your Home in Style"
        />
        <meta
          property="og:description"
          content="Discover our range of security doors, roller shutters, and window treatments designed to protect and beautify your home."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/"
        />
        <meta
          name="twitter:title"
          content="DT Security Doors & Shutters - Home Security Solutions"
        />
        <meta
          name="twitter:description"
          content="Premium security doors and window solutions tailored for your Melbourne home. Explore our products and services."
        />
        <meta name="author" content="DT Security Doors & Shutters" />
        <meta name="copyright" content="2024 DT Security Doors & Shutters" />
      </Head>

      <div className="w-full mx-auto">
        <HomeHeroSection />

        <OurServices />
        <CallToAction />
        <WhyChooseUsSection />
        <CustomerReview />
        <FAQ />
        <ContactUsForm />
      </div>
    </>
  );
}