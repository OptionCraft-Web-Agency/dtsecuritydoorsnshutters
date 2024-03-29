import React, { useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sectionStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "min(4vw, 7vw)", // Adjusted for better text scaling
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={sectionStyle}
    >
      Our Services
    </motion.div>
  );
};

const OurServices: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: isMobile ? "4vw 0" : "4vw 0",
  };

  const titleStyle: CSSProperties = {
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    marginBottom: "1.5vw",
    fontWeight: "bold",
    textAlign: "center", // Ensure title is centered on small screens
  };

  const descriptionStyle: CSSProperties = {
    textAlign: "center",
    fontSize: isMobile ? "4vw" : "1.25vw", // Adjust font size for mobile
    padding: "0 5%", // Adjust padding for text alignment
    margin: "1vw 0 3vw 0", // Margin for spacing
    color: "#333", // Adjust color for readability
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
    gap: isMobile ? "2vw" : "2vw",
    width: "90%",
    margin: "0 auto",
  };

  const itemStyle: React.CSSProperties = {
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "box-shadow 0.3s ease-in-out",
  };

  const textContainerStyle: React.CSSProperties = {
    padding: "1vw",
  };

  const overlayTextStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#ffffff",
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
  };

  const serviceNameStyle: React.CSSProperties = {
    fontWeight: "bold", // Example style, adjust as needed
    fontSize: isMobile ? "4vw" : "1.2rem", // Responsive font size
    marginBottom: "0.5vw", // Space between name and description
  };

  const services = [
    {
      image: "/RollerDoor1.jpg",
      name: "Roller Shutters",
      description:
        "High-quality roller shutters designed for smooth operation and robust security.",
      link: "/RollerShutters",
    },
    {
      image: "/image/CurtinImage/CurtinImage1.jpg",
      name: "Curtins",
      description:
        "Stylish and functional curtins to enhance your privacy and control natural lighting.",
      link: "/Curtins",
    },
    {
      image: "/image/SecurityDoorImage/SecurityDoorImage13.jpg",
      name: "Security Doors",
      description:
        "Durable security doors that provide peace of mind with enhanced protection.",
      link: "/Product",
    },
    {
      image: "/image/WindowImage/WindowImage1.jpg",
      name: "Windows",
      description:
        "Custom-designed windows that bring natural beauty right into your home.",
      link: "/Windows",
    },
    {
      image: "/image/FlyScreenImage/FlyScreenImage2.jpg",
      name: "Fly Screen",
      description:
        "Durable fly screens for effective insect protection and easy integration with any window style.",
      link: "/FlyScreens",
    },
  ];

  return (
    <div style={containerStyle}>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={titleStyle}
      >
        Explore Our Premium Security and Aesthetic Solutions
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={descriptionStyle}
      >
        Elevate your space with our bespoke security and design solutions. From
        state-of-the-art roller shutters to elegant window dressings, our
        tailored products blend seamlessly with any architectural style,
        offering unmatched protection and sophistication. Discover the perfect
        blend of functionality and design, crafted to meet your unique needs and
        preferences.
      </motion.p>

      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={gridStyle}
      >
        {services.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <div
              style={itemStyle}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{ width: "100%", height: "200px", position: "relative" }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div style={textContainerStyle}>
                <p style={serviceNameStyle}>{service.name}</p>
              </div>
              <div
                style={{
                  ...overlayTextStyle,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
              >
                <p style={serviceNameStyle}>{service.name}</p>
                <p>{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <>
      <Head>
        <title>DT Security Doors & Shutters - Our Services</title>
        <meta
          name="description"
          content="Discover our wide range of home security and aesthetic solutions. From roller shutters to custom-designed windows, DT Security Doors & Shutters offers products to enhance your home's safety and style."
        />
        
        <meta
          property="og:title"
          content="Explore Our Premium Security and Aesthetic Solutions"
        />
        <meta
          property="og:description"
          content="Elevate your space with bespoke security and design solutions from DT Security Doors & Shutters. Find out more about our tailored products today."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/Services"
        />
        <meta
          name="twitter:title"
          content="DT Security Doors & Shutters Services"
        />
        <meta
          name="twitter:description"
          content="From advanced roller shutters to stylish window treatments, DT Security Doors & Shutters delivers top-notch products tailored to your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="DT Security Doors & Shutters" />
        <meta
          name="copyright"
          content="&copy; 2024 DT Security Doors & Shutters"
        />
      </Head>
      <Header />
      <MainHeader />
      <ServicesSection />
      <OurServices />
      <Footer />
    </>
  );
}
