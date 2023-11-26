import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import { ToastContainer } from '../../components/shared/Toast';
import 'react-toastify/dist/ReactToastify.css';
import LeftSideBar from '@/components/shared/LeftSideBar';

const Layout = ({ children }) => {
  return (
    <main className="relative background-light850_dark100">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex flex-col flex-1 w-full min-h-screen px-10 pb-6 pt-36 max-md:pb-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Layout;
