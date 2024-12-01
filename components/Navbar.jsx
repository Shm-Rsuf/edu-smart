"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className='bg-white shadow-md sticky top-0 left-0'>
      <nav className='container mx-auto px-4 flex items-center justify-between h-20'>
        <div className='text-xl font-bold text-[#092a67] cursor-pointer'>
        <Link href='/' className='text-[#092a67] font-bold text-lg'>
              <span className='text-lime-400'>Edu</span>Smart
            </Link>
        </div>

        <ul className=' hidden md:flex justify-between items-center gap-5 font-bold'>
          <li className='nav-links text-[#092a67]'>
            <Link href='/'>Home</Link>
          </li>

          <li className='nav-links text-[#092a67] flex items-center font-bold'>
            <Link href='/packages' className='flex items-center'>
              <span>Packages</span>
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

          <li className='nav-links text-[#092a67] flex items-center font-bold'>
            <Link href='/universities' className='flex items-center'>
              <span>Universities</span>
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

          <li className='nav-links text-[#092a67] font-bold'>
            <Link href='/about'>About</Link>
          </li>
        </ul>

        <div className='text-[#092a67] bg-lime-400 px-4 py-2 rounded hover:bg-lime-500 font-bold duration-300'>
          <Link href='/login'>Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
