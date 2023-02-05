import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import Statics from "@/components/Statics";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>R-Advertising</title>
        <meta
          name="description"
          content="A Advertising Agency That Change Your Mind About Advertising"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar2 />
      <Hero />
      <Statics />
      <Footer />
    </>
  );
}
