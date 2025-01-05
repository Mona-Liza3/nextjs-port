import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
  <section className="p-8">
  <div className="flex  sm:flex-row gap-3 justify-center items-center text-2xl">
    <FaFacebookSquare />
    <RiInstagramLine />
    <FaTwitter />
    <FaLinkedin />
  </div>
  <h2 className="font-bold flex my-2 justify-center items-center text-sm sm:text-base">
    Copyright @2020 All rights Reserved
  </h2>
</section>
  
    </>

  )
}

export default Footer