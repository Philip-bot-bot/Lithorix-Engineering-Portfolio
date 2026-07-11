import React from 'react'
import avatarImg from '../../../assets/Lithorix_Engineering_Logo2.png'
import TextChange from '../../TextChange'

const Home = () => {
    return (
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                    <TextChange />
                </h1>
                <p className='text-sm md:text-2xl tracking-tight'>
                    Lithorix Engineering delivers innovative, precision-driven engineering and construction solutions,
                    combining expertise, quality, and smart technologies to build safe, sustainable,
                    and future-ready spaces.

                </p>

                <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
                  duration-300 hover:sacle-105 font-semibold rounded-3xl bg-[#465697]'>
                    <a href='#Footer'> Contact Me </a>
                </button>
            </div>

            <div>
                <img className='w-3/5 bg-transparent' src={avatarImg} alt='' />
            </div>
        </div>
    )
}

export default Home