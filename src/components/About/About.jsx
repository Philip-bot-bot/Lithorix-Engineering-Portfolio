import React from 'react'
import AboutImg from "/src/assets/Lithorix_Engineering_Logo2.png";
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
    return (
        <div
            id='About'
            div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
                             mx-0 md:mx-20 bg-opacaity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className='md:h-100 md:w-100' src={AboutImg} alt='About img' />

                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Architectural Design</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                   We develop functional and aesthetically refined designs tailored to client requirements, regulatory standards, and site conditions.
                                </p>

                            </span>

                        </div>

                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Structural Engineering</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    Our structural solutions are designed for strength, durability,
                                     and compliance with approved codes, ensuring long-term safety and performance.
                                </p>

                            </span>

                        </div>

                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>MEP Engineering</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    We deliver efficient mechanical, electrical, and plumbing systems that optimize
                                     energy use, comfort, and operational reliability.
                                </p>

                            </span>

                        </div>
                        
                           <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Construction & Project Delivery</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    We deliver efficient mechanical, electrical, and plumbing systems that optimize
                                     energy use, comfort, and operational reliability.
                                </p>

                            </span>

                        </div>
                           <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Smart Building Systems</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                   We integrate modern smart technologies including automation, energy management, security systems, and intelligent controls 
                                   to enhance building performance and user experience.
                                </p>

                            </span>

                        </div>


                    </ul>
                </div>

            </div>

        </div>
    )
}

export default About