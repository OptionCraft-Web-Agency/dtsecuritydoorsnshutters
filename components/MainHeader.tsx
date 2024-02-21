import React, { CSSProperties, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

interface IconProps {
  style?: CSSProperties;
  className?: string;
  link?: string;
}
const MenuIcon: React.FC<IconProps> = ({ style, className, link }) => {
  return <FontAwesomeIcon icon={faBars} style={style} className={className} />;
};
const CloseIcon: React.FC<IconProps> = ({ style, className, link }) => {
  return <FontAwesomeIcon icon={faX} style={style} className={className} />;
};
export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { Text: "Home", link: "/" },
    // { Text: "Products", link: "/Product" },
    { Text: "Our Services", link: "/Services" },
    { Text: "About Us", link: "AboutUs" },
    { Text: "Contact Us", link: "ContactUs" },
    //{ Text: "Cost Calculator", link: "/CostCalculator" },
    { Text: "Color Visualization", link: "/Visualisation" },
  ];
  return (
    <nav className="px-2 lg:px-10 py-2 flex justify-between items-center bg-white relative px-4">
      {/* Logo and Animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <Link href="/" legacyBehavior>
          <a className="max-h-[10vh] flex">
            <Image src="/Logo1.png" alt="Company Logo" width={100} height={100} />
            <Image src="/Logo2.png" alt="Company Secondary Logo" width={100} height={100} />
          </a>
        </Link>
      </motion.div>

      {/* Menu Button */}
      <button
        className="block lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon className="text-2xl"></MenuIcon>
      </button>

      {/* Dropdown Menu */}
      <ul
        className={`absolute  right-0 top-full mt-2 lg:top-auto lg:right-auto lg:mt-0
        lg:relative ${
          isMenuOpen ? "block" : "hidden"
        } lg:block bg-white shadow-lg rounded-lg lg:shadow-none lg:rounded-none lg:bg-transparent  md:mr-2 z-10`}
      >
        <div className="flex flex-col p-4 lg:p-0 lg:flex-row">
          {menuItems.map((element) => (
            <motion.li
              key={element.Text.toLowerCase()}
              className="text-sm uppercase text-black cursor-pointer hover:text-blue-600 mb-2 lg:mb-0"
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href={element.link}
                className="block rounded-lg px-4 py-2 text-sm md:text-xl wide:text-2xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {element.Text}
              </Link>
            </motion.li>
          ))}
          <button
            className="lg:hidden mb-1 flex justify-center w-full rounded-lg cursor-pointer border border-red-400 border-1 hover:bg-red-400 hover:border-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon></CloseIcon>
          </button>
        </div>
      </ul>
    </nav>
  );
}
