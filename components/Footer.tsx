import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-black py-12 px-6 md:px-16 flex flex-wrap justify-between gap-10">
      {/* About Section */}
      <div className="flex-1 min-w-[250px]">
        <Link href="/" className="flex items-center mb-4">
          <Image
            src="/logo3.jpg"
            alt="Company Logo"
            width={150}
            height={50}
            className="w-full h-auto"
          />
        </Link>
        <p className="text-sm text-gray-600">
          We provide high-quality security doors and shutters to protect your home and business.
        </p>
      </div>

      {/* Opening Hours */}
      <div className="flex-1 min-w-[200px]">
        <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Mon - Fri:</strong> 8:30am - 5:30pm</p>
          <p><strong>Sat:</strong> 8:30am - 2:00pm</p>
          <p><strong>Sun:</strong> Closed</p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {/* Address link */}
          <a
            href="https://www.google.com/maps/place/3%2F48+Barretta+Rd,+Ravenhall+VIC+3023,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 mt-1" />
            3/48 Barretta Rd, Ravenhall, VIC 3023, Australia
          </a>

          {/* Phone links */}
          <a
            href="tel:0434227688"
            className="flex items-start gap-2 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 mt-1" />
            0434 227 688 (Steven Vo)
          </a>

          <a
            href="tel:0401086636"
            className="flex items-start gap-2 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 mt-1" />
            0401 086 636 (Michael Tran)
          </a>

          {/* Email link */}
          <a
            href="mailto:DTMDGROUP@outlook.com.au"
            className="flex items-start gap-2 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 mt-1" />
            DTMDGROUP@outlook.com.au
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex-1 min-w-[200px]">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="flex flex-col gap-2 text-sm text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600 hover:underline transition">Home</Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-blue-600 hover:underline transition">Menu</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 hover:underline transition">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 hover:underline transition">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}