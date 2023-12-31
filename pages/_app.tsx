import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
