// pages/products.js
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "@/graphql/allProduct";
import ProductList from "@/components/ProductList";
import ProductSkeletons from "@/components/ProductSkeletons"; // Use this instead of LoadingSpinner
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  // Determine the number of skeleton loaders to show, this can be based on your design/grid
  const skeletonCount = 10; // Adjust this number as needed

  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        <h1>Products</h1>
        {/* Show the ProductSkeletons or the error message in place of the product list */}
        {loading ? (
          <ProductSkeletons count={skeletonCount} />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ProductList products={data?.products.nodes || []} />
        )}

        <HomeForm />

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
