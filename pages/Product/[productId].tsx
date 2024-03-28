import React from "react";
import { useRouter } from "next/router";
import productsData from "../../data/Product.json";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import ProductDetails from "@/components/ProductDetails";

type Image = {
  sourceUrl: string;
};

type Color = {
  name: string;
  hex: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  content: string[];
  image: Image[];
  color: Color[];
  width: string[];
  height: string[];
  DVA: string[];
  DVAColor: Color[];
};

type ProductsData = {
  products: Product[];
};

// Simulating import of JSON data
const allProducts: ProductsData = productsData;

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Find the product by ID using the productId from the URL
  const product = allProducts.products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="bg-[#FFFCF8] w-screen wide:w-[80%] ultraWide:w-[75%] mx-auto">
        <MainHeader />

        {/* Render the product details component with the found product */}
        <ProductDetails product={product} />

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
