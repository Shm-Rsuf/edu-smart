import Image from "next/image";
import DashboardNavbar from "./_components/Dashboard-Nav";

export const metadata = {
  title: "dashboard page",
  description: "Dashboard page",
};
const Dashboard = () => {
  return (
    <div className='mx-auto min-h-screen grid grid-cols-5 grid-rows-5 gap-4'>
      <div className='left-side row-span-5 bg-[#092A67]'>
        <div className='sticky top-0 left-0 col-span-4 h-20 flex justify-center items-center border-b-[1px]'>
          <span>Logo</span>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Universities</li>
          <li>Packages</li>
          <li>Agents</li>
          <li>Students</li>
          <li>Settings</li>
          <li>Contact us</li>
        </ul>
      </div>
      <DashboardNavbar />
      <div className='my-5 row-span-2 col-span-2'>
        <h4 className='text-2xl font-bold text-[#092a67]'>
          Add New Universities
        </h4>
        <p className='text-[#092a67]'>
          Note: Star (*) marked fields are required to fill.
        </p>
        <div className="grid grid-cols-4">
          <div className="bg-red-300 grid-cols-1">jsdosfjoi</div>
          <div className="bg-yellow-300 col-span-3"> sajioemio qewf</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
