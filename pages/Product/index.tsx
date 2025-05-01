import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
const InfoSection = dynamic(() => import("@/components/InfoSection"));
const ProductList = dynamic(() => import("@/components/ProductList"));

import productsData from "../../data/Product.json";

import {
  faShieldAlt,
  faPaintBrush,
  faCogs,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    icon: faShieldAlt,
    title: "Enhanced Protection",
    description: "Durable materials and locks provide superior security.",
  },
  {
    icon: faPaintBrush,
    title: "Custom Designs",
    description: "Tailored to match your home's style and character.",
  },
  {
    icon: faCogs,
    title: "Built to Last",
    description: "High-quality construction ensures long-term durability.",
  },
  {
    icon: faDollarSign,
    title: "Added Value",
    description: "Increases property value with improved curb appeal.",
  },
];

const ProductsPage = () => {
  const transformedProducts = productsData.products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    image: { sourceUrl: product.image[0].sourceUrl },
    link: `/Product/${product.id}`,
  }));

  return (
    <>
      <Head>
        <title>
          Security Doors - Enhance Home Safety | DT Security Doors & Shutters
        </title>
        <meta
          name="description"
          content="Discover our premium range of security doors designed to enhance your home's safety and aesthetic appeal. Custom designs available to match any home style."
        />
        <meta
          property="og:title"
          content="Security Doors - Enhance Home Safety | DT Security Doors & Shutters"
        />
        <meta
          property="og:description"
          content="Explore our selection of security doors that offer both safety and style for your home. Contact us for custom designs."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/Product"
        />
        <meta property="og:type" content="website" />
      </Head>

      <HeroSection title="Security Doors" />

      <InfoSection
        title="Why Security Doors?"
        description="Explore the advantages of installing security doors to enhance your home's safety and aesthetics."
        items={benefits}
      />

      <ProductList products={transformedProducts} />
    </>
  );
};

export default ProductsPage;