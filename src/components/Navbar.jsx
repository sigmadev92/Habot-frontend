import React from "react";
import "../styles/navbar.css";
import habotImg from "../images/habot-logo.jpg";
export default function Navbar() {
  return (
    <div
      className=" flex flex-wrap justify-between px-5 border-2 border-b-black min-h-[86px] pt-5"
      id="navbar"
    >
      <div id="main-image" className="">
        <img
          src={habotImg}
          alt="The main logo"
          className="h-[43px] cursor-pointer "
          onClick={() => window.open("https://www.habotconnect.com/")}
        />
      </div>
      <div id="lists" className=" text-[15.25px] ">
        <ul className="flex gap-x-3  ">
          <li
            className="py-2"
            onClick={() => alert("FUNCTIONALITY NOT MADE YET")}
          >
            Find Suppliers
          </li>
          <li className="py-2">Find Service tags</li>
          <li className="border-[1px] py-2 px-5 border-[#00732F] rounded-[5px] font-[700] text-[#00732F] cursor-pointer hover:bg-blue-300">
            Login/Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
}
