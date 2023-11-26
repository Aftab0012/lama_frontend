'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import '../../../styles/customStyles.css';
import { logout } from '@/utils/logout';
import { useRouter } from 'next/navigation';

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col h-full gap-6 pt-16 pb-10 overflow-y-auto">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.label}>
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? 'bg-[#7e22ce] dark:bg-gradient rounded-full text-light-900'
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
              <p className={`${isActive ? 'base-bold' : 'base-medium'} `}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  const isLoggedIn = localStorage?.getItem('username');
  const router = useRouter();

  const handleLogout = () => {
    console.log('logout in progress.....');
    logout();
    router.push('/sign-in');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          height={36}
          width={36}
          alt="DevOverflow"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="border-none background-light900_dark200"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/lama.png"
            className="mr-1 Brand-logo"
            height={30}
            width={30}
            alt="DevOverflow"
          />
          <p className="font-sans text-[26px] h1-bold text-blue-700 dark:text-yellow-400">
            LAMA
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          {isLoggedIn ? (
            <div className="pb-3">
              <SheetClose asChild>
                <Button
                  className="small-medium btn-secondary
                    min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                  onClick={handleLogout}
                >
                  <span className="primary-text-gradient">Logout</span>
                </Button>
              </SheetClose>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button
                    className="small-medium btn-secondary
            min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button
                    className="small-medium light-border-2 btn-tertiary
            text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
