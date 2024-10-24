import React from "react";
import "../styles/navbar.css";
import habotImg from "../images/habot-logo.jpg";
export default function Navbar() {
  return (
    <div
      className=" flex flex-wrap justify-between py-1 px-5 border-2 border-b-black"
      id="navbar"
    >
      <div id="main-image" className="">
        <img
          src={habotImg}
          alt="The main logo"
          className="h-[50px]  cursor-pointer "
          onClick={() => window.open("https://www.habotconnect.com/")}
        />
      </div>
      <div
        id="lists"
        className="flex-none text-[12px] border-t-2 md:border-none"
      >
        <ul className="flex gap-x-3 mt-2 ">
          <li className="py-2">Find Suppliers</li>
          <li className="py-2">Find Service tags</li>
          <li className="border-[2px] py-2 px-3 border-green-400 rounded-[10px] font-bold text-green-400 cursor-pointer hover:bg-black">
            Login/Signup
          </li>
        </ul>
      </div>
    </div>
  );
}
