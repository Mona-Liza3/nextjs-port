import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>

<div className='flex justify-end px-14 py-4  uppercase '>
    <div className='space-x-16  '>
<Link className='hover:underline hover:text-pink-400' href="" >works</Link>
<Link className='hover:underline hover:text-pink-400' href="" >blog</Link>
<Link className='hover:underline hover:text-pink-400' href="" >contact</Link>

    </div></div>
    
    
    </>
  )
}

export default Navbar