// pages/products.js
import React, { CSSProperties } from 'react';
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "@/graphql/allProduct";
import ProductList from "@/components/ProductList";
import ProductSkeletons from "@/components/ProductSkeletons"; // Use this instead of LoadingSpinner
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";
import ProductSkeleton from '@/components/ProductSkeleton';

const ProductsPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  // Determine the number of skeleton loaders to show, this can be based on your design/grid
  const skeletonCount = 10; // Adjust this number as needed

  const ProductsSection: React.FC = () => {
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
        Products
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        <ProductsSection/>

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
