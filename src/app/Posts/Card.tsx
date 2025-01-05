import React from 'react'

const Card = () => {
  return (
    <>
  <section className="ml-[-40px]  mt-[-100px] bg-pink-300 px-2 py-[120px]">
    <div className="flex flex-col md:flex-row justify-center gap-12">
      {/* Card 1 */}
      <div className="flex flex-col w-full md:w-[450px] bg-white shadow-lg rounded-lg">
        <div className="px-6 md:px-12 py-4">
          <h2 className="font-bold text-xl md:text-2xl">Making a design starting from scratch</h2>
          <div className="flex gap-4 md:gap-6 py-4 text-gray-600 text-sm md:text-base">
            <span>12 Feb 2020</span>
            <span>|</span>
            <span>Design, Pattern</span>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque est temporibus alias numquam hic deserunt nam quia laboriosam. Error, repellat assumenda. Possimus molestiae optio minima, repudiandae voluptas reprehenderit cumque temporibus.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col w-full md:w-[450px] bg-white shadow-lg rounded-lg">
        <div className="px-6 md:px-12 py-4">
          <h2 className="font-bold text-xl md:text-2xl">Exploring new design methodologies</h2>
          <div className="flex gap-4 md:gap-6 py-4 text-gray-600 text-sm md:text-base">
            <span>15 Mar 2020</span>
            <span>|</span>
            <span>Innovation, Strategy</span>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero aperiam voluptas, neque officiis reprehenderit recusandae eveniet molestiae corrupti. Sint, dolores. Architecto beatae optio unde repellat fugiat atque veniam deleniti!
          </p>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Card