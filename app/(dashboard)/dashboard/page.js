
import AddUniversityForm from "@/components/AddUniversityForm";
import Footer from "@/components/Footer";

import { FaBell, FaEnvelope, FaUniversity, FaUser } from "react-icons/fa";

export const metadata = {
  title: "dashboard page",
  description: "Dashboard page",
}


const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="p-4">
        <h4 className="text-2xl font-bold text-[#092a67] pt-2 flex items-center gap-2">
          <span> Add New Universities</span> <FaUniversity />
        </h4>
        <p className="text-[#092a67]">
          Note: Star (*) marked fields are required to fill.
        </p>
<AddUniversityForm/>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
