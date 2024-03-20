import React, { useState, useEffect } from 'react';

const reviews = [
  {
    text: "Our Security Door From DT Security Has Provided Us With Peace Of Mind. It's Sturdy, Reliable, And Looks Great In Our Home.",
    author: "John Smith",
    rating: "★★★★★"
  },
  {
    text: "The installation process was quick and efficient, and the final result exceeded our expectations.",
    author: "Emily Johnson",
    rating: "★★★★★"
  },
  // Add more reviews as needed
];

const CustomerReview: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentReviewIndex(index);
  };

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[currentReviewIndex];

  const styles = {
    container: {
      background: 'linear-gradient(to right, rgb(0, 87, 255), rgb(0, 44, 128))',
      textAlign: "center" as const, // No change needed, just an example for explicit casting
      padding: isMobile ? "10vw 0" : "4vw 0",
      width: "100%",
      display: "flex",
      flexDirection: "column" as 'column', // Correcting the type
      alignItems: "center",
      margin: "30px 0",
    },  
    header: {
      color: "white",
      fontSize: isMobile ? "6vw" : "2vw",
      margin: "0 0 1vw 0",
      fontWeight: 'bold',
    },
    text: {
      color: "white",
      fontSize: isMobile ? "5vw" : "1.25vw",
      maxWidth: "70%",
      margin: "0 auto 4vw",
    },
    reviewBox: {
      backgroundColor: "white",
      fontSize: isMobile ? "4vw" : "1.25vw",
      padding: isMobile ? "5vw" : "2vw",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "70%",
      position: "relative" as 'relative', // Correcting the type
      transition: 'all 0.5s ease-in-out',
    },
    navigationSpanLeft: {
      left: '5%',
      cursor: 'pointer',
      fontSize: isMobile ? '5vw' : '2vw',
      userSelect: 'none' as 'none', // Explicitly typed as 'none'
      position: 'absolute' as 'absolute', // Explicitly typed as 'absolute'
      color: 'white',
    },
    navigationSpanRight: {
      right: '5%',
      cursor: 'pointer',
      fontSize: isMobile ? '5vw' : '2vw',
      userSelect: 'none' as 'none', // Explicitly typed as 'none'
      position: 'absolute' as 'absolute', // Explicitly typed as 'absolute'
      color: 'white',
    },
    author: {
      fontSize: isMobile ? "3.5vw" : "1.5vw",
      position: "absolute" as 'absolute', // Making sure position is set correctly
      bottom: "-3vw",
      left: "50%",
      transform: "translateX(-50%)",
      color: "white",
    },
    rating: {
      fontSize: isMobile ? "4vw" : "1.5vw",
      color: "black",
      padding: "1vw 0",
    },
    dots: {
      fontSize: isMobile ? "4vw" : "1.5vw",
      color: "white",
      marginTop: "3vw",
      display: "flex",
      gap: "0.5vw",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>What Our Customers Are Saying</h2>
      <p style={styles.text}>
        We guarantee our professional services. Our objective is the satisfaction of our clients.
      </p>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <span onClick={prevReview} style={{...styles.navigationSpanLeft}}>&#9664;</span>
        
        <div style={styles.reviewBox}>
          <div style={styles.rating}>
            {review.rating}
          </div>

          <p style={{ fontSize: isMobile ? "3.5vw" : "1.25vw" }}>{review.text}</p>
          
          <div style={{
            position: "absolute",
            bottom: "-1vw",
            left: "50%",
            width: "0",
            height: "0",
            borderLeft: "1vw solid transparent",
            borderRight: "1vw solid transparent",
            borderTop: "1vw solid white",
            transform: "translateX(-50%)",
          }}></div>

          <p style={styles.author}>
            {review.author}
          </p>
        </div>

        <span onClick={nextReview} style={{...styles.navigationSpanRight}}>&#9654;</span>
      </div>

      <div style={styles.dots}>
        {reviews.map((_, index) => (
          <span
            key={index}
            style={{
              cursor: 'pointer',
              color: currentReviewIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              fontSize: isMobile ? "4vw" : "1.5vw",
            }}
            onClick={() => handleDotClick(index)}
          >
            &#9679;
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;

