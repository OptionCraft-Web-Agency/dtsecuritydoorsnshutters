import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import MainHeader from "@/components/MainHeader";
import Footer from "../components/Footer";


library.add(faPhone);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <MainHeader />
      <Component {...pageProps} />
      <Footer/>
    </ApolloProvider>
  );
}
