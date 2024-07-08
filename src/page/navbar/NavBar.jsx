import React from "react";
import logo from "/logo.svg";
import { RiMenu3Line } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink,Link } from "react-router-dom";
// import Link from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function NavBar() {
  return (
    <>
      <header>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IDRF</span>
              <img src={logo} alt="logo" width={50} height={50} />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <RiMenu3Line className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-indigo-600" : "text-gray-800"
                } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-400 ease-in-out`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-indigo-600" : "text-gray-800"
                } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-400 ease-in-out`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/our-team"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-indigo-600" : "text-gray-800"
                } text-sm font-semibold leading-6 hover:text-indigo-600 hover:font-bold transition-all duration-400 ease-in-out`
              }
            >
              Our Team
            </NavLink>


            <NavLink
              to="/our-Services"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-indigo-600" : "text-gray-800"
                } text-sm font-semibold hover:text-indigo-600 hover:font-bold transition-all duration-400 ease-in-out`
              }
            >
              <DropdownMenu>
                <DropdownMenuTrigger className=" outline-none">Services</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Service A</DropdownMenuItem>
                  <DropdownMenuItem>Service B</DropdownMenuItem>
                  <DropdownMenuItem>Service C</DropdownMenuItem>
                  <DropdownMenuItem>Service D</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavLink>

          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink to="/contact-us"
              className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-950 group flex items-center justify-center transition-all duration-400 ease-in-out">
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
