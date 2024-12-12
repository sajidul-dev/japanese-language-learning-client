import { useState } from "react";
import {
  FaChevronCircleLeft,
  FaFileWord,
  FaPowerOff,
  FaRegUser,
} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdAssignmentAdd, MdDashboard, MdPlayLesson } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { TbUsersGroup } from "react-icons/tb";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

const Topbar = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    state: false,
    value: "",
  });

  const navigate = useNavigate();

  const navs = [
    {
      id: 1,
      title: "Users",
      icon: <TbUsersGroup />,
      link: "/dashboard/users",
    },
    {
      id: 2,
      title: "Lessons",
      icon: <GiNotebook />,
      link: "/dashboard/lessons",
    },
    {
      id: 3,
      title: "Tutorials",
      icon: <MdPlayLesson />,
      link: "/dashboard/tutorials",
    },
    {
      id: 4,
      title: "Vocabularies",
      icon: <FaFileWord />,
      link: "/dashboard/vocabularies",
    },
  ];
  return (
    <div className="w-full lg:w-[calc(100vw-280px)] h-20 bg-[#f4f7fa] fixed z-[100] backdrop-blur-xl flex justify-between items-center px-5">
      <div>
        <FaChevronCircleLeft className="text-2xl text-gray-600 hidden lg:block" />
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="block lg:hidden bg-teal-400 text-white px-2 py-1 rounded-md"
        >
          Menu
        </button>
      </div>
      <div className="flex items-center gap-6 relative">
        <MdDashboard className="w-8 h-8 text-gray-700 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
        <img
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
          src="/images/profileIcon.png"
          alt=""
          onClick={() => setOpenDropDown((prev) => !prev)}
        />
        {/* dropdown */}
        {openDropDown && (
          <div
            style={{
              boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
            }}
            className="w-[350px] md:w-[400px] h-fit bg-white absolute top-12 right-0 rounded-md"
          >
            {/* 1st section */}
            <div className="border-b-2 border-gray-300 p-3">
              <p className="text-xl">Profile</p>
            </div>
            {/* 2nd section */}
            <div className="border-b-2 border-gray-300 p-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    src="/images/profileIcon.png"
                    alt=""
                  />
                  <div>
                    <p className="">Md Sajidul Alam</p>
                    <p className="text-sm text-gray-600">
                      sajidulalam@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd section */}
            <div className="border-b-2 border-gray-300 px-8 py-5 text-gray-700">
              <div className="flex flex-col gap-y-5 text-lg">
                <div
                  onClick={() => navigate("/dashboard/profile/update-profile")}
                  className="flex items-center gap-4"
                >
                  <FaRegUser />
                  <p>Edit Profile</p>
                </div>
                <div
                  onClick={() => {
                    navigate("/dashboard/joining");
                  }}
                  className="flex items-center gap-4"
                >
                  <MdAssignmentAdd />
                  <p>Add Account</p>
                </div>
                <div
                  onClick={() => {
                    navigate("/login");
                    Cookies.remove("user");
                    Cookies.remove("token");
                    Cookies.remove("id");
                    Cookies.remove("username");
                    Cookies.remove("role");
                    Cookies.remove("have_purchase_wallet");
                  }}
                  className="flex items-center gap-4"
                >
                  <FaPowerOff />
                  <p>Log out</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MobileSidebar */}
      {isSidebarOpen && (
        <MobileSidebar
          navs={navs}
          setIsSidebarOpen={setIsSidebarOpen}
          isSubMenuOpen={isSubMenuOpen}
          setIsSubMenuOpen={setIsSubMenuOpen}
        />
      )}
    </div>
  );
};

export default Topbar;
