import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap your application with the ApolloProvider and pass the client as a prop
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
