"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faShieldAlt,
  faCogs,
  faGlobeAsia,
  faStar,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faMoneyBillWave,
    title: "Competitive Pricing",
    description:
      "Our pricing strategy is transparent and offers you the best value for our products and services.",
  },
  {
    icon: faShieldAlt,
    title: "Satisfaction Guarantee",
    description:
      "Rest easy with our satisfaction guarantee, ensuring peace of mind with every purchase.",
  },
  {
    icon: faCogs,
    title: "Skilled Craftsmanship",
    description:
      "Our expert technicians ensure the highest standards of installation with deep industry experience.",
  },
  {
    icon: faGlobeAsia,
    title: "Locally Owned",
    description:
      "Dedicated to supporting the local economy, proudly Australian owned and operated.",
  },
  {
    icon: faStar,
    title: "Assured Quality",
    description:
      "We stand behind the excellence of our products, extensively tested to meet Australian standards.",
  },
  {
    icon: faHeadset,
    title: "Superior Service",
    description:
      "Our customer service team is ready to support you every step of the way.",
  },
];

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WhyChooseUsSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={fadeUpVariants}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeUpVariants}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Why Choose Us?
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          className="text-gray-500 text-lg md:text-xl mb-16 max-w-3xl mx-auto"
        >
          We deliver premium solutions with a customer-first approach to secure and enhance your home.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center justify-center"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                size="3x"
                className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;