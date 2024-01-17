import Image from 'next/image';
import React, { CSSProperties } from 'react';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

const RollerShuttersTitle: React.FC = () => {
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
      Roller Shutters
    </div>
  );
};

const WhyRollerShutters: React.FC = () => {
    const sectionStyle: CSSProperties = {
      fontFamily: '"Inter", sans-serif', // Use the Inter font family or a similar sans-serif font
      backgroundColor: '#f4f4f4', // Use a light background color
      color: '#333', // Use a darker color for text for readability
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem', // Use rem units for padding for consistent scaling
      textAlign: 'center', // Center align the text
    };
  
    const titleStyle: CSSProperties = {
      fontSize: '2.5rem', // Larger font size for titles
      fontWeight: 'bold',
      marginBottom: '1rem', // Margin bottom for spacing
    };
  
    const descriptionStyle: CSSProperties = {
      marginBottom: '2rem', // Margin bottom for spacing after the description
      fontSize: '1rem', // Standard font size for description
      maxWidth: '600px', // Max-width to control the line length for readability
    };
  
    const listStyle: CSSProperties = {
      listStyle: 'none', // Remove list styling
      padding: 0, // Remove padding
      display: 'grid', // Use grid for layout
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', // Create a responsive grid layout
      gap: '1rem', // Gap between grid items
      maxWidth: '800px', // Max-width for the entire grid
    };
  
    const listItemStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center align the items
      fontSize: '1rem', // Font size for list items
    };
  
    const iconStyle: CSSProperties = {
      backgroundColor: '#eeeeee', // Icon background color
      borderRadius: '50%', // Make it circular
      width: '3rem', // Width of the icon area
      height: '3rem', // Height of the icon area
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem', // Space between icon and text
    };
      
    // Icons can be replaced with actual image tags or SVGs
    const icons = {
      safe: "🔒", // placeholder icon
      efficient: "⚡", // placeholder icon
      noiseReduction: "🔇", // placeholder icon
      customization: "🎨", // placeholder icon
    };
      
    return (
        <div style={sectionStyle}>
            <h2 style={titleStyle}>Why Roller Shutters?</h2>
            <p style={descriptionStyle}>
            Discover the benefits of roller shutters for security, energy efficiency, and more:
            </p>
            <ul style={listStyle}>
                <li style={listItemStyle}>
                    <div style={iconStyle}>{icons.safe}</div>
                    <strong>Enhanced Security</strong> Robust construction deters break-ins.
                </li>
                <li style={listItemStyle}>
                    <div style={iconStyle}>{icons.efficient}</div>
                    <strong>Energy Efficiency</strong> Insulates against heat and cold.
                </li>
                <li style={listItemStyle}>
                    <div style={iconStyle}>{icons.noiseReduction}</div>
                    <strong>Noise Reduction</strong> Cuts down external noise effectively.
                </li>
                <li style={listItemStyle}>
                    <div style={iconStyle}>{icons.customization}</div>
                    <strong>Customization</strong> Variety of styles to complement your home.
                </li>
            </ul>
        </div>
    );
};
  
export default function RollerShutters() {
  return (
    <div>
      <Header />
      <MainHeader />
      <RollerShuttersTitle />
    <WhyRollerShutters/>
      <Footer />
    </div>
  );
}
