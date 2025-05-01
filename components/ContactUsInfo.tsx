"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const contactInfo = [
  {
    icon: faMapMarkerAlt,
    title: "Our Location",
    content: "3/48 Barretta Rd, Ravenhall, VIC 3023, Australia",
    href: "https://www.google.com/maps/search/?api=1&query=3/48+Barretta+Rd,+Ravenhall,+VIC+3023,+Australia",
  },
  {
    icon: faPhoneAlt,
    title: "Call Us",
    content: [
      { text: "0434 227 688 - Steven Vo", href: "tel:0434227688" },
      { text: "0401 086 636 - Michael Tran", href: "tel:0401086636" },
    ],
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    content: "DTMDGROUP@outlook.com.au",
    href: "mailto:DTMDGROUP@outlook.com.au",
  },
];

const ContactUsInfo: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-16">
            We're here to help. Contact us today.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <FontAwesomeIcon icon={info.icon} className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {info.title}
              </h3>

              {/* Handle array or single */}
              {Array.isArray(info.content) ? (
                <div className="space-y-2">
                  {info.content.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="text-gray-500 hover:text-blue-600 hover:underline transition text-sm block"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 hover:underline transition text-sm"
                >
                  {info.content}
                </a>
              )}
            </div>
          ))}
        </motion.div>

        {/* Google Map */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <iframe
            title="DT Security Doors & Shutters Location"
            src="https://maps.google.com/maps?q=3/48%20Barretta%20Rd%20Ravenhall%20VIC%203023%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsInfo;