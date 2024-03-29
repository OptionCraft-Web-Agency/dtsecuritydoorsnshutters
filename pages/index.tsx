import Head from "next/head";
import { Inter } from "next/font/google";
import React from "react";

// components
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import HomePage from "../components/HomePage";

import OurServices from "@/components/OurServices";
import CallToAction from "@/components/CallToAction";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CustomerReview from "../components/CustomerReview";
import FAQsComponent from "@/components/FAQ";
import HomeForm from "@/components/HomeForm";
import Footer from "../components/Footer";

import FacebookMessenger from "@/components/FacebookMessenger";

export default function Home() {
  return (
    <>
      <Head>
        <title>DT Security Doors & Shutters - Home</title>
        <meta
          name="description"
          content="Explore high-quality security doors, roller shutters, and window solutions with DT Security Doors & Shutters. Enhance the safety and style of your Melbourne home today."
        />
        <link
          rel="canonical"
          href="https://dtsecuritydoorsandshutters.com.au/"
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="DT Security Doors & Shutters" />
        <meta
          name="copyright"
          content="&copy; 2024 DT Security Doors & Shutters"
        />
      </Head>
      <Header />
      <div className="w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        <HomePage />

        <OurServices />

        {/* <HomeContent /> */}

        <CallToAction />

        <WhyChooseUsSection />

        <CustomerReview />

        <FAQsComponent />

        <HomeForm />

        <Footer />

        <FacebookMessenger />
      </div>
    </>
  );
}
