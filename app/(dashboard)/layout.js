"use client";

import DashboardSidebar from "@/components/Sidebar";
import DashboardSidebarIcon from "@/components/SidebarIcon";
import Link from "next/link";
import { useState } from "react";
import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const DashboardLayout = ({ children }) => {
  const [isToggleSidebar, setToggleSidebar] = useState(false);

  const toggleSidebar = () => {
    setToggleSidebar(!isToggleSidebar);
    console.log("Sidebar toggled");
  };

  return (
    <div className='mx-auto min-h-screen flex'>
      <div
        className={`left-side col-span-1 bg-[#092A67] min-h-screen transition-all duration-300 ${
          isToggleSidebar ? "w-[70px]" : "w-[216px]"
        }`}
      >
        <div className='sticky top-0 left-0 bg-[#092A67] h-20 flex justify-center items-center border-b-[1px] border-gray-200 z-10'>
          {!isToggleSidebar ? (
            <Link href='/' className='text-white font-bold text-lg'>
              <span className='text-lime-400'>Edu</span>Smart
            </Link>
          ) : (
            <Link href='/' className='text-lime-400 font-bold'>
              Edu
            </Link>
          )}
        </div>
        {!isToggleSidebar ? <DashboardSidebar /> : <DashboardSidebarIcon />}
      </div>

      {/* main content */}
      <div className='col-span-6 transition-all duration-300'>
        <header className='bg-white shadow-md sticky top-0 left-0 col-span-6 z-10 h-20'>
          <nav className='container mx-auto px-4 flex items-center justify-between h-20'>
            <div className='text-xl font-bold text-[#092a67] cursor-pointer flex justify-center items-center gap-5'>
              <button onClick={toggleSidebar}>
                <RiBarChartHorizontalLine />
              </button>

              <button className='text-[#092a67] bg-lime-400 px-4 py-2 rounded hover:bg-lime-500 font-bold duration-300'>
                <Link href='#'>Visit website</Link>
              </button>
            </div>

            <div className='flex justify-center items-center gap-3'>
              <button>
                <FaEnvelope />
              </button>
              <button>
                <FaBell />
              </button>
              <div className='w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 cursor-pointer duration-300'>
                <FaUser />
              </div>
              <li className='text-[#092a67] flex items-center'>
                <Link href='#' className='flex items-center'>
                  <span>Adam Smith</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </li>
            </div>
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
