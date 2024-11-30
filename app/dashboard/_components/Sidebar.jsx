import { FaPix } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaUserGroup } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
const DashboardSidebar = () => {
  return (
    <ul className='mt-4 text-white'>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <FaPix /> <span>Dashboard</span>
      </li>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <FaUniversity /> <span>Universities</span>
      </li>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <TiMessages /> <span>Packages</span>
      </li>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <FaUserGroup /> <span>Agents</span>
      </li>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <FaBuildingUser /> <span>Students</span>
      </li>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <IoSettingsOutline /> <span>Settings</span>
      </li>
      <li className='py-2 px-4 hover:text-[#092A67] hover:bg-lime-500 flex justify-start items-center gap-2 cursor-pointer duration-300'>
        <FaHeadphonesSimple /> <span>Contact Us</span>
      </li>
    </ul>
  );
};

export default DashboardSidebar;
