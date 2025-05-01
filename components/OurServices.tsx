"use client";

import React from "react";
import { motion } from "framer-motion";
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

// Animation for container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const OurServices: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="w-full py-20 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          variants={containerVariants}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
        >
          Our Services
        </motion.h2>
        <motion.p
          variants={containerVariants}
          className="text-gray-500 text-lg md:text-xl mt-4 mb-12"
        >
          Trusted solutions crafted to protect and beautify your home.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
  );
};

export default OurServices;