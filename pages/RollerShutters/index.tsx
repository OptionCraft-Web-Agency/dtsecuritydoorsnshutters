"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import AccessToolsSection from "@/components/AccessToolsSection";
import Gallery from "@/components/Gallery";
import {
  faShieldAlt,
  faBolt,
  faVolumeDown,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import RS1 from "@/public/image/RollerShuttersImage/RollerShuttersImage1.jpg";
import RS2 from "@/public/image/RollerShuttersImage/RollerShuttersImage2.jpg";
import RS3 from "@/public/image/RollerShuttersImage/RollerShuttersImage3.jpg";
import RS4 from "@/public/image/RollerShuttersImage/RollerShuttersImage4.jpg";
import RS5 from "@/public/image/RollerShuttersImage/RollerShuttersImage5.jpg";

const benefits = [
  {
    icon: faShieldAlt,
    title: "Enhanced Security",
    description: "Robust construction deters break-ins.",
  },
  {
    icon: faBolt,
    title: "Energy Efficiency",
    description: "Insulates against heat and cold.",
  },
  {
    icon: faVolumeDown,
    title: "Noise Reduction",
    description: "Cuts down external noise effectively.",
  },
  {
    icon: faPalette,
    title: "Customization",
    description: "Variety of styles to complement your home.",
  },
];

const images = [RS1, RS2, RS3, RS4, RS5];

export default function RollerShutters() {
  return (
    <>
      <Head>
        <title>DT Security Doors & Shutters – Roller Shutters in Melbourne</title>
        <meta
          name="description"
          content="Enhance your home's security and energy efficiency with our custom-designed roller shutters in Melbourne."
        />
        <meta property="og:title" content="Roller Shutters – DT Security Doors & Shutters" />
        <meta
          property="og:description"
          content="Secure and beautify your home with our premium roller shutters, tailored for Melbourne residences."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/RollerShutters"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Roller Shutters by DT Security Doors & Shutters" />
        <meta
          name="twitter:description"
          content="Discover our energy-efficient, secure roller shutters designed for Melbourne homes."
        />
      </Head>

      <HeroSection title="Roller Shutters" />
      <InfoSection
        title="Why Roller Shutters?"
        description="Discover the benefits of roller shutters for security, energy efficiency, and more."
        items={benefits}
      />
      <AccessToolsSection />
      <Gallery images={images} />
    </>
  );
}