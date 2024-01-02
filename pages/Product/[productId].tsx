// ProductPage.tsx
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_QUERY } from "@/graphql/getProduct";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data, loading, error } = useQuery(GET_PRODUCT_QUERY, {
    variables: { id: productId },
    skip: !productId,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>{data?.product && <ProductDetails product={data.product} />}</div>
  );
};

export default ProductPage;
