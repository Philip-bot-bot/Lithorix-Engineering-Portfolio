import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md'
import { IoArrowForward } from 'react-icons/io5'

const Footer = () => {
  return (
    <div id='Footer'
      className='flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-start'
    >

      <div>
        <h1 className='text-2xl md:text-4xl font-bold'>Why Choose Us?</h1>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Comprehensive engineering and construction solutions under one roof.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Permit-ready architectural, structural, and MEP designs.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Professional project planning and construction management.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Reliable property maintenance and facility management services.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              High-quality building materials and dependable supply chain.
            </h3>
          </div>
            <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Innovative smart building technologies.
            </h3>
          </div>
           <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Commitment to quality, safety, sustainability, and regulatory compliance.
            </h3>
          </div>
            <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Client-focused service with technical excellence at every stage.
            </h3>
          </div>

        </div>
      </div>
      <div>
        <h1 className='text-2xl md:text-4xl font-bold'>Our Commitment</h1>
        <h3 className='text-sm md:text-1xl font-normal '>At Lithorix Engineering, we are committed to engineering  </h3>
        <h3 className='text-sm md:text-1xl font-normal '>excellence, construction quality, and long-term client value. Every</h3>
        <h3 className='text-sm md:text-1xl font-normal '>project is executed with professionalism, technical precision,</h3>
        <h3 className='text-sm md:text-1xl font-normal '>integrity, and attention to detail. Whether designing a new</h3>
        <h3 className='text-sm md:text-1xl font-normal '>development, constructing a modern facility, managing an existing </h3>
        <h3 className='text-sm md:text-1xl font-normal '>property, supplying quality building materials, integrating smart </h3>
        <h3 className='text-sm md:text-1xl font-normal '>technologies, or facilitating property sales and rentals, we strive to</h3>
        <h3 className='text-sm md:text-1xl font-normal '>deliver solutions that are durable, efficient, sustainable, and built to  </h3>
        <h3 className='text-sm md:text-1xl font-normal '>the highest professional standards. </h3>
      </div>

      <div>
        <h1 className='text-2xl md:text-4xl font-bold'>Contact Us</h1>
        <div className="flex flex-col gap-3">
    
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <li className='flex gap-1 items-center'>
              <MdOutlineEmail size={20} />
              lithorix.engineering@gmail.com
            </li >
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <li className='flex gap-1 items-center'>
              <CiLinkedin size={20} />
              <a href='https://www.linkedin.com/in/emmanuel-okyere-487b811a8?utm_source=share_via&utm_content=profile&utm_medium=member_android'>Linkedin</a>
            </li>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <li className='flex gap-1 items-center'>
              <MdOutlinePhone size={20} />
              +233206857824
            </li>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Footer