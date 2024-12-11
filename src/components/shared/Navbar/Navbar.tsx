import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { BiSolidReport } from "react-icons/bi";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="side-bar bg-[#474BAE] rounded-lg text-white shadow-lg w-52 lg:w-52 xl:w-52 ml-2 my-2 fixed flex justify-center content-between">
      <div className="h-full relative container mx-auto py-3 flex flex-col">
        <div className="flex justify-center items-center mt-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div className={` w-full flex-grow flex justify-center`}>
          <ul className="w-full flex flex-col justify-center gap-6 mx-2">
            <li>
              <NavLink
                to="/report"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <BiSolidReport style={{ fontSize: "18px" }} />
                <p>Report</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : " px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <FaUsers style={{ fontSize: "18px" }} />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <AiFillProduct style={{ fontSize: "18px" }} />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase-history"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <FaShoppingCart style={{ fontSize: "18px" }} />
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="relative">
          {isOpen && (
            <div className="flex flex-col items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Task1
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Task2
              </a>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
