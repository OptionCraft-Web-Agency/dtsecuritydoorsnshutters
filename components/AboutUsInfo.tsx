"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import QualityLogo from "@/public/QualityLogo.png";
import WarrantyLogo from "@/public/WarrantyLogo.png";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6, ease: "easeIn" } },
};

const AboutUsInfo: React.FC = () => {
  return (
    <motion.section
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center text-center px-6 md:px-16 py-12"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
        About Us
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl mb-8">
        At DT Security Doors & Shutters, client satisfaction is at the heart of everything we do. We understand that true client happiness goes beyond just offering a product; it's about providing a solution that brings security and elegance to your home. With a dedication to exceptional craftsmanship and personalized service, we ensure every product — from security doors to plantation shutters — meets your specific needs.
      </p>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl mb-12">
        Reflecting on our journey, we have evolved from focusing solely on steel doors to offering a comprehensive range of home safety solutions in Melbourne. Our expanded offerings include premium quality security doors, versatile blinds, fly screens, and elegant awnings, tailored to enhance the safety and style of your living space.
      </p>

      <div className="flex items-center justify-center gap-8 mb-10">
        <Image
          src={QualityLogo}
          alt="Quality Assurance Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <Image
          src={WarrantyLogo}
          alt="Warranty Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <Link href="/ContactUs" passHref>
        <button className="rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white font-medium px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">
          Contact Us
        </button>
      </Link>
    </motion.section>
  );
};

export default AboutUsInfo;