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

const ProductInfo: React.FC = () => {
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh', // Adjust the height as needed
    };

    const colorListStyle: CSSProperties = {
        flex: 1,
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', // Creates a responsive grid layout
        gap: '10px', // Adds some space between the squares
        overflowY: 'auto', // In case you have many colors
    };

    const infoSectionStyle: CSSProperties = {
        flex: 2, // Gives more space to the info section
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={colorListStyle}>
                <TabsComponent/>
            </div>
            <div style={infoSectionStyle}>
                {/* Adjust the src attribute to your needs */}
                <Image src="/path-to-your-image.jpg" alt="Product Image" width={500} height={300} objectFit="contain" />
                <h2>Product Name</h2>
                <p>This is some information about the product. It can include details like material, size, or any other relevant info.</p>
            </div>
        </div>
    );
};

type ColorOption = {
    name: string;
    image: string; // The URL of the image
  };
  
  const colorPalette: { [key: string]: ColorOption[] } = {
    sheerweave4300: [
        { name: 'White', image: '/curtin/Sheerweave4300/white.jpeg' },
        { name: 'White Stone', image: '/curtin/Sheerweave4300/white-stone.jpeg' },
        { name: 'Sandstone', image: '/curtin/Sheerweave4300/sandstone.jpeg' },
        { name: 'Slate Stone', image: '/curtin/Sheerweave4300/slate-stone.jpeg' },
        { name: 'Charcoal Bronze', image: '/curtin/Sheerweave4300/charcoal-bronze.jpeg' },
        { name: 'Charcoal', image: '/curtin/Sheerweave4300/charcoal.jpeg' },
    ],
    sheerweave4500: [
        { name: 'Ice', image: '/curtin/Sheerweave4500/ice.jpeg' },
        { name: 'White', image: '/curtin/Sheerweave4500/white.jpeg' },
        { name: 'White Stone', image: '/curtin/Sheerweave4500/white-stone.jpeg' },
        { name: 'White Linen', image: '/curtin/Sheerweave4500/white-linen.jpeg' },
        { name: 'Sandstone', image: '/curtin/Sheerweave4500/sandstone.jpeg' },
        { name: 'Linen', image: '/curtin/Sheerweave4500/linen.jpeg' },
        { name: 'White Grey', image: '/curtin/Sheerweave4500/white-grey.jpeg' },
        { name: 'Charcoal Grey', image: '/curtin/Sheerweave4500/charcoal-grey.jpeg' },
        { name: 'Denim', image: '/curtin/Sheerweave4500/denim.jpeg' },
        { name: 'Charcoal Gold', image: '/curtin/Sheerweave4500/charcoal-gold.jpeg' },
        { name: 'Charcoal Bronze', image: '/curtin/Sheerweave4500/charcoal-bronze.jpeg' },
        { name: 'Charcoal', image: '/curtin/Sheerweave4500/charcoal.jpeg' },
    ],
    sheerweave4510: [
        { name: 'White', image: '/curtin/Sheerweave4510/white.jpeg' },
        { name: 'White Stone', image: '/curtin/Sheerweave4510/white-stone.jpeg' },
        { name: 'White Linen', image: '/curtin/Sheerweave4510/white-linen.jpeg' },
        { name: 'White Grey', image: '/curtin/Sheerweave4510/white-grey.jpeg' },
        { name: 'Charcoal Grey', image: '/curtin/Sheerweave4510/charcoal-grey.jpeg' },
        { name: 'Charcoal', image: '/curtin/Sheerweave4510/charcoal.jpeg' },
    ],
    duoScreen: [
        { name: 'White', image: '/curtin/DuoScreen/white.jpeg' },
        { name: 'White Stone', image: '/curtin/DuoScreen/white-stone.jpeg' },
        { name: 'White Linen', image: '/curtin/DuoScreen/white-linen.jpeg' },
        { name: 'Dune Grey', image: '/curtin/DuoScreen/dune-grey.jpeg' },
        { name: 'White Grey', image: '/curtin/DuoScreen/white-grey.jpeg' },
        { name: 'Blue Grey', image: '/curtin/DuoScreen/blue-grey.jpeg' },
        { name: 'Charcoal Grey', image: '/curtin/DuoScreen/charcoal-grey.jpeg' },
        { name: 'Charcoal Slate', image: '/curtin/DuoScreen/charcoal-slate.jpeg' },
        { name: 'Charcoal', image: '/curtin/DuoScreen/charcoal.jpeg' },
    ],
    aventus3: [
        { name: 'Ice', image: '/curtin/Aventus3/ice.jpeg' },
        { name: 'White', image: '/curtin/Aventus3/white.jpeg' },
        { name: 'White Linen', image: '/curtin/Aventus3/white-linen.jpeg' },
        { name: 'White Stone', image: '/curtin/Aventus3/white-stone.jpeg' },
        { name: 'White Grey', image: '/curtin/Aventus3/white-grey.jpeg' },
        { name: 'Concrete', image: '/curtin/Aventus3/concrete.jpeg' },
        { name: 'Dune Grey', image: '/curtin/Aventus3/dune-grey.jpeg' },
        { name: 'Platinum', image: '/curtin/Aventus3/platinum.jpeg' },
        { name: 'Gull', image: '/curtin/Aventus3/gull.jpeg' },
        { name: 'Domino', image: '/curtin/Aventus3/domino.jpeg' },
        { name: 'Wren', image: '/curtin/Aventus3/wren.jpeg' },
        { name: 'Pewter', image: '/curtin/Aventus3/pewter.jpeg' },
        { name: 'Charcoal Grey', image: '/curtin/Aventus3/charcoal-grey.jpeg' },
        { name: 'Charcoal Denim', image: '/curtin/Aventus3/charcoal-denim.jpeg' },
        { name: 'Graphite', image: '/curtin/Aventus3/graphite.jpeg' },
        { name: 'Charcoal Bronze', image: '/curtin/Aventus3/charcoal-bronze.jpeg' },
        { name: 'Charcoal', image: '/curtin/Aventus3/charcoal.jpeg' },
    ],
    aventus5: [
        { name: 'Ice', image: '/curtin/Aventus3/ice.jpeg' },
        { name: 'White', image: '/curtin/Aventus3/white.jpeg' },
        { name: 'White Linen', image: '/curtin/Aventus3/white-linen.jpeg' },
        { name: 'White Stone', image: '/curtin/Aventus3/white-stone.jpeg' },
        { name: 'White Grey', image: '/curtin/Aventus3/white-grey.jpeg' },
        { name: 'Concrete', image: '/curtin/Aventus3/concrete.jpeg' },
        { name: 'Dune Grey', image: '/curtin/Aventus3/dune-grey.jpeg' },
        { name: 'Platinum', image: '/curtin/Aventus3/platinum.jpeg' },
        { name: 'Gull', image: '/curtin/Aventus3/gull.jpeg' },
        { name: 'Domino', image: '/curtin/Aventus3/domino.jpeg' },
        { name: 'Wren', image: '/curtin/Aventus3/wren.jpeg' },
        { name: 'Pewter', image: '/curtin/Aventus3/pewter.jpeg' },
        { name: 'Charcoal Grey', image: '/curtin/Aventus3/charcoal-grey.jpeg' },
        { name: 'Charcoal Denim', image: '/curtin/Aventus3/charcoal-denim.jpeg' },
        { name: 'Graphite', image: '/curtin/Aventus3/graphite.jpeg' },
        { name: 'Charcoal Bronze', image: '/curtin/Aventus3/charcoal-bronze.jpeg' },
        { name: 'Charcoal', image: '/curtin/Aventus3/charcoal.jpeg' },
    ],
    aventus10: [
        { name: 'Ice', image: '/curtin/Aventus3/ice.jpeg' },
        { name: 'White', image: '/curtin/Aventus3/white.jpeg' },
        { name: 'White Linen', image: '/curtin/Aventus3/white-linen.jpeg' },
        { name: 'White Stone', image: '/curtin/Aventus3/white-stone.jpeg' },
        { name: 'White Grey', image: '/curtin/Aventus3/white-grey.jpeg' },
        { name: 'Concrete', image: '/curtin/Aventus3/concrete.jpeg' },
        { name: 'Dune Grey', image: '/curtin/Aventus3/dune-grey.jpeg' },
        { name: 'Platinum', image: '/curtin/Aventus3/platinum.jpeg' },
        { name: 'Gull', image: '/curtin/Aventus3/gull.jpeg' },
        { name: 'Domino', image: '/curtin/Aventus3/domino.jpeg' },
        { name: 'Wren', image: '/curtin/Aventus3/wren.jpeg' },
        { name: 'Pewter', image: '/curtin/Aventus3/pewter.jpeg' },
        { name: 'Charcoal Grey', image: '/curtin/Aventus3/charcoal-grey.jpeg' },
        { name: 'Charcoal Denim', image: '/curtin/Aventus3/charcoal-denim.jpeg' },
        { name: 'Graphite', image: '/curtin/Aventus3/graphite.jpeg' },
        { name: 'Charcoal Bronze', image: '/curtin/Aventus3/charcoal-bronze.jpeg' },
        { name: 'Charcoal', image: '/curtin/Aventus3/charcoal.jpeg' },
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
  
  const TabsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(Object.keys(tabColors)[0]);
  
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
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {tabColors[activeTab].map((colorOption, index) => (
            <div key={index} style={colorSquareStyle(colorOption)} title={colorOption.name}></div>
          ))}
        </div>
      </div>
    );
  };
  
  
export default function Curtains() {
  return (
    <div>
      <Header />
      <MainHeader />
      <CurtinsTitle />
      <ProductInfo />
      <Footer />
    </div>
  );
}
