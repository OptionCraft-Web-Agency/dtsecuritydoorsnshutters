// components/ProductSkeleton.js
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="border rounded shadow-sm p-4 flex flex-col items-center animate-pulse">
      <div className="bg-slate-200 h-48 w-full rounded-md"></div>{" "}
      {/* Image placeholder */}
      <div className="h-6 bg-slate-200 rounded w-3/4 mt-2"></div>{" "}
      {/* Name placeholder */}
      <div className="h-4 bg-slate-200 rounded w-1/2 mt-2"></div>{" "}
      {/* Price placeholder */}
      <div className="mt-4 w-full flex justify-center space-x-2">
        <div className="bg-slate-200 h-10 w-24 rounded-md"></div>{" "}
        {/* View Product button placeholder */}
        <div className="bg-slate-200 h-10 w-24 rounded-md"></div>{" "}
        {/* Add to Cart button placeholder */}
      </div>
    </div>
  );
};

export default ProductSkeleton;
