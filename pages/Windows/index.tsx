import React, { useState, useEffect, CSSProperties, useRef } from 'react';
import useOnScreen from '@/components/useOnScreen';

import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPaintBrush, faCloudRain, faHandshake, faThermometerHalf, faSun, faFan, faLeaf } from '@fortawesome/free-solid-svg-icons';

const InfoSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '0px');

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateMedia);
    updateMedia();

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const sectionStyles: CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '2rem auto',
  };
    
  const textSectionStyle: CSSProperties = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const featuresGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '20px',
    padding: '20px',
  };

  const featureItemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
  };

  const headingStyle: CSSProperties = {
    fontSize: '1.75rem', // Larger font size for the heading
    fontWeight: '600', // Semi-bold for emphasis
    margin: '0.5rem 0', // Margin around the heading for spacing
  };
  
  const paragraphStyle: CSSProperties = {
    fontSize: '1rem', // Standard font size for body text
    lineHeight: '1.6', // Line height for improved readability
    maxWidth: '600px', // Max width to maintain comfortable reading lines
    margin: 'auto', // Auto margins to center the paragraph
  };

  const features = [
    { icon: faThermometerHalf, description: "Optimal thermal performance reducing heating and cooling costs." },
    { icon: faLock, description: "State-of-the-art security features for peace of mind." },
    { icon: faSun, description: "Maximized natural light intake with energy-efficient glass." },
    { icon: faFan, description: "Superior air flow regulation for comfortable living environments." },
    { icon: faLeaf, description: "Eco-friendly materials supporting sustainable living." },
  ];

  return (
    <div 
      ref={ref}
      style={{
        ...sectionStyles,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      <div style={textSectionStyle}>
        <h2 style={headingStyle}>Enhancing Your Home with Our Windows Collection</h2>
        <p style={paragraphStyle}>
            Explore our diverse range of window solutions designed for aesthetic harmony and functional excellence. Each window is crafted for superior performance, offering unparalleled insulation, security, and style.
        </p>
      </div>
      <div style={featuresGridStyle}>
        {features.map((feature, index) => (
            <div key={index} style={featureItemStyle}>
            <FontAwesomeIcon icon={feature.icon} size="lg" />
            <span>{feature.description}</span>
            </div>
        ))}
      </div>
    </div>
  );
}; 
  
const WindowsTitle: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '0px');

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
    <div 
      ref={ref}
      style={{
        ...sectionStyle,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      Windows
    </div>
  );
};

const images = [
    '/image/WindowImage/WindowImage1.jpg',
    '/image/WindowImage/WindowImage2.jpg',
    '/image/WindowImage/WindowImage3.jpg',
    '/image/WindowImage/WindowImage4.jpg'

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

// const GallerySlideshow: React.FC = () => {
//     const [currentStartIndex, setCurrentStartIndex] = useState(0);
//     const numOfVisibleImages = 4; // Number of images to show at once
//     const length = galleryImages.length;

//     const nextSlide = () => {
//         setCurrentStartIndex(prevIndex => {
//             const nextIndex = prevIndex + 1;
//             return nextIndex + numOfVisibleImages - 1 < length ? nextIndex : length - numOfVisibleImages < 0 ? 0 : length - numOfVisibleImages;
//         });
//     };

//     const prevSlide = () => {
//         setCurrentStartIndex(prevIndex => {
//             // Corrected the variable name inside the function
//             const newIndex = prevIndex - 1;
//             return newIndex < 0 ? 0 : newIndex;
//         });
//     };

//     const galleryStyle: CSSProperties = {
//         display: 'flex',
//         width: '100%',
//         overflow: 'hidden',
//         justifyContent: 'flex-start',
//     };

//     const slideStyle: CSSProperties = {
//         minWidth: `calc(100% / ${numOfVisibleImages})`, 
//         transition: 'transform 0.5s ease-in-out',
//         position: 'relative', // Ensure this is here for layout="fill" to work correctly
//     };
    

//     const arrowStyle: CSSProperties = {
//         position: 'absolute',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         zIndex: 10,
//         cursor: 'pointer',
//         userSelect: 'none',
//         background: 'rgba(0, 0, 0, 0.5)',
//         borderRadius: '50%',
//         padding: '0.5rem',
//         color: 'white',
//     };

//     return (
//         <div style={{ position: 'relative' }}>
//             <FontAwesomeIcon icon={faChevronLeft} style={{ ...arrowStyle, left: '10px' }} onClick={prevSlide} />
//             <FontAwesomeIcon icon={faChevronRight} style={{ ...arrowStyle, right: '10px' }} onClick={nextSlide} />
//             <div style={galleryStyle}>
//                 {galleryImages.slice(currentStartIndex, currentStartIndex + numOfVisibleImages).map((image, index) => (
//                     <div key={index} style={slideStyle}>
//                         <Image 
//                             src={image} 
//                             alt={`Slide ${index}`} 
//                             layout="fill"
//                             objectFit="cover" 
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

export default function Windows() {
  return (
    <div>
      <Header />
      <MainHeader />
      <WindowsTitle />
      <InfoSection />
      <Gallery />
      <Footer />
    </div>
  );
}