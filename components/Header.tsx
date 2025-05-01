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
  initial: { x: -100, opacity: 0, scale: 0.5 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-20 bg-[#B3B3B3] px-4 md:px-10 py-2 md:py-5 flex flex-wrap items-center justify-between text-white text-sm md:text-lg">
      {/* Left: Phone Numbers */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        {phoneNumbers.map(({ number }, idx) => (
          <motion.a
            key={idx}
            href={`tel:${number.replace(/\s/g, "")}`}
            {...iconAnimation}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FontAwesomeIcon icon={faPhone} className="text-lg md:text-2xl" />
            <span>{number}</span>
          </motion.a>
        ))}
      </div>

      {/* Right: Facebook Contact */}
      <motion.a
        href="https://www.facebook.com/profile.php?id=61555458406932"
        target="_blank"
        rel="noopener noreferrer"
        {...iconAnimation}
        className="flex items-center gap-2 hover:opacity-80 transition mt-2 md:mt-0"
      >
        <p className="hidden md:block uppercase text-sm md:text-lg">
          Contact With Us
        </p>
        <FontAwesomeIcon
          icon={faFacebookF}
          className="rounded-lg border border-white p-2 text-lg md:text-2xl"
        />
      </motion.a>
    </header>
  );
}