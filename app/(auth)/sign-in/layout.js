import React from 'react';
import { ToastContainer } from '../../../components/shared/Toast';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/shared/navbar/Navbar';
import MobileNav from '@/components/shared/navbar/MobileNav';

const Layout = ({ children }) => {
  return (
    <main className="relative background-light850_dark100">
      <Navbar />
      <div className="flex">
        <section className="flex flex-col flex-1 min-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="w-full max-w-5xl mx-auto">{children}</div>
        </section>
      </div>
      <MobileNav />
      <ToastContainer />
    </main>
  );
};

export default Layout;
