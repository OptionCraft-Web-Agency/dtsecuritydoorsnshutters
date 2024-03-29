import Head from "next/head";
import React, { useState, useEffect, CSSProperties, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

import useOnScreen from "@/components/useOnScreen";

const CurtinsTitle: React.FC = () => {
  const sectionStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "min(4vw, 7vw)",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
  };

  return <div style={sectionStyle}>Curtins</div>;
};

type ProductInfoProps = {
  colorOptions: ColorOption[];
  onColorOptionSelect: (colorOption: ColorOption) => void;
  selectedColorOption: ColorOption | null;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  colorOptions,
  onColorOptionSelect,
  selectedColorOption,
}) => {
  const [selectedImage, setSelectedImage] = useState<ColorOption | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
  };

  const colorListStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2, 1fr)"
      : "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "10px",
    cursor: "pointer",
    maxWidth: isMobile ? "100%" : "50%",
  };

  const selectedImageStyle: CSSProperties = {
    maxWidth: isMobile ? "100%" : "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle: CSSProperties = {
    fontWeight: "bold",
    textAlign: isMobile ? "center" : "left",
  };

  return (
    <div style={containerStyle}>
      <div style={colorListStyle}>
        {colorOptions.map((colorOption, index) => (
          <div key={index} onClick={() => setSelectedImage(colorOption)}>
            <Image
              src={colorOption.image}
              alt={colorOption.name}
              width={100}
              height={100}
              objectFit="cover"
            />
            {/* Apply the textStyle to the paragraph */}
            <p style={textStyle}>{colorOption.name}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div style={selectedImageStyle}>
          <Image
            src={selectedImage.image}
            alt={selectedImage.name}
            width={500}
            height={500}
            objectFit="cover"
          />
          {/* Optionally, apply the textStyle to this paragraph as well if needed */}
          <p style={textStyle}>{selectedImage.name}</p>
        </div>
      )}
    </div>
  );
};

type CategoryInfo = {
  description: string;
  benefits: string[];
  careInstructions: string;
};

