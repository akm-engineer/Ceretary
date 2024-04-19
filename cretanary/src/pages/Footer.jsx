import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { text: "Navigation", url: "/navigation" },
    { text: "About Cretanary", url: "/about" },
    { text: "Contact Us", url: "/contact" },
    { text: "Refund", url: "/refund" },
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
    { text: "© Createnary 2024", url: "/copyright" },
  ];

  return (
    <div className="bg-[#4A508E] p-8 flex flex-col md:flex-row justify-between">
      <div className="text-white w-1/3 flex justify-center items-center">
        <h2 className="text-2xl font-footer">Cretanary</h2>
      </div>

      <div className="text-white w-1/3">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} className="text-xl py-2 font-semibold">
              <NavLink to={link.url}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-white w-1/3">
        <h2 className="text-lg font-semibold flex items-center">Contacts</h2>
        <div className="flex items-center gap-3 p-2 text-center">
          <FaMapMarkerAlt size={16} />
          <p>Delhi, India</p>
        </div>
        <div className="flex items-center gap-3 p-2 text-center">
          <FaPhone />
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
