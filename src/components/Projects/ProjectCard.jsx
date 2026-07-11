import React, { useState } from 'react';

const ProjectCard = ({ title, main, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      
      {/* Small preview image */}
      <img
        className="p-4 h-40 md:h-48 object-cover rounded-xl"
        src={image}
        alt={title}
      />

      {/* Project title */}
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-2">
        {title}
      </h3>

      {/* Project description */}
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {main}
      </p>

      {/* Centered View Project button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          View Project
        </button>
      </div>

      {/* Lightbox overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={image}
            alt={title}
            className="max-h-[90%] max-w-[90%] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
