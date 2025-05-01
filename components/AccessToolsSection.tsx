"use client";

import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPalette } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cards = [
  {
    title: "Contact Us",
    icon: faInfoCircle,
    href: "/Contact",
  },
  {
    title: "Color Visualization",
    icon: faPalette,
    href: "/Visualisation",
  },
];

const AccessToolsSection: FC = () => {
  return (
    <motion.div
      className="my-20 py-8 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl flex flex-col lg:flex-row items-center text-center lg:text-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {/* Header */}
      <h2 className="flex-1 text-3xl sm:text-4xl font-bold mb-8 lg:mb-0">
        Design &amp; Secure Your Space
      </h2>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        {cards.map(({ title, icon, href }) => (
          <Link key={title} href={href} passHref>
            <motion.a
              className="bg-white text-blue-600 w-64 sm:w-72 mx-auto lg:mx-0 rounded-lg shadow-lg flex items-center p-6 transition-transform duration-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 mr-4">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-xl sm:text-2xl"
                />
              </div>
              <span className="text-lg font-semibold text-left">{title}</span>
            </motion.a>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default AccessToolsSection;