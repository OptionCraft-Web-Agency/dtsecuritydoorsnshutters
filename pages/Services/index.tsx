"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import HeroSection from "@/components/HeroSection";

import ServiceCard from "@/components/ServiceCard";
import RollerDoor1 from "@/public/RollerDoor1.jpg";
import CurtainImage1 from "@/public/image/CurtinImage/CurtinImage1.jpg";
import SecurityDoorImage13 from "@/public/image/SecurityDoorImage/SecurityDoorImage13.jpg";
import WindowImage1 from "@/public/image/WindowImage/WindowImage1.jpg";
import FlyScreenImage2 from "@/public/image/FlyScreenImage/FlyScreenImage2.jpg";

const services = [
  {
    image: RollerDoor1,
    name: "Roller Shutters",
    description: "Smooth, reliable shutters for home security.",
    link: "/RollerShutters",
  },
  {
    image: CurtainImage1,
    name: "Curtains",
    description: "Elegant curtains tailored to your style.",
    link: "/Curtains",
  },
  {
    image: SecurityDoorImage13,
    name: "Security Doors",
    description: "Secure your home with premium door solutions.",
    link: "/Product",
  },
  {
    image: WindowImage1,
    name: "Windows",
    description: "Brighten up your spaces with beautiful windows.",
    link: "/Windows",
  },
  {
    image: FlyScreenImage2,
    name: "Fly Screens",
    description: "Protection without compromising style.",
    link: "/FlyScreens",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>DT Security Doors & Shutters - Our Services</title>
        <meta name="description" content="Discover our wide range of home security and aesthetic solutions. From roller shutters to custom-designed windows, DT Security Doors & Shutters offers products to enhance your home's safety and style." />
        <meta property="og:title" content="Explore Our Premium Security and Aesthetic Solutions" />
        <meta property="og:description" content="Elevate your space with bespoke security and design solutions from DT Security Doors & Shutters." />
        <meta property="og:image" content="https://dtsecuritydoorsandshutters.com.au/Logo1.png" />
        <meta property="og:url" content="https://dtsecuritydoorsandshutters.com.au/Services" />
        <meta name="twitter:title" content="DT Security Doors & Shutters Services" />
        <meta name="twitter:description" content="From advanced roller shutters to stylish window treatments, DT Security Doors & Shutters delivers top-notch products tailored to your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="DT Security Doors & Shutters" />
      </Head>

      <HeroSection title="Our Services"/>

      {/* Our Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeUpVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full py-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          >
            Explore Our Premium Security and Aesthetic Solutions
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-500 text-lg md:text-xl mt-4 mb-12"
          >
            Trusted solutions crafted to protect and beautify your home.
          </motion.p>

          {/* Service Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                name={service.name}
                description={service.description}
                link={service.link}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPage;