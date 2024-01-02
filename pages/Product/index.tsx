// pages/products.js
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "@/graphql/allProduct";
import ProductList from "@/components/productList";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the spinner component
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_QUERY);

  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        <h1>Products</h1>
        {/* Show the loading spinner or the error message in place of the product list */}
        {loading ? (
          <LoadingSpinner />
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
