import { Navbar } from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import TopNavbar from "../shared/Navbar/TopNavbar";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-2 ">
        <Navbar />
      </div>
      <div className="w-full mx-auto col-span-10 flex-grow pr-6 max-h-screen overflow-hidden">
        <div className="">
          <TopNavbar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
