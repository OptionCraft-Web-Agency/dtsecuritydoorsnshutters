import React, { CSSProperties } from "react";
import { color, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "react-social-icons";
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

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 py-1 md:py-5 px-10 flex justify-between justify-center mx-auto z-20 bg-[#B3B3B3] w-screen text-base   ultraWide: px-[5%] wide:text-3xl ">
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
        className="flex flex-row items-center cursor-pointer"
      >
        <PhoneIcon
          className="text-xl pr-1 text-white md:text-3xl"
          link="tel:0434 227 688"
        />
        <Link href={"tel:0434 227 688"}>
          <p className="text-white ml-2 md:text-xl">0434 227 688</p>
        </Link>
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
        <p className="uppercase hidden md:inline-flex text-white mr-2 pr-4 md:text-xl">
          Contact With Us
        </p>
        <div className="rounded-lg cursor-pointer border border-white border-2 ">
          <FacebookIcon
            className="text-white px-2 py-1 text-center justify-center flex text-xl md:text-3xl"
            link="https://www.facebook.com/"
          ></FacebookIcon>
        </div>
      </motion.div>
    </header>
  );
}
