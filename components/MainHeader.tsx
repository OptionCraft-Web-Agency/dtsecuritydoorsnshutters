import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const services = [
    { name: "Roller Shutters", link: "/RollerShutters" },
    { name: "Curtins", link: "/Curtins" },
    { name: "Security Doors", link: "/Product" },
    { name: "Windows", link: "/Windows" },
    { name: "Fly Screens", link: "/FlyScreens" },
  ];

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/AboutUs" },
    { text: "Contact Us", link: "/ContactUs" },
    { text: "Color Visualization", link: "/Visualisation" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white px-4 md:px-10 py-4 flex items-center justify-between relative border-b border-gray-200">
      {/* Logo */}
      <Link href="/" className="flex items-center w-[150px] md:w-[200px]">
        <Image
          src="/logo3.jpg"
          alt="Company Logo"
          width={200}
          height={100}
          className="w-full h-auto"
        />
      </Link>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-2xl text-gray-700"
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faX : faBars} />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 uppercase text-gray-700 text-base md:text-lg">
        {/* Home */}
        <Link href="/">
          <li
            className={`cursor-pointer px-2 py-1 transition-all rounded-md ${
              router.pathname === "/" ? "text-blue-600 font-semibold underline underline-offset-4" : "hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            Home
          </li>
        </Link>

        {/* About Us */}
        <Link href="/AboutUs">
          <li
            className={`cursor-pointer px-2 py-1 transition-all rounded-md ${
              router.pathname === "/AboutUs" ? "text-blue-600 font-semibold underline underline-offset-4" : "hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            About Us
          </li>
        </Link>

        {/* Our Services Dropdown */}
        <div className="relative group">
          <button className="uppercase text-base md:text-lg text-gray-700 px-2 py-1 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-all">
            Our Services
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 min-w-[200px]">
            <ul className="flex flex-col p-2">
              {services.map(({ name, link }) => (
                <Link key={name} href={link}>
                  <li
                    className={`px-4 py-2 text-sm hover:bg-gray-100 rounded-md transition ${
                      router.pathname === link ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <Link href="/ContactUs">
          <li
            className={`cursor-pointer px-2 py-1 transition-all rounded-md ${
              router.pathname === "/ContactUs" ? "text-blue-600 font-semibold underline underline-offset-4" : "hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            Contact Us
          </li>
        </Link>

        {/* Color Visualization */}
        <Link href="/Visualisation">
          <li
            className={`cursor-pointer px-2 py-1 transition-all rounded-md ${
              router.pathname === "/Visualisation" ? "text-blue-600 font-semibold underline underline-offset-4" : "hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            Color Visualization
          </li>
        </Link>
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Dim */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide Menu */}
            <motion.ul
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white flex flex-col gap-6 p-6 pt-24 text-lg font-semibold text-gray-800 z-50 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {menuItems.map(({ text, link }) => (
                <Link key={text} href={link} onClick={closeMenu}>
                  <li
                    className={`px-4 py-2 rounded-md transition ${
                      router.pathname === link
                        ? "text-blue-600 font-semibold underline underline-offset-4"
                        : "hover:text-blue-600 hover:bg-gray-100"
                    }`}
                  >
                    {text}
                  </li>
                </Link>
              ))}

              {/* Our Services (Mobile List) */}
              <li className="px-4 pt-2 text-gray-500 uppercase">Our Services</li>
              {services.map(({ name, link }) => (
                <Link key={name} href={link} onClick={closeMenu}>
                  <li
                    className={`pl-6 pr-4 py-2 text-sm rounded-md transition ${
                      router.pathname === link
                        ? "text-blue-600 font-semibold underline"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {name}
                  </li>
                </Link>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}