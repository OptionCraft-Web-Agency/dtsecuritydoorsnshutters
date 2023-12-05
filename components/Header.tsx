import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

// Define the PhoneIcon component using Font Awesome
const PhoneIcon = ({ color = "white" }) => {
  return <FontAwesomeIcon icon={faPhone} style={{ color, fontSize: '24px' }} />;
};

const FacebookIcon = ({ color = "white" }) => {
  return <FontAwesomeIcon icon={faSquareFacebook} style={{ color, fontSize: '24px' }} />;
};

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-[#B3B3B3] shadow">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center"
      >
        <PhoneIcon color="white" />
        <p className="text-white ml-2">0434 227 688</p>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <p className="uppercase hidden md:inline-flex text-sm text-white mr-2">
          Contact With Us
        </p>
        <FacebookIcon color="white" />
      </motion.div>
    </header>
  );
}
