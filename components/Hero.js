import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-5 pt-10 mx-auto">
          <Image
            className="object-cover object-center w-5/6 mb-10 duration-1000 rounded hover:translate-x-20 lg:w-2/6 md:w-3/6"
            alt="hero"
            src="/images/hero.svg"
            width="1200"
            height="100"
          />
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Your Thoughts Our Implementation
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
              Our advertising agency motive is to help businesses effectively
              promote their products or services to their target audience, by
              creating and executing advertising campaigns that are strategic,
              creative, and impactful.{" "}
              {/* Ultimately, the goal is to help the
              client achieve their business objectives, whether that's
              increasing brand awareness, driving sales, or building customer
              loyalty. */}
            </p>
            <div className="flex justify-center ">
              <Link
                href={"../contact"}
                className="inline-flex px-6 py-2 text-lg text-white border-0 rounded shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 focus:outline-pink btn"
              >
                Contact Us
              </Link>
              {/*         <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Apply Now</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
