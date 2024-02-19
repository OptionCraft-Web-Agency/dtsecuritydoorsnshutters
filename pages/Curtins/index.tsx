import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

const CurtinsTitle: React.FC = () => {
    const sectionStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 'min(4vw, 7vw)',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
    };
    
    return (
    <div style={sectionStyle}>
        Curtins
    </div>
    );
};

type ProductInfoProps = {
  colorOptions: ColorOption[];
  onColorOptionSelect: (colorOption: ColorOption) => void;
  selectedColorOption: ColorOption | null;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ colorOptions, onColorOptionSelect, selectedColorOption }) => {
  const [selectedImage, setSelectedImage] = useState<ColorOption | null>(null);

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    width: '100%',
  };

  const colorListStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
    cursor: 'pointer',
    maxWidth: '50%',
  };

  const selectedImageStyle: CSSProperties = {
    maxWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
            <p>{colorOption.name}</p>
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
          <p>{selectedImage.name}</p>
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
    description: "Sheerweave 4300 is a revolutionary half basketweave (2x1) sunscreen manufactured using DOW ECOLIBRIUM bio-based plasticizers, rather than fossil fuel-based plasticizers. DOW Ecolibrium does not detract from the sunscreen’s appearance or performance, and provides a sustainable green alternative to traditional sunscreens, without the PVC smell.",
    benefits: [
      "Uses bio-based plasticizers for a more sustainable product",
      "Maintains performance and appearance without the PVC smell",
      "Offers a green alternative to traditional sunscreens"
    ],
    careInstructions: "Care instructions specific to Sheerweave 4300...",
  },
  "Sheerweave 4500": {
    description: "Sheerweave 4500 is a revolutionary half basketweave (2x2) sunscreen manufactured using DOW ECOLIBRIUM bio-based plasticizers, rather than fossil fuel-based plasticizers. DOW Ecolibrium does not detract from the sunscreens appearance or performance, and provides a sustainable green alternative to traditional sunscreens, without the PVC smell.",
    benefits: [
      "Innovative use of bio-based plasticizers",
      "Eco-friendly solution without compromising quality",
      "Free from the traditional PVC smell found in other sunscreens"
    ],
    careInstructions: "Care instructions specific to Sheerweave 4500...",
  },
  "Sheerweave 4510": {
    description: "Sheerweave 4510 is a revolutionary 2x2 sunscreen manufactured using DOW ECOLIBRIUM bio-based plasticizers, rather than fossil fuel-based plasticizers. DOW Ecolibrium does not detract from the sunscreen’s appearance or performance, and provides a sustainable green alternative to traditional sunscreens, without the PVC smell.",
    benefits: [
      "Features DOW ECOLIBRIUM bio-based plasticizers",
      "Sustainable alternative with excellent performance",
      "Eliminates the PVC smell for a better user experience"
    ],
    careInstructions: "Care instructions specific to Sheerweave 4510...",
  },
};

type ColorOption = {
    name: string;
    image: string; // The URL of the image
};
  
