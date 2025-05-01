import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  description: string;
  image: { sourceUrl: string };
  link: string;
};

type ProductListProps = {
  title?: string;
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ title = "Our Products", products }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-10 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.image.sourceUrl}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;