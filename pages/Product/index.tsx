// pages/products.js
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "@/graphql/allProduct";
import ProductList from "@/components/ProductList";
import ProductSkeletons from "@/components/ProductSkeletons"; // Use this instead of LoadingSpinner
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import ProductSkeleton from "@/components/ProductSkeleton";

import React, { useState, useEffect, CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faPaintBrush,
  faCogs,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const ProductsPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  // Determine the number of skeleton loaders to show, this can be based on your design/grid
  const skeletonCount = 10; // Adjust this number as needed

  const SecurityDoorTitle: React.FC = () => {
    const sectionStyle: CSSProperties = {
      position: "relative",
      width: "100%",
      height: "calc(100vh - 80px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "min(4vw, 7vw)", // Adjusted for better text scaling
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
    };

    return <div style={sectionStyle}>Security Doors</div>;
  };

  const WhySecurityDoors: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Ensure window is defined (i.e., running in the browser)
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        // Set the initial value based on the current window width
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);

    const sectionStyle: CSSProperties = {
      fontFamily: '"Inter", sans-serif',
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "2rem" : "3rem",
      textAlign: "center",
    };

    const titleStyle: CSSProperties = {
      fontSize: isMobile ? "1.5rem" : "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    };

    const descriptionStyle: CSSProperties = {
      marginBottom: "2rem",
      fontSize: isMobile ? "0.9rem" : "1rem",
      maxWidth: "600px",
      padding: isMobile ? "0 1rem" : "0",
    };

    const listStyle: CSSProperties = {
      listStyle: "none",
      padding: 0,
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "1rem",
      maxWidth: "800px",
    };

    const listItemStyle: CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "1rem",
      marginBottom: isMobile ? "1rem" : "0",
    };

    const iconStyle: CSSProperties = {
      backgroundColor: "#eeeeee",
      borderRadius: "50%",
      width: "3rem",
      height: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.5rem",
      fontSize: isMobile ? "1.5rem" : "1.8rem", // Adjust font size for icons on mobile
    };

    const icons = {
      security: faShieldAlt,
      design: faPaintBrush,
      durability: faCogs,
      value: faDollarSign,
    };

    return (
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Why Security Doors?</h2>
        <p style={descriptionStyle}>
          Explore the advantages of installing security doors to enhance your
          home's safety and aesthetics:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={icons.security} />
            </div>
            <strong>Enhanced Protection:</strong> Durable materials and locks
            provide superior security.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={icons.design} />
            </div>
            <strong>Custom Designs:</strong> Tailored to match your home's style
            and character.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={icons.durability} />
            </div>
            <strong>Built to Last:</strong> High-quality construction ensures
            long-term durability.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={icons.value} />
            </div>
            <strong>Added Value:</strong> Increases property value with improved
            curb appeal.
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        <SecurityDoorTitle />

        <WhySecurityDoors />

        <div style={{ margin: "5vw" }}>
          {/* Show the ProductSkeletons or the error message in place of the product list */}
          {loading ? (
            <ProductSkeletons count={skeletonCount} />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <ProductList products={data?.products.nodes || []} />
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
