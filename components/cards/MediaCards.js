import Image from 'next/image';
import React from 'react';

function MediaCards({ img, action, description }) {
  return (
    <div className="flex w-64 gap-3 p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
      <Image src={img} width={50} height={50} alt={description} />
      <div className="flex flex-col gap-1 leading-5 text-black dark:text-white">
        <p>{action}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MediaCards;
