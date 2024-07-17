import Head from "next/head";
import React, { useState, useEffect, CSSProperties, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faWind,
  faDollarSign,
  faHeart,
  faHome,
  faShieldAlt,
  faSprayCan,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import useOnScreen from "@/components/useOnScreen";

import Image from "next/image";
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FlyScreensTitle: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sectionStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  const textStyle: CSSProperties = {
    fontSize: "clamp(2rem, 4vw, 7vw)", // Ensures a minimum font size of 2rem, scales with viewport width, max 7vw
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={sectionStyle}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <span style={textStyle}>
          Fly Screens
        </span>
      </div>
    </motion.div>
  );
};

const FlyscreenSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle: CSSProperties = {
    padding: "40px 20px",
    borderRadius: "8px",
    margin: "20px auto",
    textAlign: "center",
    maxWidth: "960px",
  };

  const imageContainerStyle: CSSProperties = {
    position: "relative",
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    margin: "0 20px", // Adjusted margin for bottom spacing
  };

  const buttonStyle: CSSProperties = {
    padding: isMobile ? "2%" : "1vw",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: isMobile ? "5vw" : "1.5vw",
    cursor: "pointer",
    backgroundColor: "rgba(0, 87, 255)",
    boxShadow: "2px 2px 4px 0px rgba(22, 110, 187, 0.32)",
    transition: "background-color 0.3s, transform 0.3s",
    width: "50%",
  };

  const navigateToContactUs = () => {
    router.push("/ContactUs"); // Use the useRouter hook for navigation
  };

  const hoverButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: "rgba(0, 77, 255)",
    transform: "scale(1.05)",
  };

  return (
    <div
      ref={ref}
      style={{
        ...sectionStyle,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 2s ease-in-out",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "1.5rem" : "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Premium Flyscreens: Comfort & Protection Redefined
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {/* Wrap each Image in its own container with imageContainerStyle */}
        <div style={imageContainerStyle}>
          <Image
            src="/image/FlyScreenImage/FlyScreenImage1.jpg"
            alt="Flyscreen 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div style={imageContainerStyle}>
          <Image
            src="/image/FlyScreenImage/FlyScreenImage2.jpg"
            alt="Flyscreen 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p
        style={{
          marginBottom: '2rem',
          fontSize: isMobile ? '0.9rem' : '1rem',
          padding: isMobile ? '0 1rem' : '0',
          width: '100%', // Ensure full width
        }}
      >
        Elevate your home&apos;s comfort and security with our premium
        flyscreens, available in durable materials including fibre glass,
        aluminum, and stainless steel. Designed for resilience and superior
        protection, our flyscreens ensure a seamless blend of functionality and
        style.
      </p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.cssText = Object.entries(hoverButtonStyle)
            .map(
              ([key, value]) =>
                `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`
            )
            .join(";"))
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.cssText = Object.entries(buttonStyle)
            .map(
              ([key, value]) =>
                `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value}`
            )
            .join(";"))
        }
        onClick={navigateToContactUs}
      >
        Contact Us for a Customized Solution
      </button>
    </div>
  );
};

