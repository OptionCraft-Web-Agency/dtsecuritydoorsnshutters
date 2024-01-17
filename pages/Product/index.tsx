// pages/products.js
import React, { CSSProperties } from 'react';
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "@/graphql/allProduct";
import ProductList from "@/components/ProductList";
import ProductSkeletons from "@/components/ProductSkeletons"; // Use this instead of LoadingSpinner
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import ProductSkeleton from '@/components/ProductSkeleton';

const ProductsPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  // Determine the number of skeleton loaders to show, this can be based on your design/grid
  const skeletonCount = 10; // Adjust this number as needed

  const SecurityDoorTitle: React.FC = () => {
    const sectionStyle: CSSProperties = {
      position: 'relative',
      width: '100%',
      height: 'calc(100vh - 80px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 'min(4vw, 7vw)', // Adjusted for better text scaling
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      background: `linear-gradient(180deg, rgba(136, 136, 138, 0.54) 0%, rgba(0, 87, 255, 0.29) 100%), url('/RollerDoor3.png') center/cover no-repeat`,
    };
  
    return (
      <div style={sectionStyle}>
        Security Doors
      </div>
    );
  };

  const WhySecurityDoors: React.FC = () => {
    const sectionStyle: CSSProperties = {
      fontFamily: '"Inter", sans-serif',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      textAlign: 'center',
    };

    const titleStyle: CSSProperties = {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    };

    const descriptionStyle: CSSProperties = {
      marginBottom: '2rem',
      fontSize: '1rem',
      maxWidth: '600px',
    };

    const listStyle: CSSProperties = {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '1rem',
      maxWidth: '800px',
    };

    const listItemStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1rem',
    };

    const iconStyle: CSSProperties = {
      backgroundColor: '#eeeeee',
      borderRadius: '50%',
      width: '3rem',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
    };
    
    const icons = {
      security: "🛡️", // placeholder icon
      design: "🎨", // placeholder icon
      durability: "⚙️", // placeholder icon
      value: "💰", // placeholder icon
    };

    return (
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Why Security Doors?</h2>
        <p style={descriptionStyle}>
          Explore the advantages of installing security doors to enhance your home's safety and aesthetics:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <div style={iconStyle}>{icons.security}</div>
            <strong>Enhanced Protection:</strong> Durable materials and locks provide superior security.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>{icons.design}</div>
            <strong>Custom Designs:</strong> Tailored to match your home's style and character.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>{icons.durability}</div>
            <strong>Built to Last:</strong> High-quality construction ensures long-term durability.
          </li>
          <li style={listItemStyle}>
            <div style={iconStyle}>{icons.value}</div>
            <strong>Added Value:</strong> Increases property value with improved curb appeal.
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

        <SecurityDoorTitle/>

        <WhySecurityDoors/>

        <div style={{margin:'5vw'}}>

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
