import Link from "next/link";
import { FaBell, FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";

const DashboardNavbar = () => {
  const { authToken } = useAuth();

  console.log("Auth Token:", authToken);

  return (
    <header className="bg-white w-full shadow-md sticky top-0 left-0 z-10 h-20">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <button>
            <RiBarChartHorizontalLine />
          </button>
          <Link href="/login">
            <a className="text-[#092a67] bg-lime-400 px-4 py-2 rounded hover:bg-lime-500 font-bold duration-300">
              Visit Website
            </a>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button>
            <FaEnvelope />
          </button>
          <button>
            <FaBell />
          </button>
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 cursor-pointer duration-300">
            <FaUser />
          </div>
          <Link href="/universities">
            <a className="text-[#092a67] flex items-center gap-1">
              <span>Adam Smith</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
