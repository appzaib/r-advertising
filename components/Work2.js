import React from "react";

const Work2 = () => {
  const data = [
    {
      name: " Tech Brand",
      para: "Yes, a good advertising agency would be able to analyze the root causes of a website's low visitor attraction and work to develop a targeted advertising campaign to address these issues. Here are some possible steps an agency might take to determine the root causes and develop an effective campaign",

      img: "/images/portfolio_website.svg",
    },
    {
      name: " Fashion Brand",
      para: "Conducting research: The first step in developing a successful campaign for a fashion website is to conduct research to better understand the website's target audience and their needs. This might involve analyzing website traffic data, conducting surveys or focus groups, or reviewing the website's content and design to identify areas for improvement.",

      img: "/work/work2.svg",
    },
    {
      name: " Product Brand ",
      para: "Conducting research: The first step in developing a successful advertising campaign for a website that is not performing well is to conduct research to understand the root cause of the issue. This may involve analyzing website traffic data, conducting surveys or focus groups to better understand the target audience, and reviewing the website's content and design. We conduct this website Video Ad campaign and now this website is game chnager in the market.",

      img: "/work/work1.svg",
    },
  ];

  return (
    <>
      <div className="overflow-hidden text-gray-600 body-font">
        <div className="pt-10 text-center">
          <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Work Done By Us
          </h1>
        </div>
        {data.map((data, i) => (
          <div className="container px-5 py-24 mx-auto " key={i}>
            <div className="flex flex-wrap mx-auto lg:w-4/5">
              <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">
                  {data.name}
                </h1>
                <p className="mb-4 text-lg leading-relaxed">{data.para}</p>
              </div>
              <img
                alt="client_site"
                className="object-cover object-center w-full h-64 duration-1000 bg-purple-500 border-2 border-indigo-500 rounded md:object-fill hover:translate-x-20 lg:w-1/2 lg:h-auto md:h-full sm:h-full "
                src={data.img}
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work2;
