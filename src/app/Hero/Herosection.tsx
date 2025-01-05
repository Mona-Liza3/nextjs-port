import React from 'react'

import Image from 'next/image'
import Hero1 from "@/app/Public/assets/Hero.jpg"
const Herosection = () => {
  return (
<>
  <section className="flex flex-col md:flex-row items-center md:items-start relative">
    {/* Text Section */}
    <div className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-6 sm:px-10 md:px-20 py-16 sm:py-24 md:py-32 lg:py-[200px]">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
        Hi, I am John,
      </h2>
      <h2 className="font-bold text-4xl sm:text-3xl md:text-4xl   ">
        Creative Technologist.
      </h2>
      <div className="flex flex-col w-full py-10 sm:py-12 md:py-14 text-lg sm:text-lg md:text-xl">
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          corrupti dolorem nisi molestias id vel minima eos magni, laboriosam
          deserunt modi debitis unde? Animi ad inventore ducimus fugit, corporis
          expedita.
        </p>
      </div>
      <button className="bg-pink-500 py-3 sm:py-4 w-[200px] sm:w-[250px] md:w-[300px] text-base sm:text-lg md:text-2xl px-4 text-white hover:bg-pink-600">
        Download Resume
      </button>
    </div>

    {/* Image Section */}
    <div className="mt-10 md:mt-0 flex justify-center md:absolute md:left-[590px] lg:left-[650px] lg:mt-[150px]">
  <Image
    className="rounded-full w-80 h-80"
    src={Hero1}
    width={500}
    height={500}
    alt=""
  />
</div>


  </section>
</>

  )
}

export default Herosection