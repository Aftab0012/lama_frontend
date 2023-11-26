'use client';

import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import MobileNav from './MobileNav';
import Image from 'next/image';
import '../../../styles/customStyles.css';
import { Button } from '@/components/ui/button';
import { logout } from '@/utils/logout';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const isLoggedIn = localStorage?.getItem('username');

  const handleLogout = () => {
    console.log('logout in progress.....');
    logout();
    router.push('/sign-in');
  };

  return (
    <nav className="fixed z-50 w-full gap-5 p-6 flex-between background-light900_dark200 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="gap-1 flex-center">
        <Image
          className="Brand-logo max-md:hidden"
          src="/assets/images/lama.png"
          height={40}
          width={40}
          alt="DevOverflow"
        />
        <p className="font-sans text-[26px] h1-bold text-blue-700 dark:text-yellow-400">
          LAMA
        </p>
      </Link>
      <div className="gap-5 flex-between">
        <div>
          <Theme />
        </div>

        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="small-medium pr-3 dark:primary-gradient btn-secondary
                  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none max-sm:hidden"
            >
              <span className="text-black dark:text-white h3-bold">Logout</span>
            </button>
          ) : (
            <span className="gap-4 max-sm:hidden flex-center">
              <Link href="/sign-in">
                <Button
                  className="small-medium btn-secondary
                  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                >
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>

              <Link href="/sign-up">
                <button
                  className="small-medium light-border-2 btn-tertiary
                  text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                >
                  Sign Up
                </button>
              </Link>
            </span>
          )}
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