const categoryDetails: { [key: string]: CategoryInfo } = {
  "Sheerweave 4300": {
    description:
      "Sheerweave 4300, with its revolutionary half basketweave (2x1) design, leverages DOW ECOLIBRIUM bio-based plasticizers, offering a sustainable, high-performance sunscreen solution. It significantly reduces environmental impact without compromising on quality or aesthetics, free from the traditional PVC smell.",
    benefits: [
      "Eco-friendly DOW ECOLIBRIUM bio-based plasticizers enhance sustainability.",
      "Preserves fabric performance and aesthetic appeal, free from PVC odor.",
      "High UV blockage of approximately 97%, ensuring effective sun protection.",
    ],
    careInstructions:
      "Regular dusting or vacuuming is recommended. For spot cleaning, use water and mild detergent. Ensure the fabric is dry before rolling up.",
  },
  "Sheerweave 4500": {
    description:
      "Sheerweave 4500 presents an innovative half basketweave (2x2) sunscreen crafted with DOW ECOLIBRIUM bio-based plasticizers. This product stands out as a green alternative to conventional sunscreens by maintaining excellent performance and appearance while eliminating the PVC smell.",
    benefits: [
      "Utilizes bio-based plasticizers for a greener environmental footprint.",
      "Retains fabric's functional and visual quality without PVC emissions.",
      "Achieves substantial UV blockage, offering robust sun protection.",
    ],
    careInstructions:
      "Dust or vacuum regularly. Clean with water and mild detergent for stains. Do not roll up damp fabric.",
  },
  "Sheerweave 4510": {
    description:
      "Sheerweave 4510 is a groundbreaking 2x2 sunscreen integrating DOW ECOLIBRIUM bio-based plasticizers. This evolution in sunscreen technology delivers unmatched performance and sustainability, all while offering an appealing aesthetic without the odor commonly associated with PVC materials.",
    benefits: [
      "Incorporates sustainable bio-based plasticizers, reducing reliance on fossil fuels.",
      "Maintains superior sunscreen efficacy and visual appeal without PVC smell.",
      "Provides excellent UV protection with a blockage rate of 95%.",
    ],
    careInstructions:
      "Maintain by regular dusting or vacuuming. For spots, use water and a mild detergent. Avoid rolling up when wet.",
  },
  "Duo Screen": {
    description:
      "Duo Screen fabrics offer a versatile solution for window coverings, blending functionality with aesthetic appeal. These fabrics are designed for dual light control, allowing for transparency or privacy depending on the need, with a unique layering of fabrics for optimal sunlight management.",
    benefits: [
      "Versatile light control for both transparency and privacy",
      "Optimal sunlight management through unique fabric layering",
      "Aesthetic appeal with a range of textures and colors",
    ],
    careInstructions:
      "Regular dusting and gentle cleaning with a damp cloth; avoid harsh chemicals.",
  },
  "Aventus 3%": {
    description:
      "Aventus 3% fabric is designed for roller and panel window blinds, suitable for wide width windows. It features a 2x2 basketweave composition with PVC coated polyester base, highlighting an openness factor of approximately 3%. The fabric is notable for its use of DOW ECOLIBRIUM bio-based plasticizers, offering a sustainable alternative without compromising on quality or performance.",
    benefits: [
      "Sustainable material choice with bio-based plasticizers",
      "High performance with approximately 97% UV blockage",
      "Accredited for low chemical emissions, suitable for sensitive areas",
    ],
    careInstructions:
      "Regular dusting or vacuuming as appropriate, with mild detergent cleaning.",
  },
  "Aventus 5%": {
    description:
      "Similar to the 3% variant, the Aventus 5% fabric extends the openness to approximately 5%, balancing light control and visibility. It maintains the same high standards of eco-friendliness and user safety, incorporating bio-based plasticizers and ensuring minimal environmental impact.",
    benefits: [
      "Enhanced light filtration with a slightly higher openness factor",
      "Maintains eco-friendly characteristics and user safety standards",
      "Suitable for larger window installations with its wide-width capability",
    ],
    careInstructions:
      "Similar care instructions as the 3% variant, focusing on gentle cleaning and proper maintenance.",
  },
  "Aventus 10%": {
    description:
      "Offering the highest openness factor among the series, Aventus 10% fabric allows more light while still providing effective sun protection. This variant is ideal for spaces requiring more natural light without sacrificing the benefits of solar shading.",
    benefits: [
      "Maximum natural light penetration with effective UV protection",
      "Stays true to the sustainable and health-conscious approach of the Aventus series",
      "Ideal for wide-width window applications, providing both aesthetic and functional advantages",
    ],
    careInstructions:
      "Care involves regular dusting and mild detergent cleaning, ensuring the fabric is dry before rolling up.",
  },
};

type ColorOption = {
  name: string;
  image: string; // The URL of the image
};

