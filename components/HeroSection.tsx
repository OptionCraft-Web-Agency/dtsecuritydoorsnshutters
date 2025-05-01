"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeroSectionProps {
  title: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection: FC<HeroSectionProps> = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center text-white font-bold"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(136,136,138,0.54) 0%, rgba(0,87,255,0.29) 100%), url('/RollerDoor3.png')",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      }}
    >
      <h1 className="text-[clamp(2rem,4vw,7vw)]">{title}</h1>
    </motion.section>
  );
};

export default HeroSection;