"use client";

import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import AboutUsInfo from "@/components/AboutUsInfo";
const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });


const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>DT Security Doors & Shutters - Customized Home Safety Solutions in Melbourne</title>
        <meta name="description" content="At DT Security Doors & Shutters, we prioritize client satisfaction with top-notch security doors, blinds, fly screens, and awnings, crafted to ensure safety and elegance for your home in Melbourne." />
        <meta property="og:title" content="DT Security Doors & Shutters - Tailored Safety and Style for Your Home" />
        <meta property="og:description" content="Discover DT Security Doors & Shutters where exceptional craftsmanship meets personalized service to secure and beautify your Melbourne home with our range of security solutions." />
        <meta property="og:image" content="https://dtsecuritydoorsandshutters.com.au/Logo1.png" />
        <meta property="og:url" content="https://dtsecuritydoorsandshutters.com.au/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="DT Security Doors & Shutters - Enhance Your Home Safety and Style" />
        <meta name="twitter:description" content="Providing Melbourne homes with bespoke security doors, blinds, and shutters, DT Security Doors & Shutters is dedicated to superior quality and client satisfaction." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="DT Security Doors & Shutters" />
        <meta name="copyright" content="&copy; 2024 DT Security Doors & Shutters" />
      </Head>

      <HeroSection title="About Us" />
      <AboutUsInfo />
      <WhyChooseUsSection />
      <FAQ />
    </div>
  );
};

export default AboutUs;