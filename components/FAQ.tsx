"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const faqs = [
  { question: "What factors should I consider when purchasing security doors?", answer: "Material, locking system, standards compliance, and durability are crucial." },
  { question: "Are custom sizes available for security doors?", answer: "Yes, all our doors can be fully customized to your measurements." },
  { question: "How do I maintain my security doors?", answer: "Use mild soap and water for cleaning, and check hardware regularly." },
  { question: "Can I install a security door myself?", answer: "We highly recommend professional installation for optimal security." },
  { question: "Do you provide warranties for your doors?", answer: "Yes, we offer manufacturer warranties for material and workmanship defects." },
  { question: "How secure are your roller shutters?", answer: "Our roller shutters are engineered with premium materials for maximum protection." },
  { question: "How can I get a quote?", answer: "Simply contact us via our website, phone, or visit our showroom!" },
];

const AccordionItem: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInVariants}
      className="overflow-hidden rounded-lg border border-gray-300 bg-white/80 backdrop-blur-md transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 group focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-blue-600 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="origin-top px-6 pb-5 text-gray-600 text-base leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <motion.section
      className="relative py-24 bg-gradient-to-b from-white to-blue-50"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />

      <div className="relative container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInVariants}
        >
          <motion.h4
            className="text-blue-600 text-sm uppercase tracking-wider mb-2 font-semibold"
          >
            Frequently Asked Questions
          </motion.h4>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 max-w-3xl mx-auto mb-12 leading-tight"
          >
            Everything you need to know before getting started.
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;