import Sidebar from "../shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../shared/Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow flex flex-col w-full lg:w-[calc(100vw-280px)] lg:ml-[280px]">
        {/* header */}
        <Topbar />
        <div className="p-2 lg:p-5 bg-gray-100 flex-grow min-h-[calc(100vh-80px)] mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
