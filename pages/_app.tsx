import type { AppProps } from "next/app";
import Nav from "../components/nav";
import "@/public/globals.css";
import "@/public/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
