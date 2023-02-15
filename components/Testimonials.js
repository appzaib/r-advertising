import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-12 text-3xl font-medium text-center text-gray-900 title-font">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4 md:w-1/2">
              <div className="h-full p-8 bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(99 102 241 )"
                  className="block mb-4 text-gray-400 w-7 h-7"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  "I was skeptical about hiring a marketing agency to help me
                  with my business, but working with R Advertising Agency was
                  one of the best decisions I ever made. Their team was able to
                  help me identify my unique selling proposition and develop a
                  marketing strategy that spoke directly to my target audience."
                </p>
                <a className="relative flex items-center text-right">
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Johan Harry
                    </span>
                    <span className="pr-4 text-sm text-gray-500">
                      EDGE TECH
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2">
              <div className="h-full p-8 bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(99 102 241 )"
                  className="block w-7 h-7 text-gray-400 mb-4 transform:rotateY(180deg)"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  "I had the pleasure of working with R Advertising Agency and I
                  have to say, I was blown away by their professionalism and
                  creativity. I highly recommend R Advertising Agency to any
                  business owner who wants to take their marketing efforts to
                  the next level."
                </p>
                <a className="relative flex items-center pt-10 text-right">
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font ">
                      Sami Rauf
                    </span>
                    <span className="pr-2 text-sm text-gray-500">
                      Swim Soft
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
