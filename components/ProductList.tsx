import React from "react";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    image: { sourceUrl: string };
    link: string;
  }>;
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  );
};

export default ProductList;