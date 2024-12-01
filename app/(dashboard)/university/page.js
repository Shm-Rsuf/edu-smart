import Footer from "@/components/Footer";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import DashboardNavbar from "../../../components/Dashboard-Nav";

export const metadata = {
  title: "dashboard page",
  description: "Dashboard page",
};
const University = () => {


  
  return (
    <div className="col-span-6">
      {/* <DashboardNavbar /> */}
      <div className="p-4">
    
        <Footer />
      </div>
    </div>
  );
};

export default University;
