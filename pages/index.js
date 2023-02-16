import Head from "next/head";
import { Inter } from "@next/font/google";

import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";

import Footer2 from "@/components/Footer2";
import Statics from "@/components/Statics";
import Cardx from "@/components/Cardx";
import Testimonials from "@/components/Testimonials";
import Work2 from "@/components/Work2";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>R-Advertising</title>
        <meta
          name="description"
          content="A Advertising Agency That Change Your Mind About Advertising"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar2 />
      <Hero />
      <Statics />
      <Cardx />
      <Work2 />
      <Testimonials />
      <Footer2 />
      {/*  <Footer /> */}
    </>
  );
};
export default Home;
