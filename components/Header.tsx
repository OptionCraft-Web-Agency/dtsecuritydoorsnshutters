import React, { CSSProperties } from "react";
import { color, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface IconProps {
  style?: CSSProperties;
  className?: string;
  link?: string;
}

const PhoneIcon: React.FC<IconProps> = ({ style, className, link }) => {
  return (
    <a href={link}>
      <FontAwesomeIcon icon={faPhone} style={style} className={className} />
    </a>
  );
};
const FacebookIcon: React.FC<IconProps> = ({ style, className, link }) => {
  return (
    <a href={link}>
      <FontAwesomeIcon icon={faFacebookF} style={style} className={className} />
    </a>
  );
};
type Props = {};

const handleFacebookClick = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=61555458406932",
    "_blank"
  );
};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 py-1 md:py-5 px-10 flex justify-between items-center mx-auto z-20 bg-[#B3B3B3] w-screen text-base ultraWide:px-[5%] wide:text-3xl">
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Existing phone number and icon */}
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
          className="flex flex-row items-center cursor-pointer mr-4" // Added margin-right of 4 (1rem) here
        >
          <PhoneIcon
            className="text-xl pr-1 text-white md:text-3xl"
            link="tel:0434 227 688"
          />
          <Link href={"tel:0434 227 688"}>
            <p className="text-white ml-2 md:text-xl">0434 227 688</p>
          </Link>
        </motion.div>

        {/* Add your new phone number here */}
        <motion.div
          initial={{
            x: -100,
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
          <PhoneIcon
            className="text-xl pr-1 text-white md:text-3xl"
            link="tel:0401 086 636"
          />
          <Link href={"tel:0401 086 636"}>
            <p className="text-white ml-2 md:text-xl">0401 086 636</p>
          </Link>
        </motion.div>
      </div>

      {/* Contact and social media links */}
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
        {/* Wrap the text and icon in an anchor tag to open the link in a new tab */}

        <div
          className="flex items-center cursor-pointer"
          onClick={handleFacebookClick}
        >
          <p className="uppercase hidden md:inline-flex text-white mr-2 pr-4 md:text-xl">
            Contact With Us
          </p>
          <FacebookIcon className="rounded-lg border border-white border-2 text-white px-2 py-1 text-xl md:text-3xl" />
        </div>
      </motion.div>
    </header>
  );
}
