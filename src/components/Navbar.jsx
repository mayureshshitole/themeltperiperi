import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FBBF24] shadow-lg shadow-red-50 mx-auto md:max-w-4xl lg:max-w-5xl rounded-md border border-red-100">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center">
              {/* Your logo or brand */}
              <NavLink to="/" end>
                <span className="cursor-pointer text-gray-800 font-semibold text-xl hover:scale-125 hover:rotate-2 transition-all ease-in-out duration-300">
                  The Melt
                </span>
              </NavLink>
            </div>

            {/* Navigation links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  end
                  className="text-gray-800 hover:bg-red-700 hover:gray-900 hover:scale-125 transition-all ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/menu"
                  className="text-gray-800 hover:bg-red-700 hover:gray-900 hover:scale-125 transition-all ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-800 hover:bg-red-700 hover:gray-900 hover:scale-125 transition-all ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <div className=" flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:bg-red-700 hover:gray-900 focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              end
              className="text-gray-800 hover:bg-red-700 hover:gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              className="text-gray-800 hover:bg-red-700 hover:gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-800 hover:bg-red-700 hover:gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
