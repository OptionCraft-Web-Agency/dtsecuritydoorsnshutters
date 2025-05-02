"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  image: any;
  name: string;
  description: string;
  link: string;
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ image, name, description, link }) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-all duration-500"
    >
      <Link href={link}>
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            draggable={false}
            className="transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="relative p-4 text-left">
          <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;