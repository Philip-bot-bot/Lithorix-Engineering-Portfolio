import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Services = () => {
  return (
    <section
      id="Services"
      className="
        text-white
        bg-black/30
        shadow-xl
        rounded-lg
        mx-0
        md:mx-20
        mb-20
        p-8
        md:p-12
      "
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-12">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <ServiceItem
            title="Building Design for Permit Approval"
            text="We prepare complete building design packages for statutory approval, including:

            Architectural Design
            Structural Engineering Design
            Mechanical, Electrical & Plumbing (MEP) Engineering Design
            Our designs comply with applicable building regulations, engineering standards, and planning requirements while meeting each client’s functional and aesthetic needs."
          />

          <ServiceItem
            title="Construction"
            text="We undertake residential, commercial, and industrial construction projects, managing every stage from site preparation and foundation works to final finishing.
             Our project delivery emphasizes quality workmanship, cost efficiency, safety, and timely completion.
"
          />

          <ServiceItem
            title="Property Management"
            text="We provide comprehensive property maintenance services to preserve the functionality, safety, and value of buildings, including:

           Electrical maintenance
           Plumbing maintenance
          Civil works and general building repairs
          Preventive and corrective maintenance
          Facility support services."
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <ServiceItem
            title="Building Materials Supply"
            text="We supply quality building materials for construction projects, ensuring clients receive 
            reliable products that meet industry standards and project specifications."
          />

          <ServiceItem
            title="Property Sales & Rentals"
            text="We facilitate the sale, purchase, and rental of residential and commercial properties, 
            providing clients with dependable real estate solutions tailored to their investment and occupancy needs."
          />

         <ServiceItem
            title="Interior Design"
            text="We create functional and aesthetically appealing interior spaces that enhance comfort, 
            productivity, and overall user experience through thoughtful space planning, material selection, and modern design concepts."
          />
         <ServiceItem
            title="Smart Building Systems"
            text="We design and integrate intelligent building technologies, including:
            Building automation systems
            Smart lighting and energy management
            Security and access control systems
            CCTV surveillance
            Fire detection and alarm systems
            Smart home and commercial automation
            Intelligent building controls"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, text }) => {
  return (
    <div className="flex items-start gap-4">
      <IoArrowForward
        size={28}
        className="mt-1 flex-shrink-0 text-white"
      />

      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Services;