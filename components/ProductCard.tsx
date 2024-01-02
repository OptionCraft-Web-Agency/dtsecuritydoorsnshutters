// components/ProductCard.tsx
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

type ProductCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price,
}) => {
  const router = useRouter(); // Corrected usage

  const viewProductDetails = () => {
    router.push(`/Product/${id}`); // Corrected usage
  };

  return (
    <div className="border rounded shadow-sm p-4 flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        objectFit="cover"
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-700">{price}</p>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={viewProductDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          View Product
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
