import Link from "next/link";
import { FaUniversity } from "react-icons/fa";
import {
  FaBuildingUser,
  FaHeadphonesSimple,
  FaPix,
  FaUserGroup,
} from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
const DashboardSidebar = () => {
  return (
    <ul className='mt-4 text-white'>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <FaPix /> <span>Dashboard</span>
      </Link>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <FaUniversity /> <span>Universities</span>
      </Link>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <TiMessages /> <span>Packages</span>
      </Link>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <FaUserGroup /> <span>Agents</span>
      </Link>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <FaBuildingUser /> <span>Students</span>
      </Link>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <IoSettingsOutline /> <span>Settings</span>
      </Link>
      <Link
        href='#'
        className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'
      >
        <FaHeadphonesSimple /> <span>Contact Us</span>
      </Link>
    </ul>
  );
};

export default DashboardSidebar;