const colorPalette: { [key: string]: ColorOption[] } = {
  sheerweave4300: [
      { name: 'White', image: '/image/curtin/Sheerweave4300/white.jpeg' },
      { name: 'White Stone', image: '/image/curtin/Sheerweave4300/white-stone.jpeg' },
      { name: 'Sandstone', image: '/image/curtin/Sheerweave4300/sandstone.jpeg' },
      { name: 'Slate Stone', image: '/image/curtin/Sheerweave4300/slate-stone.jpeg' },
      { name: 'Charcoal Gold', image: '/image/curtin/Sheerweave4300/charcoal-gold.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/Sheerweave4300/charcoal.jpeg' },
  ],
  sheerweave4500: [
      { name: 'Ice', image: '/image/curtin/Sheerweave4500/ice.jpeg' },
      { name: 'White', image: '/image/curtin/Sheerweave4500/white.jpeg' },
      { name: 'White Stone', image: '/image/curtin/Sheerweave4500/white-stone.jpeg' },
      { name: 'White Linen', image: '/image/curtin/Sheerweave4500/white-linen.jpeg' },
      { name: 'Sandstone', image: '/image/curtin/Sheerweave4500/sandstone.jpeg' },
      { name: 'Linen', image: '/image/curtin/Sheerweave4500/linen.jpeg' },
      { name: 'White Grey', image: '/image/curtin/Sheerweave4500/white-grey.jpeg' },
      { name: 'Charcoal Grey', image: '/image/curtin/Sheerweave4500/charcoal-grey.jpeg' },
      { name: 'Denim', image: '/image/curtin/Sheerweave4500/denim.jpeg' },
      { name: 'Charcoal Gold', image: '/image/curtin/Sheerweave4500/charcoal-gold.jpeg' },
      { name: 'Charcoal Bronze', image: '/image/curtin/Sheerweave4500/charcoal-bronze.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/Sheerweave4500/charcoal.jpeg' },
  ],
  sheerweave4510: [
      { name: 'White', image: '/image/curtin/Sheerweave4510/white.jpeg' },
      { name: 'White Stone', image: '/image/curtin/Sheerweave4510/white-stone.jpeg' },
      { name: 'White Linen', image: '/image/curtin/Sheerweave4510/white-linen.jpeg' },
      { name: 'White Grey', image: '/image/curtin/Sheerweave4510/white-grey.jpeg' },
      { name: 'Charcoal Grey', image: '/image/curtin/Sheerweave4510/charcoal-grey.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/Sheerweave4510/charcoal.jpeg' },
  ],
  duoScreen: [
      { name: 'White', image: '/image/curtin/DuoScreen/white.jpeg' },
      { name: 'White Stone', image: '/image/curtin/DuoScreen/white-stone.jpeg' },
      { name: 'White Linen', image: '/image/curtin/DuoScreen/white-linen.jpeg' },
      { name: 'Dune Grey', image: '/image/curtin/DuoScreen/dune-grey.jpeg' },
      { name: 'White Grey', image: '/image/curtin/DuoScreen/white-grey.jpeg' },
      { name: 'Blue Grey', image: '/image/curtin/DuoScreen/blue-grey.jpeg' },
      { name: 'Charcoal Grey', image: '/image/curtin/DuoScreen/charcoal-grey.jpeg' },
      { name: 'Charcoal Slate', image: '/image/curtin/DuoScreen/charcoal-slate.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/DuoScreen/charcoal.jpeg' },
  ],
  aventus3: [
      { name: 'Ice', image: '/image/curtin/Aventus3/ice.jpeg' },
      { name: 'White', image: '/image/curtin/Aventus3/white.jpeg' },
      { name: 'White Linen', image: '/image/curtin/Aventus3/white-linen.jpeg' },
      { name: 'White Stone', image: '/image/curtin/Aventus3/white-stone.jpeg' },
      { name: 'White Grey', image: '/image/curtin/Aventus3/white-grey.jpeg' },
      { name: 'Concrete', image: '/image/curtin/Aventus3/concrete.jpeg' },
      { name: 'Dune Grey', image: '/image/curtin/Aventus3/dune-grey.jpeg' },
      { name: 'Platinum', image: '/image/curtin/Aventus3/platinum.jpeg' },
      { name: 'Gull', image: '/image/curtin/Aventus3/gull.jpeg' },
      { name: 'Domino', image: '/image/curtin/Aventus3/domino.jpeg' },
      { name: 'Wren', image: '/image/curtin/Aventus3/wren.jpeg' },
      { name: 'Pewter', image: '/image/curtin/Aventus3/pewter.jpeg' },
      { name: 'Charcoal Grey', image: '/image/curtin/Aventus3/charcoal-grey.jpeg' },
      { name: 'Charcoal Denim', image: '/image/curtin/Aventus3/charcoal-denim.jpeg' },
      { name: 'Graphite', image: '/image/curtin/Aventus3/graphite.jpeg' },
      { name: 'Charcoal Bronze', image: '/image/curtin/Aventus3/charcoal-bronze.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/Aventus3/charcoal.jpeg' },
  ],
  aventus5: [
      { name: 'Ice', image: '/image/curtin/Aventus3/ice.jpeg' },
      { name: 'White', image: '/image/curtin/Aventus3/white.jpeg' },
      { name: 'White Linen', image: '/image/curtin/Aventus3/white-linen.jpeg' },
      { name: 'White Stone', image: '/image/curtin/Aventus3/white-stone.jpeg' },
      { name: 'White Grey', image: '/image/curtin/Aventus3/white-grey.jpeg' },
      { name: 'Concrete', image: '/image/curtin/Aventus3/concrete.jpeg' },
      { name: 'Dune Grey', image: '/image/curtin/Aventus3/dune-grey.jpeg' },
      { name: 'Platinum', image: '/image/curtin/Aventus3/platinum.jpeg' },
      { name: 'Gull', image: '/image/curtin/Aventus3/gull.jpeg' },
      { name: 'Domino', image: '/image/curtin/Aventus3/domino.jpeg' },
      { name: 'Wren', image: '/image/curtin/Aventus3/wren.jpeg' },
      { name: 'Pewter', image: '/image/curtin/Aventus3/pewter.jpeg' },
      { name: 'Charcoal Grey', image: '/image/curtin/Aventus3/charcoal-grey.jpeg' },
      { name: 'Charcoal Denim', image: '/image/curtin/Aventus3/charcoal-denim.jpeg' },
      { name: 'Graphite', image: '/image/curtin/Aventus3/graphite.jpeg' },
      { name: 'Charcoal Bronze', image: '/image/curtin/Aventus3/charcoal-bronze.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/Aventus3/charcoal.jpeg' },
  ],
  aventus10: [
      { name: 'Ice', image: '/image/curtin/Aventus3/ice.jpeg' },
      { name: 'White', image: '/image/curtin/Aventus3/white.jpeg' },
      { name: 'White Linen', image: '/image/curtin/Aventus3/white-linen.jpeg' },
      { name: 'White Stone', image: '/image/curtin/Aventus3/white-stone.jpeg' },
      { name: 'White Grey', image: '/image/curtin/Aventus3/white-grey.jpeg' },
      { name: 'Concrete', image: '/image/curtin/Aventus3/concrete.jpeg' },
      { name: 'Dune Grey', image: '/image/curtin/Aventus3/dune-grey.jpeg' },
      { name: 'Platinum', image: '/image/curtin/Aventus3/platinum.jpeg' },
      { name: 'Gull', image: '/image/curtin/Aventus3/gull.jpeg' },
      { name: 'Domino', image: '/image/curtin/Aventus3/domino.jpeg' },
      { name: 'Wren', image: '/image/curtin/Aventus3/wren.jpeg' },
      { name: 'Pewter', image: '/image/curtin/Aventus3/pewter.jpeg' },
      { name: 'Charcoal Grey', image: '/image/curtin/Aventus3/charcoal-grey.jpeg' },
      { name: 'Charcoal Denim', image: '/image/curtin/Aventus3/charcoal-denim.jpeg' },
      { name: 'Graphite', image: '/image/curtin/Aventus3/graphite.jpeg' },
      { name: 'Charcoal Bronze', image: '/image/curtin/Aventus3/charcoal-bronze.jpeg' },
      { name: 'Charcoal', image: '/image/curtin/Aventus3/charcoal.jpeg' },
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
  onSelectCategory: (category: CategoryInfo) => void; // New callback prop
};

const TabsComponent: React.FC<TabsComponentProps> = ({ activeTab, setActiveTab, tabColors, onSelectCategory }) => {
  const tabsContainerStyle: CSSProperties = {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  };

  const tabListStyle: CSSProperties = {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    listStyleType: 'none',
    padding: '10px',
    margin: 0,
  };

  const tabStyle: CSSProperties = {
    cursor: 'pointer',
    display: 'inline-block',
    padding: '10px 20px',
    margin: '0 10px',
    borderBottom: '3px solid transparent',
  };

  const activeTabStyle: CSSProperties = {
    ...tabStyle,
    borderBottom: '3px solid #000',
  };

  const colorSquareStyle = (colorOption: ColorOption): CSSProperties => ({
    width: '100px',
    height: '100px',
    backgroundImage: `url(${colorOption.image})`,
    backgroundSize: 'cover',
    display: 'inline-block',
    margin: '10px',
  });

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

export default function Curtains() {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabColors)[0]);
  const [selectedColorOption, setSelectedColorOption] = useState<ColorOption | null>(null);
  const [selectedCategoryInfo, setSelectedCategoryInfo] = useState<CategoryInfo | null>(null);

  const handleSelectColorOption = (colorOption: ColorOption) => setSelectedColorOption(colorOption);
  const handleSelectCategory = (categoryInfo: CategoryInfo) => setSelectedCategoryInfo(categoryInfo);

  // Enhanced styles with boldness
  const descriptionSectionStyle: CSSProperties = {
    backgroundColor: '#F5F5F5',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    lineHeight: '1.6',
  };

  const titleStyle: CSSProperties = {
    color: '#333',
    marginBottom: '16px',
    fontSize: '22px',
    fontWeight: 'bold', // Added boldness here
  };

  const listStyle: CSSProperties = {
    listStyleType: 'disc',
    paddingLeft: '20px',
  };

  const itemStyle: CSSProperties = {
    marginBottom: '8px',
  };

  return (
    <div>
      <Header />
      <MainHeader />
      <CurtinsTitle />
      <ProductInfo 
        colorOptions={tabColors[activeTab]} 
        onColorOptionSelect={handleSelectColorOption} 
        selectedColorOption={selectedColorOption}
      />
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabColors={tabColors}
        onSelectCategory={handleSelectCategory}
      />
      {selectedCategoryInfo && (
        <div style={descriptionSectionStyle}>
          <h2 style={titleStyle}>Description</h2>
          <p>{selectedCategoryInfo.description}</p>
          <h2 style={titleStyle}>Benefits</h2>
          <ul style={listStyle}>
            {selectedCategoryInfo.benefits.map((benefit, index) => (
              <li key={index} style={itemStyle}>{benefit}</li>
            ))}
          </ul>
          <h2 style={titleStyle}>Care Instructions</h2>
          <p>{selectedCategoryInfo.careInstructions}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}