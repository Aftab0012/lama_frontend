import Image from 'next/image';
import React from 'react';
import lightillustration from '../../public/assets/images/light-illustration.png';
import darkillustration from '../../public/assets/images/dark-illustration.png';

const NoResult = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <Image
        src={lightillustration}
        alt="No result found"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src={darkillustration}
        alt="No result found"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="mt-8 h2-bold text-dark200_light900">
        {title || 'No result found'}
      </h2>
      <p
        className="body-regular text-dark500_light700
        my-3.5 max-w-md text-center"
      >
        {description}
      </p>
    </div>
  );
};

export default NoResult;