const BenefitsOfFlyScreens: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyles: CSSProperties = {
    fontFamily: '"Inter", sans-serif',
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "2rem" : "3rem",
    textAlign: "center",
  };

  const textSectionStyle: CSSProperties = {
    marginBottom: "1rem",
  };

  const titleStyle: CSSProperties = {
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyle: CSSProperties = {
    marginBottom: "2rem",
    fontSize: isMobile ? "0.9rem" : "1rem",
    padding: isMobile ? "0 1rem" : "0",
    width: "100%", // Ensure full width
  };

  const featuresGridStyle: CSSProperties = {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(3, 1fr)",
    gap: "1rem",
    maxWidth: "800px",
  };

  const featureItemStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1rem",
    marginBottom: isMobile ? "1rem" : "0",
    textAlign: "center",
  };

  const iconStyle: CSSProperties = {
    backgroundColor: "#eeeeee",
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
  };

  const benefits = [
    { icon: faBug, title: "Protection Against Pests", description: "Keep mosquitoes, flies, and other pests out while letting fresh air in." },
    { icon: faWind, title: "Enhanced Air Quality", description: "Promote better ventilation and air quality inside your home without worrying about insects." },
    { icon: faDollarSign, title: "Energy Savings", description: "Reduce the need for air conditioning by allowing cooler air to circulate naturally through your home." },
    { icon: faHome, title: "Aesthetic Appeal", description: "Available in various materials and designs that can complement your home decor." },
    { icon: faShieldAlt, title: "Added Security", description: "Some fly screens come with additional security features to prevent unauthorized access." },
    { icon: faSprayCan, title: "Easy Maintenance", description: "Designed for easy cleaning and durability, ensuring long-lasting protection." },
  ];

  return (
    <div
      ref={ref}
      style={{
        ...sectionStyles,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 2s ease-in-out",
      }}
    >
      <div style={textSectionStyle}>
        <h2 style={titleStyle}>Benefits of Fly Screens</h2>
        <p style={paragraphStyle}>
          Discover the advantages of installing fly screens in your home, offering both comfort and protection.
        </p>
      </div>
      <ul style={featuresGridStyle}>
        {benefits.map((benefit, index) => (
          <li key={index} style={featureItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={benefit.icon} />
            </div>
            <strong>{benefit.title}</strong>
            <span>{benefit.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const images = [
  "/image/FlyScreenImage/FlyScreenImage1.jpg",
  "/image/FlyScreenImage/FlyScreenImage2.jpg",
  "/image/FlyScreenImage/FlyScreenImage3.jpg",
  "/image/FlyScreenImage/FlyScreenImage4.jpg",
  "/image/FlyScreenImage/FlyScreenImage5.jpg",
  "/image/FlyScreenImage/FlyScreenImage6.jpg",
  "/image/FlyScreenImage/FlyScreenImage7.jpg",
  "/image/FlyScreenImage/FlyScreenImage8.jpg",
  "/image/FlyScreenImage/FlyScreenImage9.jpg",
  "/image/FlyScreenImage/FlyScreenImage10.jpg",
];

const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(150px, 1fr))' : 'repeat(4, 1fr)',
    gap: '10px',
    padding: isMobile ? '10px' : '20px',
  };

  const galleryImageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px', // Set a fixed height for all images
    objectFit: 'cover', // This will cover the area without stretching the image
    opacity: 1,
    transition: 'opacity 0.3s ease',
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    margin: '0 0 20px',
    color: '#333',
    fontSize: isMobile ? '8vw' : '3rem',
    fontWeight: 'bold',
    marginTop: '2vw',
  };

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
      <div 
          ref={ref}       
          style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out'}}
      >
          <h2 style={titleStyle}>Window Gallery</h2>
          <div style={galleryStyle}>
              {images.map((image, index) => (
                  <div key={index}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      onClick={() => handleClick(image)}
                      style={{ cursor: 'pointer' }}>
                  <img src={image}
                      alt={`Fly Screen ${index + 1}`}
                      style={{
                          ...galleryImageStyle,
                          opacity: hoverIndex === index ? 0.7 : 1,
                      }} />
                  </div>
              ))}
          </div>
          {selectedImage && (
              <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={handleClose}>
                  <img src={selectedImage} alt="Enlarged view" style={{ maxWidth: '90%', maxHeight: '90%' }} />
              </div>
          )}
    </div>
  );
};

export default function FlyScreens() {
  return (
    <>
      <Head>
        <title>
          Fly Screens for Home Protection - DT Security Doors & Shutters
        </title>
        <meta
          name="description"
          content="Premium fly screens to keep pests out and allow fresh air in, providing comfort and protection for your home."
        />

        <meta
          property="og:title"
          content="High-Quality Fly Screens - DT Security Doors & Shutters"
        />
        <meta
          property="og:description"
          content="Explore our durable and stylish fly screens suitable for any home. Enjoy the fresh air without the bugs."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/FlyScreens"
        />
        <meta property="og:type" content="website" />
        {/* Add additional meta tags for Twitter cards and other social media as needed */}
      </Head>
      <Header />
      <MainHeader />
      <FlyScreensTitle />
      <FlyscreenSection />
      <BenefitsOfFlyScreens />
      <Gallery />
      <Footer />
    </>
  );
}
