import React from "react";

const Card = () => {
  const data = [
    {
      id: 1,
      heading1: "Rao Ahmad",
      heading6: "Web Developer",
      para: "Experienced web developer & Seo expert specialized in React, Node.js, and MongoDB, dedicated to building fast, secure, and scalable web solutions for clients. ",
      image: "/images/rao.png",
    },
    {
      id: 2,
      heading1: "Intezar R",
      heading6: "Web Developer",
      para: "Expert in Add creatation .Create and maintain web applications and websites using a combination of programming languages, frameworks, and tools.",
      image: "/images/intezar_bg.png",
    },
    {
      id: 3,
      heading1: "Aftab R",
      heading6: "Web Developer",
      para: "Professional designer and developer experienced in React and Next.js, as well as proficient in Tailwind, Bootstrap, and CSS3.5 years experinced in Website compaining.",
      image: "/images/aftab2.png",
    },
  ];

  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
          Our Experts
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-5 main-h-screen bg-white-100">
        {data.map((data, i) => (
          <div className="group h-96 w-80 [perspective:500px]  " key={i}>
            <div className=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full shadow-xl rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500"
                  src={data.image}
                />
              </div>{" "}
              <div className="absolute inset-0 w-full h-full px-12 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-slate-200 [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col items-center justify-center min-h-full font-semibold">
                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {data.heading1}
                  </h3>
                  <h4 className="my-2 text-2xl text-gray-300">
                    {data.heading6}
                  </h4>

                  <p className="text-base font-inter">{data.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
