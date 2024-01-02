// components/ProductList.tsx
import React from "react";
import ProductCard from "./productCard";

type ProductListProps = {
  products: Array<{
    id: string;
    name: string;
    image: { sourceUrl: string };
    price: string;
    link: string;
  }>;
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          imageUrl={product.image.sourceUrl} // Use the direct source URL for the image
          price={product.price}
          productUrl={product.link}
        />
      ))}
    </div>
  );
};

export default ProductList;
