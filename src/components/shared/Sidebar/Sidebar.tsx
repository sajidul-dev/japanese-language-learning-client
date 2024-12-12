import { useEffect, useState } from "react";
import { FaFileWord, FaPowerOff } from "react-icons/fa";
import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbUsersGroup } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { MdPlayLesson } from "react-icons/md";

const Sidebar = () => {
  // Sidebar Menu Data
  const menuItemsData = [
    {
      title: "Users",
      icon: <TbUsersGroup />,
      link: "/dashboard/users",
      active: false,
    },
    {
      title: "Lessons",
      icon: <GiNotebook />,
      link: "/dashboard/lessons",
      active: false,
    },
    {
      title: "Tutorials",
      icon: <MdPlayLesson />,
      link: "/dashboard/tutorials",
      active: false,
    },
    {
      title: "Vocabularies",
      icon: <FaFileWord />,
      link: "/dashboard/vocabularies",
      active: false,
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [menuItems, setMenuItems] = useState(menuItemsData);
  const [isShowMenuItem, setIsShowMenuItem] = useState(false);

  return (
    <div
      // style={{ boxShadow: "10px 10px 5px -10px rgba(0, 0, 0, 0.8)" }}
      className="sidebar hidden lg:flex min-w-[280px] h-full overflow-y-auto flex-col justify-between gap-12 rounded-l-xl bg-white fixed"
    >
      <div className="flex flex-col gap-[30px] px-[18px] py-6">
        <div className="">
          <Link className="flex justify-center items-center gap-x-2" to="">
            {/* <img
              src="/images/logo1.png"
              width={50}
              height={50}
              alt="logo"
              className="object-cover"
            /> */}
            <p className="text-2xl text-purple-600 font-bold">Juppu</p>
          </Link>
        </div>

        <div className="flex flex-col gap-[18px]">
          {/* Sidebar Menu */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-[10px] font-bold text-[#929292]">MENU</h4>
            {menuItems.map((menuItem) => (
              <div key={menuItem.title} className="flex flex-col">
                <Link
                  to={menuItem.link}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-md ${
                    menuItem.active
                      ? "bg-[#E3E3FD] font-bold text-purple-600"
                      : ""
                  } px-1.5 py-2.5`}
                >
                  <div className="flex gap-3">
                    {menuItem.icon}
                    <p className="leading-[18px]">{menuItem.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-16 border-t-2 border-gray-200 px-3 py-2">
        <div className="flex items-center gap-3 h-full">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/images/profileIcon.png"
            alt=""
          />
          <div className="h-full flex flex-col justify-center">
            <p className="text-gray-800 leading-none">Sajidul</p>
            <p className="text-sm text-gray-500">Super Admin</p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/sign-in");
            // Cookies.remove("user");
            Cookies.remove("token");
            // Cookies.remove("id");
            // Cookies.remove("username");
            // Cookies.remove("role");
            // Cookies.remove("have_purchase_wallet");
          }}
          className=""
        >
          <FaPowerOff className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
