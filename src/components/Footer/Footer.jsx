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
              Integrated design and construction services.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Experienced engineering and technical professionals.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Quality-driven execution and supervision.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Compliance with safety and industry standards.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoArrowForward size={20} />
            <h3 className="text-sm md:text-1xl font-normal">
              Innovative and sustainable building solutions.
            </h3>
          </div>

        </div>
      </div>
      <div>
        <h1 className='text-2xl md:text-4xl font-bold'>Our Commitment</h1>
        <h3 className='text-sm md:text-1xl font-normal '>At Lithorix Engineering, every project is handled </h3>
        <h3 className='text-sm md:text-1xl font-normal '>with professionalism, technical accuracy, and attention to detail.</h3>
        <h3 className='text-sm md:text-1xl font-normal '>We are committed to delivering reliable infrastructure</h3>
        <h3 className='text-sm md:text-1xl font-normal '> and value-driven real estate solutions that stand the test of time.</h3>
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