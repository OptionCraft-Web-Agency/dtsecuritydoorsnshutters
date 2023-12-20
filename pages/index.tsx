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

import ContactUsInfo from "../components/ContactUsInfo";
import ContactUsForm from "../components/ContactUsForm";

import AboutUsInfo from "../components/AboutUsInfo";

import Store from "../components/Store";

import Info1 from "../components/Info1";
import Info2 from "../components/Info2";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

        <ContactUsForm />

        <ContactUsInfo />

        <AboutUsInfo />

        <Store />

        <Info1 />

        {/* info2 */}
        {/* <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", width: "50%", justifyContent: "center" }}
          >
            <img src="/RollerDoor1.jpg"></img>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <p style={{ fontWeight: "bold" }}>
              Discover the Best Roller Shutters for Enhanced Home Security
            </p>
            <p>
              Explore our highly-rated roller shutters, providing unmatched
              protection for your home. Delve into detailed descriptions and
              specifications to select the ideal shutter solution for robust
              home safety.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Advanced Protection</p>
                <p>
                  Our roller shutters are engineered with cutting-edge security
                  features to deter intruders and safeguard your residence
                  effectively.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Long-Lasting Durability</p>
                <p>
                  Constructed from premium materials, our roller shutters are
                  designed for longevity, ensuring they endure extreme weather
                  and wear over time.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <Info2 />

      </div>
    </>
  );
}
