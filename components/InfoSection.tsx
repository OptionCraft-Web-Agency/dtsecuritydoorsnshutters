"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type InfoItem = {
  icon: IconDefinition;
  title: string;
  description: string;
};

interface InfoSectionProps {
  title: string;
  description: string;
  items: InfoItem[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const InfoSection: FC<InfoSectionProps> = ({ title, description, items }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
      </div>

      <div className="flex justify-center">
        <motion.ul
          className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          {items.map(({ icon, title, description }) => (
            <motion.li
              key={title}
              className="w-[260px] flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={icon} className="text-2xl text-blue-600" />
              </div>
              <strong className="text-lg text-gray-800">{title}</strong>
              <p className="text-gray-500">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default InfoSection;