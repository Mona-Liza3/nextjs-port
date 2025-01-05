import React from 'react'
import Image from 'next/image'
import project01 from "@/app/Public/Rectangle 30.png"
import Dashbord from './Dashbord'
import project02 from "@/app/Public/Rectangle 32.png"
import project03 from "@/app/Public/Rectangle 34.png"
const Projects = () => {
  return (
    <><section className="px-16 py-8">
    <h2 className="font-bold flex py-2 px-8 text-xl md:flex-wrap text-center">Featured works</h2>
  
    <section className="flex flex-col md:flex-row px-8 py-12 items-center md:items-start">
      <Image className="responsive-img" src={project01} alt="" />
      <div className="px-8 text-center md:text-left">
        <h2 className="font-bold text-xl">Designing Dashboards</h2>
        <Dashbord /> 
      </div>
    </section>
  </section>
  


{/* project 02 */}
<section>

<section className="px-16 py-2">
   
    <section className="flex flex-col md:flex-row px-8  items-center md:items-start">
      <Image className="responsive-img" src={project02} alt="" />
      <div className="px-8 text-center md:text-left">
        <h2 className="font-bold text-xl">Designing Dashboards</h2>
        <Dashbord /> 
      </div>
    </section>
  </section>
{/* project 03 */}



<section className="px-16 py-14">
   
    <section className="flex flex-col md:flex-row px-8  items-center md:items-start">
      <Image className="responsive-img" src={project03} alt="" />
      <div className="px-8 text-center md:text-left">
        <h2 className="font-bold text-xl">Designing Dashboards</h2>
        <Dashbord /> 
      </div>
    </section>
  </section>
    </section>
    </>
  )
}

export default Projects