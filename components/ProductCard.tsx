import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

type ProductCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  description,
}) => {
  const router = useRouter();

  const viewProductDetails = () => {
    router.push(`/Product/${id}`);
  };

  return (
    <div className="border rounded shadow-sm p-4 flex flex-col items-center">
      <div className="w-[95%] relative h-64">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={viewProductDetails}
          className="px-4 py-2 border border-black bg-black text-white font-semibold text-sm leading-tight rounded transition-colors hover:bg-opacity-90"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
