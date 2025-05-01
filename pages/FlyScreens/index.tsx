import Head from "next/head";
import {
  faBug,
  faWind,
  faDollarSign,
  faHome,
  faShieldAlt,
  faSprayCan,
} from "@fortawesome/free-solid-svg-icons";

import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Gallery from "@/components/Gallery";

import FS1 from "@/public/image/FlyScreenImage/FlyScreenImage1.jpg";
import FS2 from "@/public/image/FlyScreenImage/FlyScreenImage2.jpg";
import FS3 from "@/public/image/FlyScreenImage/FlyScreenImage3.jpg";
import FS4 from "@/public/image/FlyScreenImage/FlyScreenImage4.jpg";
import FS5 from "@/public/image/FlyScreenImage/FlyScreenImage5.jpg";
import FS6 from "@/public/image/FlyScreenImage/FlyScreenImage6.jpg";
import FS7 from "@/public/image/FlyScreenImage/FlyScreenImage7.jpg";
import FS8 from "@/public/image/FlyScreenImage/FlyScreenImage8.jpg";
import FS9 from "@/public/image/FlyScreenImage/FlyScreenImage9.jpg";
import FS10 from "@/public/image/FlyScreenImage/FlyScreenImage10.jpg";

const flyscreenBenefits = [
  {
    icon: faBug,
    title: "Protection Against Pests",
    description: "Keep mosquitoes, flies, and other pests out while letting fresh air in.",
  },
  {
    icon: faWind,
    title: "Enhanced Air Quality",
    description: "Promote better ventilation and air quality inside your home.",
  },
  {
    icon: faDollarSign,
    title: "Energy Savings",
    description: "Reduce cooling needs by allowing natural airflow.",
  },
  {
    icon: faHome,
    title: "Aesthetic Appeal",
    description: "Match your home decor with a range of styles.",
  },
  {
    icon: faShieldAlt,
    title: "Added Security",
    description: "Optional features to prevent unauthorized access.",
  },
  {
    icon: faSprayCan,
    title: "Easy Maintenance",
    description: "Simple to clean and built to last.",
  },
];

const images = [FS1, FS2, FS3, FS4, FS5, FS6, FS7, FS8, FS9, FS10];

export default function FlyScreens() {
  return (
    <>
      <Head>
        <title>Fly Screens for Home Protection - DT Security Doors & Shutters</title>
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
      </Head>

      <HeroSection title="Fly Screens" />
      <InfoSection
        title="Benefits of Fly Screens"
        description="Discover the advantages of installing fly screens in your home, offering both comfort and protection."
        items={flyscreenBenefits}
      />
      <Gallery images={images} />
    </>
  );
}