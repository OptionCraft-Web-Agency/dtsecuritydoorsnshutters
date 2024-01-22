import { Inter } from "next/font/google";
import React from "react";

// components
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import HomePage from "../components/HomePage";

import OurServices from "@/components/OurServices";
import HomeContent from "@/components/HomeContent";
import CallToAction from "@/components/CallToAction";
import CustomerReview from "../components/CustomerReview";
import HomeForm from "@/components/HomeForm";
import Footer from "../components/Footer";

//images
export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        <HomePage />

        <OurServices />

        <HomeContent />

        <CallToAction />

        <CustomerReview />

        <HomeForm />

        <Footer />

        {/* <ContactUsForm />

        <ContactUsInfo />

        <AboutUsInfo />

        <Store />

        <Info1 />

        <Info2 /> */}

      </div>
    </>
  );
}
