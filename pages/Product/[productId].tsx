// ProductPage.tsx
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_QUERY } from "@/graphql/getProduct";
import ProductDetails from "@/components/ProductDetails";
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data, loading, error } = useQuery(GET_PRODUCT_QUERY, {
    variables: { id: productId },
    skip: !productId,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const goBack = () => {
    router.push("/Product"); // Assuming your products page is at '/products'
  };

  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />
        <button
          onClick={goBack}
          className="my-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </button>
        
        <div>{data?.product && <ProductDetails product={data.product} />}</div>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
