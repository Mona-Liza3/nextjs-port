import React from 'react'
import Card from './Card'

const Posts = () => {
  return (
    <><section className="flex flex-col px-6 md:px-16 bg-pink-300 py-9">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-[590px] font-bold px-4 justify-center items-center">
      <h2 className="text-xl md:text-2xl">Recent Posts</h2>
      <button className="text-pink-500 hover:underline text-lg md:text-xl">View All</button>
    </div>
  
    {/* Additional Content or Cards can go here */}
  </section>
  
    <Card/>

    
    
    </>
  )
}

export default Posts