import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaSearch,
  FaCartPlus,
  FaInfoCircle,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const GlassContainer = ({ children }) => (
  <div className="bg-gray-300 bg-opacity-50 backdrop-blur-lg p-6 rounded-full flex items-center w-full justify-center">
    {children}
  </div>
);

const Navbar = () => {
  return (
    <div className="p-6 absolute">
      <GlassContainer>
        <ul className="flex items-center">
          <li className="flex px-6">
            <h1 className="font-semibold text-2xl">Cretanary</h1>
          </li>
          <li className="px-6">
            <div className="flex items-center justify-center gap-2">
              <FaSearch size={20} className="" />
              <input
                placeholder="Search Creators "
                className="rounded-full p-2 w-64 border-none focus:outline-none "
              />
            </div>
          </li>
          <NavItem icon={<FaCartPlus size={16} />} text="Cart" />
          <NavItem icon={<FaInfoCircle size={16} />} text="About" />
          <NavItem icon={<FaPhone size={16} />} text="Contact" />
          <NavItem icon={<FaUser size={16} />} text="Login" />
        </ul>
      </GlassContainer>
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <li className="px-6">
    <div className="flex   items-center gap-2 text-xl justify-center font-medium">
      {icon}
      {text}
    </div>
  </li>
);

export default Navbar;
