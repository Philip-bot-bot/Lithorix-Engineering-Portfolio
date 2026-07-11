import React, { useRef, useEffect } from "react";
import CompanyVideo from "/src/assets/lithorix.mp4";
import { IoArrowForward } from "react-icons/io5";

const About = () => {

    const videoRef = useRef(null);


    useEffect(() => {

        const video = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }

            },
            {
                threshold: 0.5
            }
        );


        if (video) {
            observer.observe(video);
        }


        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };

    }, []);



    return (

        <div
            id="About"
            className="
            text-white 
            bg-black 
            bg-opacity-30
            shadow-xl
            rounded-lg
            mx-0 
            md:mx-20
            p-12
            overflow-hidden
            "
        >


            <h2 className="
                text-2xl 
                md:text-4xl 
                font-bold 
                mb-12
            ">
                About Lithorix
            </h2>



            <div 
            className="
            flex 
            flex-col 
            md:flex-row 
            items-center 
            justify-between
            gap-16
            "
            >


                {/* VIDEO LEFT SIDE */}

                <div className="flex justify-start">

                    <video
                        ref={videoRef}
                        src={CompanyVideo}
                        muted
                        loop
                        playsInline
                        className="
                        w-full
                        md:w-[600px]
                        h-[500px]
                        rounded-xl
                        object-contain
                        shadow-2xl
                        "
                    />

                </div>



                {/* CONTENT RIGHT SIDE */}

                <div 
                className="
                md:ml-auto
                max-w-xl
                "
                >

                    <div className="flex flex-col gap-6">



                        <ServiceItem
                            title="Architectural Design"
                            text="We develop functional and aesthetically refined designs tailored to client requirements, regulatory standards, and site conditions."
                        />


                        <ServiceItem
                            title="Structural Engineering"
                            text="Our structural solutions are designed for strength, durability, and compliance with approved codes, ensuring long-term safety and performance."
                        />



                        <ServiceItem
                            title="MEP Engineering"
                            text="We deliver efficient mechanical, electrical, and plumbing systems that optimize energy use, comfort, and operational reliability."
                        />



                        <ServiceItem
                            title="Construction & Project Delivery"
                            text="We manage projects from concept to completion, ensuring quality execution, timely delivery, and efficient coordination."
                        />



                        <ServiceItem
                            title="Smart Building Systems"
                            text="We integrate modern smart technologies including automation, energy management, security systems, and intelligent controls to enhance building performance and user experience."
                        />



                    </div>

                </div>


            </div>


        </div>

    );
};



const ServiceItem = ({title, text}) => {

    return (

        <div className="flex gap-4">

            <IoArrowForward 
                size={30} 
                className="mt-1 flex-shrink-0"
            />


            <div>

                <h1 className="
                text-xl 
                md:text-2xl 
                font-semibold
                ">
                    {title}
                </h1>


                <p className="
                text-sm 
                md:text-md 
                leading-tight
                text-gray-300
                ">
                    {text}
                </p>

            </div>


        </div>

    );

};


export default About;