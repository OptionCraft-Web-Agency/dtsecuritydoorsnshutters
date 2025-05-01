"use client";

import React from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const reviews = [
  {
    text: "Our Security Door from DT Security has provided us with peace of mind. It's sturdy, reliable, and looks great in our home.",
    author: "John Smith",
    rating: "★★★★★",
  },
  {
    text: "The installation process was quick and efficient, and the final result exceeded our expectations.",
    author: "Emily Johnson",
    rating: "★★★★★",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CustomerReview: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={fadeUpVariants}
      viewport={{ once: false, amount: 0.2 }}
      className="relative w-full py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUpVariants}
          className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow"
        >
          What Our Customers Are Saying
        </motion.h2>
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl mb-12 text-blue-100"
        >
          We guarantee professional services with customer satisfaction as our top priority.
        </motion.p>

        {/* Carousel */}
        <motion.div
          ref={sliderRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          className="keen-slider"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="keen-slider__slide flex flex-col items-center justify-center gap-6 px-8"
            >
              <div className="bg-white text-gray-800 rounded-2xl p-8 max-w-2xl shadow-lg relative">
                <div className="text-2xl text-yellow-400 mb-4">{review.rating}</div>
                <p className="text-base md:text-lg leading-relaxed italic text-gray-600">
                  “{review.text}”
                </p>
                <div className="mt-6 text-blue-600 font-semibold">{review.author}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          variants={fadeUpVariants}
          className="flex justify-center gap-6 mt-10"
        >
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            &#8592;
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            &#8594;
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CustomerReview;