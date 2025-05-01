import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const phoneNumbers = [
  { number: "0434 227 688" },
  { number: "0401 086 636" },
];

const iconAnimation = {
  initial: { x: -60, opacity: 0, scale: 0.9 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-20 bg-blue-600 px-4 md:px-10 py-1 md:py-3 flex flex-wrap items-center justify-between text-white text-sm md:text-base shadow">
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        {phoneNumbers.map(({ number }, idx) => (
          <motion.a
            key={idx}
            href={`tel:${number.replace(/\s/g, "")}`}
            {...iconAnimation}
            className="flex items-center gap-2 hover:scale-105 hover:bg-blue-700 px-2 py-1 rounded-md transition-all duration-300"
          >
            <FontAwesomeIcon icon={faPhone} className="text-base md:text-lg" />
            <span>{number}</span>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="https://www.facebook.com/profile.php?id=61555458406932"
        target="_blank"
        rel="noopener noreferrer"
        {...iconAnimation}
        className="flex items-center gap-2 hover:scale-105 hover:bg-blue-700 px-3 py-1 rounded-md transition-all duration-300 mt-2 md:mt-0"
      >
        <p className="hidden md:block uppercase text-xs md:text-base">
          Contact With Us
        </p>
        <FontAwesomeIcon
          icon={faFacebookF}
          className="rounded-full border border-white p-2 text-base md:text-xl"
        />
      </motion.a>
    </header>
  );
}