const colorPalette: { [key: string]: ColorOption[] } = {
  sheerweave4300: [
    { name: "White", image: "/image/curtin/Sheerweave4300/white.jpeg" },
    {
      name: "White Stone",
      image: "/image/curtin/Sheerweave4300/white-stone.jpeg",
    },
    { name: "Sandstone", image: "/image/curtin/Sheerweave4300/sandstone.jpeg" },
    {
      name: "Slate Stone",
      image: "/image/curtin/Sheerweave4300/slate-stone.jpeg",
    },
    {
      name: "Charcoal Gold",
      image: "/image/curtin/Sheerweave4300/charcoal-gold.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/Sheerweave4300/charcoal.jpeg" },
  ],
  sheerweave4500: [
    { name: "Ice", image: "/image/curtin/Sheerweave4500/ice.jpeg" },
    { name: "White", image: "/image/curtin/Sheerweave4500/white.jpeg" },
    {
      name: "White Stone",
      image: "/image/curtin/Sheerweave4500/white-stone.jpeg",
    },
    {
      name: "White Linen",
      image: "/image/curtin/Sheerweave4500/white-linen.jpeg",
    },
    { name: "Sandstone", image: "/image/curtin/Sheerweave4500/sandstone.jpeg" },
    { name: "Linen", image: "/image/curtin/Sheerweave4500/linen.jpeg" },
    {
      name: "White Grey",
      image: "/image/curtin/Sheerweave4500/white-grey.jpeg",
    },
    {
      name: "Charcoal Grey",
      image: "/image/curtin/Sheerweave4500/charcoal-grey.jpeg",
    },
    {
      name: "Charcoal Gold",
      image: "/image/curtin/Sheerweave4500/charcoal-gold.jpeg",
    },
    {
      name: "Charcoal Bronze",
      image: "/image/curtin/Sheerweave4500/charcoal-bronze.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/Sheerweave4500/charcoal.jpeg" },
  ],
  sheerweave4510: [
    { name: "White", image: "/image/curtin/Sheerweave4510/white.jpeg" },
    {
      name: "White Stone",
      image: "/image/curtin/Sheerweave4510/white-stone.jpeg",
    },
    {
      name: "White Linen",
      image: "/image/curtin/Sheerweave4510/white-linen.jpeg",
    },
    {
      name: "White Grey",
      image: "/image/curtin/Sheerweave4510/white-grey.jpeg",
    },
    {
      name: "Charcoal Grey",
      image: "/image/curtin/Sheerweave4510/charcoal-grey.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/Sheerweave4510/charcoal.jpeg" },
  ],
  duoScreen: [
    { name: "White", image: "/image/curtin/DuoScreen/white.jpeg" },
    { name: "White Stone", image: "/image/curtin/DuoScreen/white-stone.jpeg" },
    { name: "White Linen", image: "/image/curtin/DuoScreen/white-linen.jpeg" },
    { name: "Dune Grey", image: "/image/curtin/DuoScreen/dune-grey.jpeg" },
    { name: "White Grey", image: "/image/curtin/DuoScreen/white-grey.jpeg" },
    { name: "Blue Grey", image: "/image/curtin/DuoScreen/blue-grey.jpeg" },
    {
      name: "Charcoal Grey",
      image: "/image/curtin/DuoScreen/charcoal-grey.jpeg",
    },
    {
      name: "Charcoal Slate",
      image: "/image/curtin/DuoScreen/charcoal-slate.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/DuoScreen/charcoal.jpeg" },
  ],
  aventus3: [
    { name: "Ice", image: "/image/curtin/Aventus3/ice.jpeg" },
    { name: "White", image: "/image/curtin/Aventus3/white.jpeg" },
    { name: "White Linen", image: "/image/curtin/Aventus3/white-linen.jpeg" },
    { name: "White Stone", image: "/image/curtin/Aventus3/white-stone.jpeg" },
    { name: "White Grey", image: "/image/curtin/Aventus3/white-grey.jpeg" },
    { name: "Concrete", image: "/image/curtin/Aventus3/concrete.jpeg" },
    { name: "Dune Grey", image: "/image/curtin/Aventus3/dune-grey.jpeg" },
    { name: "Platinum", image: "/image/curtin/Aventus3/platinum.jpeg" },
    { name: "Gull", image: "/image/curtin/Aventus3/gull.jpeg" },
    { name: "Domino", image: "/image/curtin/Aventus3/domino.jpeg" },
    { name: "Wren", image: "/image/curtin/Aventus3/wren.jpeg" },
    { name: "Pewter", image: "/image/curtin/Aventus3/pewter.jpeg" },
    {
      name: "Charcoal Grey",
      image: "/image/curtin/Aventus3/charcoal-grey.jpeg",
    },
    {
      name: "Charcoal Denim",
      image: "/image/curtin/Aventus3/charcoal-denim.jpeg",
    },
    { name: "Graphite", image: "/image/curtin/Aventus3/graphite.jpeg" },
    {
      name: "Charcoal Bronze",
      image: "/image/curtin/Aventus3/charcoal-bronze.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/Aventus3/charcoal.jpeg" },
  ],
  aventus5: [
    { name: "Ice", image: "/image/curtin/Aventus3/ice.jpeg" },
    { name: "White", image: "/image/curtin/Aventus3/white.jpeg" },
    { name: "White Linen", image: "/image/curtin/Aventus3/white-linen.jpeg" },
    { name: "White Stone", image: "/image/curtin/Aventus3/white-stone.jpeg" },
    { name: "White Grey", image: "/image/curtin/Aventus3/white-grey.jpeg" },
    { name: "Concrete", image: "/image/curtin/Aventus3/concrete.jpeg" },
    { name: "Dune Grey", image: "/image/curtin/Aventus3/dune-grey.jpeg" },
    { name: "Platinum", image: "/image/curtin/Aventus3/platinum.jpeg" },
    { name: "Gull", image: "/image/curtin/Aventus3/gull.jpeg" },
    { name: "Domino", image: "/image/curtin/Aventus3/domino.jpeg" },
    { name: "Wren", image: "/image/curtin/Aventus3/wren.jpeg" },
    { name: "Pewter", image: "/image/curtin/Aventus3/pewter.jpeg" },
    {
      name: "Charcoal Grey",
      image: "/image/curtin/Aventus3/charcoal-grey.jpeg",
    },
    {
      name: "Charcoal Denim",
      image: "/image/curtin/Aventus3/charcoal-denim.jpeg",
    },
    { name: "Graphite", image: "/image/curtin/Aventus3/graphite.jpeg" },
    {
      name: "Charcoal Bronze",
      image: "/image/curtin/Aventus3/charcoal-bronze.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/Aventus3/charcoal.jpeg" },
  ],
  aventus10: [
    { name: "Ice", image: "/image/curtin/Aventus3/ice.jpeg" },
    { name: "White", image: "/image/curtin/Aventus3/white.jpeg" },
    { name: "White Linen", image: "/image/curtin/Aventus3/white-linen.jpeg" },
    { name: "White Stone", image: "/image/curtin/Aventus3/white-stone.jpeg" },
    { name: "White Grey", image: "/image/curtin/Aventus3/white-grey.jpeg" },
    { name: "Concrete", image: "/image/curtin/Aventus3/concrete.jpeg" },
    { name: "Dune Grey", image: "/image/curtin/Aventus3/dune-grey.jpeg" },
    { name: "Platinum", image: "/image/curtin/Aventus3/platinum.jpeg" },
    { name: "Gull", image: "/image/curtin/Aventus3/gull.jpeg" },
    { name: "Domino", image: "/image/curtin/Aventus3/domino.jpeg" },
    { name: "Wren", image: "/image/curtin/Aventus3/wren.jpeg" },
    { name: "Pewter", image: "/image/curtin/Aventus3/pewter.jpeg" },
    {
      name: "Charcoal Grey",
      image: "/image/curtin/Aventus3/charcoal-grey.jpeg",
    },
    {
      name: "Charcoal Denim",
      image: "/image/curtin/Aventus3/charcoal-denim.jpeg",
    },
    { name: "Graphite", image: "/image/curtin/Aventus3/graphite.jpeg" },
    {
      name: "Charcoal Bronze",
      image: "/image/curtin/Aventus3/charcoal-bronze.jpeg",
    },
    { name: "Charcoal", image: "/image/curtin/Aventus3/charcoal.jpeg" },
  ],
};

