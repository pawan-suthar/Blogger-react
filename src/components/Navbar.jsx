import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between items-center font-bold w-full lg:w-[85%] mx-auto mt-5">
        <div className="flex flex-col lg:flex-row">
          <h2 className="font-bold text-2xl p-3 lg:p-5 text-center">Blogger</h2>
          <ul className="hidden lg:flex mx-10 text-lg text-center text-gray-900">
            <li className="p-3 lg:p-5 hover:text-gray-500 cursor-pointer">
              Home
            </li>
            <li className="p-3 lg:p-5 hover:text-gray-500 cursor-pointer flex">
              Blogs <BsChevronDown size="14" className="mt-2 ml-2" />
            </li>
            <li className="p-3 lg:p-5 hover:text-gray-500 cursor-pointer flex">
              Categories <BsChevronDown size="14" className="mt-2 ml-2" />
            </li>
            <li className="p-3 lg:p-5 hover:text-gray-500 cursor-pointer">
              About
            </li>
          </ul>
        </div>
        <div className="hidden lg:block font-bold text-lg">
          <button>Login</button>
          <button className="bg-black ml-5 text-white py-[12px] font-medium px-5 rounded-full">
            Signup
          </button>
        </div>
        {/* Toggled Nav */}
        <ul
          className={`${
            toggle ? "translate-y-[-1200px]" : "translate-y-0"
          } flex w-screen h-screen backdrop-blur-lg fixed flex-col justify-items-center justify-center mx-10 text-lg text-center text-black lg:hidden transition-transform`}
        >
          <a
            href="#"
            className="py-3 lg:p-5 hover:text-gray-500 text-center cursor-pointer"
          >
            Home
          </a>
          <a
            href="#"
            className="py-3 lg:p-5 hover:text-gray-500 text-center cursor-pointer"
          >
            Blogs
          </a>
          <a
            href="#"
            className="py-3 lg:p-5 hover:text-gray-500 text-center cursor-pointer"
          >
            Categories
          </a>
          <a
            href="#"
            className="py-3 lg:p-5 hover:text-gray-500 text-center cursor-pointer"
          >
            About
          </a>
          <a href="#">
            <button className="py-3">Login</button>
          </a>
          <a href="#">
            <button className="py-3">Signin</button>
          </a>
        </ul>
      </nav>
      <HiMenu
        fontSize="28"
        className={`${
          toggle ? "text-black" : "text-black"
        } absolute top-9   right-5 lg:hidden`}
        onClick={() => setToggle(!toggle)}
      />
    </>
  );
};

export default Navbar;
