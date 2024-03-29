import React, { useState, useEffect, CSSProperties, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faWind, faDollarSign, faHeart, faHome, faShieldAlt, faSprayCan } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import useOnScreen from '@/components/useOnScreen';

import Image from 'next/image';
import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

const FlyScreensTitle: React.FC = () => {
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

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '0px');
    
    return (
        <div
            ref={ref}
            style={{
                ...sectionStyle,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
            }}
        >
            Fly Screens
        </div>
    );
};

const FlyscreenSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [hover, setHover] = useState(false); // State to handle hover effect
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle: CSSProperties = {
        padding: '40px 20px',
        borderRadius: '8px',
        margin: '20px auto',
        textAlign: 'center',
        maxWidth: '960px',
    };

    const imageContainerStyle: CSSProperties = {
        position: 'relative',
        width: '200px',
        height: '200px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        margin: '0 20px', // Adjusted margin for bottom spacing
    };

    const buttonStyle: CSSProperties = {
        padding: '10px 20px',
        backgroundColor: hover ? '#0056b3' : '#007BFF', // Change color on hover
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
    };

    const navigateToContactUs = () => {
        router.push('/ContactUs'); // Use the useRouter hook for navigation
    };

    return (
        <div
            ref={ref}
            style={{
                ...sectionStyle,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 2s ease-in-out', 
            }}
        >
            <h2 style={{ fontSize: isMobile ? '8vw' : '3rem', marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
                Premium Flyscreens: Comfort & Protection Redefined
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap', marginBottom:'20px' }}>
                {/* Wrap each Image in its own container with imageContainerStyle */}
                <div style={imageContainerStyle}>
                    <Image src="/image/FlyScreenImage/FlyScreenImage1.jpg" alt="Flyscreen 1" layout="fill" objectFit="cover" />
                </div>
                <div style={imageContainerStyle}>
                    <Image src="/image/FlyScreenImage/FlyScreenImage2.jpg" alt="Flyscreen 2" layout="fill" objectFit="cover" />
                </div>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                Elevate your home&apos;s comfort and security with our premium flyscreens, available in durable materials including fibre glass, aluminum, and stainless steel. Designed for resilience and superior protection, our flyscreens ensure a seamless blend of functionality and style.
            </p>
            <button
                style={buttonStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const benefitsSectionStyle: CSSProperties = {
        padding: '40px 20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        margin: '40px auto',
        maxWidth: '960px',
        textAlign: 'center',
    };

    const titleStyle: CSSProperties = {
        fontSize: isMobile ? '8vw' : '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    };

    const listItemStyle: CSSProperties = {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center', // Aligns icon and text vertically in the center
        gap: '10px',
    };
    
    const iconStyle: CSSProperties = {
        minWidth: '30px', // Ensure all icons have the same width for alignment
        textAlign: 'center', // Center the icons in their grid area
        fontSize: '1.5rem',
    };
    
    const textContainerStyle: CSSProperties = {
        textAlign: 'left', // Aligns the text to the left
        flex: '1', // Takes up the remaining space for alignment
    };

    const benefits = [
        { icon: faBug, text: "Protection Against Pests: Keep mosquitoes, flies, and other pests out while letting fresh air in." },
        { icon: faWind, text: "Enhanced Air Quality: Promote better ventilation and air quality inside your home without worrying about insects." },
        { icon: faDollarSign, text: "Energy Savings: Reduce the need for air conditioning by allowing cooler air to circulate naturally through your home." },
        { icon: faHeart, text: "Improved Health: Reduce the risk of diseases transmitted by pests and insects." },
        { icon: faHome, text: "Aesthetic Appeal: Available in various materials and designs that can complement your home decor." },
        { icon: faShieldAlt, text: "Added Security: Some fly screens come with additional security features to prevent unauthorized access." },
        { icon: faSprayCan, text: "Easy Maintenance: Designed for easy cleaning and durability, ensuring long-lasting protection." },
    ];

    return (
        <div
            ref={ref}
            style={{
                ...benefitsSectionStyle,
                opacity: isVisible ? 1 : 0, // Apply dynamic opacity
                transition: 'opacity 2s ease-in-out', // Smooth transition for the fade-in effect
            }}
        >
            <h2 style={titleStyle}>Benefits of Fly Screens</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {benefits.map((benefit, index) => {
                    const [title, description] = benefit.text.split(': ');
                    return (
                        <li key={index} style={listItemStyle}>
                            <FontAwesomeIcon style={iconStyle} icon={benefit.icon} />
                            <div style={textContainerStyle}>
                                <strong>{title}:</strong> {description}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const images = [
    '/image/FlyScreenImage/FlyScreenImage1.jpg',
    '/image/FlyScreenImage/FlyScreenImage2.jpg',
    '/image/FlyScreenImage/FlyScreenImage3.jpg',
    '/image/FlyScreenImage/FlyScreenImage4.jpg',
    '/image/FlyScreenImage/FlyScreenImage5.jpg',
    '/image/FlyScreenImage/FlyScreenImage6.jpg',
    '/image/FlyScreenImage/FlyScreenImage7.jpg',
    '/image/FlyScreenImage/FlyScreenImage8.jpg',
    '/image/FlyScreenImage/FlyScreenImage9.jpg',
    '/image/FlyScreenImage/FlyScreenImage10.jpg',
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
            <h2 style={titleStyle}>Fly Screen Gallery</h2>
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
        <div>
        <Header />
        <MainHeader />
        <FlyScreensTitle />
        <FlyscreenSection />
        <BenefitsOfFlyScreens />
        <Gallery />
        <Footer />
        </div>
    );
}
