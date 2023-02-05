import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
    <section Class="text-gray-600 body-font">
  <div Class="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
    <Image Class="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6" alt="hero" src="/images/hero.svg" width="1200" height="100"/>
    <div Class="w-full text-center lg:w-2/3">
      <h1 Class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Your Thoughts Our Implementation</h1>
      <p Class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus tristique orci eu iaculis. Aenean placerat sapien vitae diam aliquet, non porttitor augue euismod. Duis ut ante at neque mollis iaculis. Aenean ut risus urna. Ut placerat quam ac pellentesque commodo. Etiam dignissim diam nisi, porta rutrum augue grav</p>
      <div Class="flex justify-center">
        <button Class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Contact Us</button>
{/*         <button Class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Apply Now</button> */}
      </div>
    </div>
  </div>
</section>
    </>
  )}

export default Hero
