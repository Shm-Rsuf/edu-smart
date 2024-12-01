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
    <ul className="mt-4 text-white space-y-4">
      {/* Dashboard Link */}
      <Link
        href="/dashboard"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaPix className="text-lg" /> 
        <span className="text-sm font-medium">Dashboard</span>
      </Link>

      {/* Universities Link */}
      <Link
        href="/university"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaUniversity className="text-lg" /> 
        <span className="text-sm font-medium">Universities</span>
      </Link>

      {/* Packages Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <TiMessages className="text-lg" /> 
        <span className="text-sm font-medium">Packages</span>
      </Link>

      {/* Agents Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaUserGroup className="text-lg" /> 
        <span className="text-sm font-medium">Agents</span>
      </Link>

      {/* Students Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaBuildingUser className="text-lg" /> 
        <span className="text-sm font-medium">Students</span>
      </Link>

      {/* Settings Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <IoSettingsOutline className="text-lg" /> 
        <span className="text-sm font-medium">Settings</span>
      </Link>

      {/* Contact Us Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaHeadphonesSimple className="text-lg" /> 
        <span className="text-sm font-medium">Contact Us</span>
      </Link>
    </ul>
  );
};

export default DashboardSidebar;
