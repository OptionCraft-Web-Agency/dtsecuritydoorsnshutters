import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import fetch from "node-fetch";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(
    "https://www.facebook.com/plugins/customer_chat/..."
  );
  const data = await response.json();

  return {
    props: { data }, // Pass data to the page via props
  };
};
