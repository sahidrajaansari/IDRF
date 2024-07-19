import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 bg-gray-500 text-white md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="my-6 text-white">
          To provide a supportive platform and knowledge hub to enhance the
          skills and to help society.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/team" className="mr-4 hover:underline md:mr-6">
              Meet our team
            </Link>
          </li>
          <li>
            <Link to="/services" className="mr-4 hover:underline md:mr-6">
              Services
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-200 sm:text-center">
          © 2024{" "}
          <Link to="#" className="hover:underline">
            IRDF™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
