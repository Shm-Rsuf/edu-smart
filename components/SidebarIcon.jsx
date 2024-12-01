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

const DashboardSidebarIcon = () => {
  return (
    <ul className="mt-4 text-white space-y-4">
      {/* Dashboard Link */}
      <Link
        href="/dashboard"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaPix className="text-lg" />
      </Link>

      {/* Universities Link */}
      <Link
        href="/university"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaUniversity className="text-lg" />
      </Link>

      {/* Packages Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <TiMessages className="text-lg" />
      </Link>

      {/* Agents Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaUserGroup className="text-lg" />
      </Link>

      {/* Students Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaBuildingUser className="text-lg" />
      </Link>

      {/* Settings Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <IoSettingsOutline className="text-lg" />
      </Link>

      {/* Contact Us Link */}
      <Link
        href="#"
        className="py-3 px-5 rounded-lg hover:text-[#092A67] hover:bg-lime-500 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300"
      >
        <FaHeadphonesSimple className="text-lg" />
      </Link>
    </ul>
  );
};

export default DashboardSidebarIcon;
