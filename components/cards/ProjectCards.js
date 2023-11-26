import Image from 'next/image';
import React from 'react';

function ProjectCards({ name, img }) {
  return (
    <div className="max-sm:w-[300px] rounded-2xl gap-2 w-72 flex items-start p-4 bg-white dark:bg-gray-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="mr-1">
        <Image
          className="rounded-xl"
          src={img}
          width={100}
          height={100}
          alt="project logo"
        />
      </div>
      <div className="pt-3 text-lg font-semibold text-black dark:text-white">
        {name}
      </div>
    </div>
  );
}

export default ProjectCards;
