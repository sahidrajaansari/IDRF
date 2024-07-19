import React, { useEffect } from "react";
import logo from "/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav className="flex flex-col lg:flex-row items-center justify-between p-2 lg:px-8">
          <div className={`flex lg:flex-1 justify-between w-full p-5 ${isMenuOpen ? "border-b-2 border-gray-200 " : ""}`}>
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IDRF</span>
              <img src={logo} alt="logo" width={50} height={50} />
            </NavLink>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <RiCloseLine className="h-6 w-6" />
                ) : (
                  <RiMenu3Line className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`bg-white lg:flex lg:flex-row lg:gap-x-12 lg:items-center lg:justify-between transition-height duration-400 ease-in-out ${
              isMenuOpen ? "h-auto mt-2 w-full" : "h-0 lg:h-auto"
            } overflow-hidden lg:overflow-visible lg:translate-y-0 lg:px-0`}
          >
            <div
              className={`flex flex-col lg:flex-row lg:gap-x-12 ${
                isMenuOpen ? "block gap-y-1" : "hidden lg:flex"
              } lg:gap-x-6 lg:items-center lg:justify-between px-4 lg:px-0`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-indigo-600" : "text-gray-800"
                  } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-300 ease-in-out`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-indigo-600" : "text-gray-800"
                  } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-300 ease-in-out`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/our-team"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-indigo-600" : "text-gray-800"
                  } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-300 ease-in-out`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-indigo-600" : "text-gray-800"
                  } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-300 ease-in-out`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="/contact-us"
              className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-950 group flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center py-2 hover:text-indigo-600">
                Contact Us
                <MdArrowRightAlt className="ml-1 my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
