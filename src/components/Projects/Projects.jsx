import React from 'react'
import ProjectCard from './ProjectCard'
import img1 from '../../assets/design.jpg'
import img2 from '../../assets/design2.jpg'
import img3 from '../../assets/design3.jpg'
import img4 from '../../assets/design4.jpg'
import img5 from '../../assets/design5.jpg'
import img6 from '../../assets/design6.jpg'
import img7 from '../../assets/design7.jpg'
import img8 from '../../assets/design8.jpg'

const Projects = () => {
    return (
        <div id='Projects' className='p-10 md:p-24 text-white'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='py-12 px-8 flex flex-wrap gap-5'>
                <ProjectCard
                    title="Stunning Facade with Modern Appeal"
                    main="Cars parked, elegance shines through design"
                    image ={img1}
                />
                 <ProjectCard
                    title="Functional Design Meets Style"
                    main="Thoughtful layouts, modern finishes, seamless flow."
                    image={img3}

                />
                 <ProjectCard
                    title="Interiors That Inspire Comfort"
                    main="Open spaces, bright lights, warm atmosphere."
                     image={img4}
                />
                 <ProjectCard
                    title="Contemporary Architecture in Focus"
                    main="Bold lines, precise angles, welcoming presence."
                     image={img2}
                />
                 <ProjectCard
                    title="Modern Family Residence"
                    main="Elegant living with striking architecture and warm outdoor lighting."
                     image={img5}
                />
                 <ProjectCard
                    title="Minimalist Luxury Villa"
                    main="Clean design, open spaces, and seamless indoor-outdoor living."
                     image={img6}
                />
                 <ProjectCard
                    title="Premium Urban Apartments"
                    main="Sophisticated multi-level residences crafted for modern city life."
                     image={img7}
                />
                  <ProjectCa
                    title="Refined Interior Design"
                    main="Bright, luxurious interiors designed for comfort and timeless style."
                     image={img8}
                />
               
            </div>
        </div>
    )
}

export default Projects