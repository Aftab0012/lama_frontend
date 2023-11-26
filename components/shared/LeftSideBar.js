'use client';

import { sidebarLinks } from '@/constants';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar
      sticky left-0 top-0 flex h-screen flex-col justify-between
      overflow-y-auto border-r p-6 pt-36 shadow-light-300
      dark:shadow-none max-sm:hidden lg:w-[266px]"
    >
      <div className="flex flex-col flex-1 gap-6">
        <p className="pl-4 font-light max-lg:hidden text-dark300_light900">
          Podcast Upload Flow
        </p>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? 'bg-[#7e22ce] dark:bg-gradient rounded-xl text-light-900'
                  : 'bg-transparent text-dark300_light900'
              }  flex items-center justify-start gap-4 p-4`}
            >
              <div className="bg-[#211935] rounded-full p-2">
                <Image
                  src={item.imgURL}
                  height={20}
                  width={20}
                  alt={item.label}
                  className={``}
                />
              </div>
              <p
                className={`${
                  isActive ? 'base-bold' : 'base-medium'
                } max-lg:hidden line-clamp-1`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSideBar;
