import { Inter } from "next/font/google";
import React from "react";

// components
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import HomePage from "../components/HomePage";

import OurServices from "@/components/OurServices";
import HomeContent from "@/components/HomeContent";
import CallToAction from "@/components/CallToAction";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CustomerReview from "../components/CustomerReview";
import HomeForm from "@/components/HomeForm";
import Footer from "../components/Footer";



import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FacebookMessenger from "@/components/FacebookMessenger";
import DefaultFacebookChat from "@/components/DefaultFacebookChat";

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

        <WhyChooseUsSection />

        <CustomerReview />

        <HomeForm />

        <Footer />

        <FacebookMessenger />
      </div>
    </>
  );
}