const tabColors: { [key: string]: ColorOption[] } = {
  "Sheerweave 4300": colorPalette.sheerweave4300,
  "Sheerweave 4500": colorPalette.sheerweave4500,
  "Sheerweave 4510": colorPalette.sheerweave4510,
  "Duo Screen": colorPalette.duoScreen,
  "Aventus 3%": colorPalette.aventus3,
  "Aventus 5%": colorPalette.aventus5,
  "Aventus 10%": colorPalette.aventus10,
};

type TabsComponentProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabColors: { [key: string]: ColorOption[] };
  onSelectCategory: (category: CategoryInfo) => void;
};

const TabsComponent: React.FC<TabsComponentProps> = ({
  activeTab,
  setActiveTab,
  tabColors,
  onSelectCategory,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabsContainerStyle: CSSProperties = {
    overflowX: isMobile ? "scroll" : "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none", // for Firefox
    msOverflowStyle: "none", // for Internet Explorer and Edge
  };

  const tabListStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "row" : "row",
    justifyContent: "flex-start",
    listStyleType: "none",
    padding: "10px",
    margin: 0,
    backgroundColor: "rgb(0, 87, 255)",
  };

  const tabStyle: CSSProperties = {
    cursor: "pointer",
    padding: "10px 20px",
    margin: isMobile ? "0 5px" : "0 10px", // smaller margins on mobile
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    color: "white",
  };

  const activeTabStyle: CSSProperties = {
    ...tabStyle,
    borderBottom: "3px solid white",
    fontWeight: "bold", // Ensure the active tab text is also bold
  };

  return (
    <div>
      <div style={tabsContainerStyle}>
        <ul style={tabListStyle}>
          {Object.keys(tabColors).map((tab) => (
            <li
              key={tab}
              style={activeTab === tab ? activeTabStyle : tabStyle}
              onClick={() => {
                setActiveTab(tab);
                onSelectCategory(categoryDetails[tab]);
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const images = [
  "/image/CurtinImage/CurtinImage1.jpg",
  "/image/CurtinImage/CurtinImage2.jpg",
  "/image/CurtinImage/CurtinImage3.jpg",
  "/image/CurtinImage/CurtinImage4.jpg",
  "/image/CurtinImage/CurtinImage5.jpg",
  "/image/CurtinImage/CurtinImage6.jpg",
  "/image/CurtinImage/CurtinImage7.jpg",
  "/image/CurtinImage/CurtinImage8.jpg",
  "/image/CurtinImage/CurtinImage9.jpg",
  "/image/CurtinImage/CurtinImage10.jpg",
  "/image/CurtinImage/CurtinImage11.jpg",
  "/image/CurtinImage/CurtinImage12.jpg",
  "/image/CurtinImage/CurtinImage13.jpg",
  "/image/CurtinImage/CurtinImage14.jpg",
  "/image/CurtinImage/CurtinImage15.jpg",
  "/image/CurtinImage/CurtinImage16.jpg",
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(auto-fit, minmax(150px, 1fr))"
      : "repeat(4, 1fr)",
    gap: "10px",
    padding: isMobile ? "10px" : "20px",
  };

  const galleryImageStyle: React.CSSProperties = {
    width: "100%",
    height: "200px", // Set a fixed height for all images
    objectFit: "cover", // This will cover the area without stretching the image
    opacity: 1,
    transition: "opacity 0.3s ease",
  };

  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    margin: "0 0 20px",
    color: "#333",
    fontSize: isMobile ? "8vw" : "3rem",
    fontWeight: "bold",
    marginTop: "2vw",
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
        transition: "opacity 2s ease-in-out",
      }}
    >
      <h2 style={titleStyle}>Fly Screen Gallery</h2>
      <div style={galleryStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => handleClick(image)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={image}
              alt={`Fly Screen ${index + 1}`}
              style={{
                ...galleryImageStyle,
                opacity: hoverIndex === index ? 0.7 : 1,
              }}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <Image
            src={selectedImage}
            alt="Enlarged view"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
};

export default function Curtains() {
  const initialActiveTab = "Sheerweave 4300";
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);
  const [selectedColorOption, setSelectedColorOption] =
    useState<ColorOption | null>(tabColors[initialActiveTab][0] || null);
  const [selectedCategoryInfo, setSelectedCategoryInfo] =
    useState<CategoryInfo | null>(categoryDetails[initialActiveTab]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on component mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const descriptionSectionStyle: CSSProperties = {
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    lineHeight: "1.6",
    padding: isMobile ? "10px" : "20px", // Apply conditional padding
  };

  const titleStyle: CSSProperties = {
    color: "#333",
    marginBottom: "16px",
    fontSize: isMobile ? "18px" : "22px",
    fontWeight: "bold",
  };

  const listStyle: CSSProperties = {
    listStyleType: "disc",
    paddingLeft: isMobile ? "15px" : "20px",
  };

  const itemStyle: CSSProperties = {
    marginBottom: "8px",
  };

  return (
    <>
      <Head>
        <title>
          Stylish Curtains & Sheerweaves - DT Security Doors & Shutters
        </title>
        <meta
          name="description"
          content="Explore our wide selection of curtains and sheerweaves, designed to complement any interior with elegance and style."
        />
        <link
          rel="canonical"
          href="https://dtsecuritydoorsandshutters.com.au/Curtins"
        />
        <meta
          property="og:title"
          content="DT Security Doors & Shutters - Curtains Collection"
        />
        <meta
          property="og:description"
          content="Discover the latest trends in curtain designs and materials at DT Security Doors & Shutters."
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/Curtins"
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
      </Head>
      <Header />
      <MainHeader />
      <CurtinsTitle />
      <ProductInfo
        colorOptions={tabColors[activeTab]}
        onColorOptionSelect={setSelectedColorOption}
        selectedColorOption={selectedColorOption}
      />
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabColors={tabColors}
        onSelectCategory={setSelectedCategoryInfo}
      />
      {selectedCategoryInfo && (
        <div style={descriptionSectionStyle}>
          <h2 style={titleStyle}>Description</h2>
          <p>{selectedCategoryInfo.description}</p>
          <h2 style={titleStyle}>Benefits</h2>
          <ul style={listStyle}>
            {selectedCategoryInfo.benefits.map((benefit, index) => (
              <li key={index} style={itemStyle}>
                {benefit}
              </li>
            ))}
          </ul>
          <h2 style={titleStyle}>Care Instructions</h2>
          <p>{selectedCategoryInfo.careInstructions}</p>
        </div>
      )}
      <Gallery />
      <Footer />
    </>
  );
}
