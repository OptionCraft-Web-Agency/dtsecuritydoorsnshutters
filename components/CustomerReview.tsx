import React, { useState } from 'react';

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

  const handleDotClick = (index: number) => {
    setCurrentReviewIndex(index);
  };

  const review = reviews[currentReviewIndex];

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 87, 255, 0.64)",
        textAlign: "center",
        padding: "4vw 0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px 0px",
      }}
    >
      <h2 style={{ color: "white", fontSize: "2vw", margin: "0 0 1vw 0", fontWeight: 'bold' }}>
        What Our Customers Are Saying
      </h2>

      <p style={{ color: "white", fontSize: "1.25vw", maxWidth: "70%", margin: "0 auto 4vw" }}>
        We guarantee our professional services. Our objective is the satisfaction of our clients.
      </p>

      <div style={{ backgroundColor: "white", fontSize: "1.25vw", padding: "2vw", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "70%", position: "relative", margin: "0 auto", transition: 'all 0.5s ease-in-out' }}>
        <div style={{ fontSize: "1.5vw", color: "black", padding: "1vw 0" }}>
          {review.rating}
        </div>

        <p>{review.text}</p>

        <div style={{ position: "absolute", bottom: "-1vw", left: "10%", width: "0", height: "0", borderLeft: "1vw solid transparent", borderRight: "1vw solid transparent", borderTop: "1vw solid white", transform: "translateX(-50%)" }}></div>

        <p style={{ fontSize: "1.5vw", position: "absolute", bottom: "-3vw", left: "10%", transform: "translateX(-50%)", color: "white" }}>
          {review.author}
        </p>
      </div>

      <div style={{ fontSize: "1.5vw", color: "white", marginTop: "3vw", display: "flex", gap: "0.5vw", justifyContent: "center" }}>
        {reviews.map((_, index) => (
          <span
            key={index}
            style={{ cursor: 'pointer', color: currentReviewIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)' }}
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
