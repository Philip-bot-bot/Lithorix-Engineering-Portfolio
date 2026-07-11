import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { RiNetflixFill } from '@remixicon/react';
import { FaAmazon } from 'react-icons/fa';
import { FaBuilding, FaHardHat, FaDraftingCompass } from "react-icons/fa";
import { MdConstruction, MdOutlineEngineering } from "react-icons/md";
import { GiCrane, GiCompass, GiConcreteBag } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsRulers } from "react-icons/bs";


const Experience = () => {

    return (


        <div id='Experience' className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
            <div className='flex flex-wrap items-center justify-around'>
                <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaBuilding color="#F5A623" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <MdConstruction color="#f54323" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaHardHat color="#23f5f2" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <GiCrane color="#F5A623" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaDraftingCompass color="#2382f5" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <GiCompass color="#23f5e4" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <BsRulers color="#23f551" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <HiOutlineOfficeBuilding color="#9023f5" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <GiConcreteBag color="#f5e423" size={50} />
                    </span>

                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <MdOutlineEngineering color="#f52e23" size={50} />
                    </span>


                </div>
                <div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <FaDraftingCompass color="#2382f5" size={50} />
                        <span className='text-white'>
                            <h2 className='leading-tight'>Architectural Design Team</h2>
                            <ul className='text-sm p-2'>
                                <li> - Creates functional, modern designs that meet client needs and regulations. </li>
                                <li> -Ensures aesthetics, safety, and environmental considerations in every project.  </li>
                                <li></li>
                            </ul>
                        </span>
                    </div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                         <FaBuilding color="#F5A623" size={50} />
                        <span className='text-white'>
                            <h2 className='leading-tight'>Structural Engineering Team</h2>
                            <ul className='text-sm p-2'>
                                <li> - Designs strong, durable structures for long-term stability and safety. </li>
                                <li> -Analyzes loads, materials, and methods to meet engineering standards.  </li>
                                <li></li>
                            </ul>
                        </span>
                    </div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                          <MdOutlineEngineering color="#f52e23" size={50} />
                        <span className='text-white'>
                            <h2 className='leading-tight'>MEP Engineering Team</h2>
                            <ul className='text-sm p-2'>
                                <li> - Develops efficient mechanical, electrical, and plumbing systems. </li>
                                <li> -Optimizes energy use, comfort, and system reliability.  </li>
                                <li></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience