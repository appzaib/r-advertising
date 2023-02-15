import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import React from "react";

const about = () => {
  return (
    <>
      <Navbar2 />
      <div className="text-gray-600 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mx-auto text-left xl:w-1/2 lg:w-3/4">
            <h1 className="pb-10 text-6xl text-center">About Us</h1>

            <p className="text-xl leading-relaxed ">
              Welcome to our advertising agency! We are a team of creative and
              strategic thinkers who are passionate about helping businesses and
              organizations achieve their marketing goals. Our agency was
              founded with the mission of providing innovative, effective, and
              personalized marketing solutions to our clients. At our agency, we
              believe that successful marketing campaigns are built on a
              foundation of trust, collaboration, and transparency.
            </p>
            <p className="text-xl leading-relaxed">
              {" "}
              We work closely with our clients to understand their unique needs
              and goals, and we develop customized strategies to help them
              achieve success. Our team has extensive experience in a wide range
              of industries and markets, and we bring this expertise to every
              project we work on. Whether you need help with digital
              advertising, social media marketing, print ads, television and
              radio commercials, or any other type of marketing, we have the
              knowledge and skills to deliver results.
            </p>
            <p className="text-xl leading-relaxed ">
              We pride ourselves on our strong company culture, which is built
              on a foundation of creativity, teamwork, and respect. Our team
              members are passionate about what they do, and they are committed
              to delivering high-quality work that meets our clients' needs and
              exceeds their expectations. At our agency, we offer a range of
              services to help our clients achieve their marketing goals.
              <br /> These include:
            </p>
            <div className="items-center justify-center mt-2 mb-2 text-xl">
              <li>Strategic planning and campaign development.</li>
              <li>Creative development and design.</li>
              <li>Media planning and buying.</li>
              <li>Social media marketing.</li>
              <li>Digital advertising.</li>
              <li>Public relations and brand management</li>
            </div>
            <p className="text-xl leading-relaxed">
              We are proud of the work we have done for our clients, and we are
              committed to helping them achieve continued success. We have a
              proven track record of delivering high-quality work on time and
              within budget, and we are dedicated to building long-term
              relationships with our clients based on trust, communication, and
              collaboration. If you are looking for a trusted partner to help
              you achieve your marketing goals, we would love to hear from you.
              Contact us today to learn more about our services and how we can
              help your business succeed.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative flex flex-wrap w-full px-10 py-32 mb-4 bg-gray-100 h-[600px] ">
        <img
          alt="gallery"
          className="absolute inset-0 block object-fill w-full h-full"
          src="images/hero.svg"
        ></img>
      </div> */}
      <Footer2 />
    </>
  );
};

export default about;
