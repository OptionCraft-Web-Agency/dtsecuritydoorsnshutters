import Head from "next/head";
import {
  faThermometerHalf,
  faLock,
  faSun,
  faFan,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
const InfoSection = dynamic(() => import("@/components/InfoSection"));
const Gallery = dynamic(() => import("@/components/Gallery"));

import WindowImage1 from "@/public/image/WindowImage/WindowImage1.jpg";
import WindowImage2 from "@/public/image/WindowImage/WindowImage2.jpg";
import WindowImage3 from "@/public/image/WindowImage/WindowImage3.jpg";
import WindowImage4 from "@/public/image/WindowImage/WindowImage4.jpg";

const features = [
  {
    icon: faThermometerHalf,
    title: "Thermal Performance",
    description: "Reduces heating & cooling costs with superior insulation.",
  },
  {
    icon: faLock,
    title: "Enhanced Security",
    description: "State-of-the-art locking systems for peace of mind.",
  },
  {
    icon: faSun,
    title: "Natural Light",
    description: "Maximize daylight with energy-efficient glazing.",
  },
  {
    icon: faFan,
    title: "Air-Flow Control",
    description: "Optimized ventilation for a comfortable home.",
  },
  {
    icon: faLeaf,
    title: "Eco-Friendly",
    description: "Made with sustainable, responsibly sourced materials.",
  },
];

const images = [WindowImage1, WindowImage2, WindowImage3, WindowImage4];

export default function Windows() {
  return (
    <>
      <Head>
        <title>DT Security Doors & Shutters – Windows in Melbourne</title>
        <meta
          name="description"
          content="Explore our high-performance windows for enhanced insulation, security, and style. Custom-built for Melbourne homes."
        />
        <meta property="og:title" content="Windows – DT Security Doors & Shutters" />
        <meta
          property="og:description"
          content="Discover premium window solutions designed for performance and elegance. Perfect for modern Melbourne homes."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/Windows"
        />
        <meta name="twitter:title" content="Windows by DT Security Doors & Shutters" />
        <meta
          name="twitter:description"
          content="High-quality, energy-efficient windows crafted for Melbourne homes. Learn more today."
        />
      </Head>

      <HeroSection title="Windows" />
      <InfoSection
        title="Enhancing Your Home with Our Windows Collection"
        description="Explore our diverse range of window solutions designed for aesthetic harmony and functional excellence. Each window is crafted for superior performance, offering unparalleled insulation, security, and style."
        items={features}
      />
      <Gallery images={images} />
    </>
  );
}