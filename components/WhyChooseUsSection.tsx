"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faRocket,
  faShieldHeart,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

interface Feature {
  icon: any;
  color: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: faShieldHeart,
    color: "bg-blue-100 text-blue-600",
    title: "Trusted Security Solutions",
    description:
      "Our doors and shutters are crafted to meet Australian standards, ensuring maximum protection for your home or business.",
  },
  {
    icon: faClock,
    color: "bg-purple-100 text-purple-600",
    title: "Fast, Reliable Installation",
    description:
      "We pride ourselves on efficient turnarounds without compromising quality — from consultation to completion.",
  },
  {
    icon: faRocket,
    color: "bg-red-100 text-red-600",
    title: "Modern & Durable Designs",
    description:
      "Built to last with high-grade materials, our products combine style, strength, and long-term performance.",
  },
  {
    icon: faSmile,
    color: "bg-green-100 text-green-600",
    title: "Customer-Focused Service",
    description:
      "From the first quote to after-installation support, we prioritize your comfort, preferences, and satisfaction.",
  },
];

// ✅ Animation Variant
const fadeInUpVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40, transition: { duration: 0.6 } },
};

// ✅ Card Component
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUpVariant}
      className="flex items-start bg-white/60 backdrop-blur-md border border-white rounded-xl p-5 shadow-xl hover:scale-[1.015] transition-transform duration-300"
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl mr-4 ${feature.color} shadow-md`}
      >
        <FontAwesomeIcon icon={feature.icon} className="text-2xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUsCardsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          variants={fadeInUpVariant}
          className="text-4xl font-extrabold text-center text-gray-800 mb-16 tracking-tight"
        >
          Why Choose Us?
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Feature Cards */}
          <div className="w-full lg:w-1/2 space-y-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={fadeInUpVariant}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white hover:scale-105 transition-transform duration-500">
              <Image
                src="/image/CurtinImage/CurtinImage1.jpg"
                alt="Why Choose Us"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsCardsSection;