import React, { useState } from "react";
import "../styles/navbar.css";
import habotImg from "../images/habot-logo.jpg";
export default function Navbar() {
  const [hidelist, setHIdeList] = useState(true);
  return (
    <div
      className=" flex justify-between h-[60px] py-1 px-5 border-2 border-b-black"
      id="navbar"
    >
      <div id="main-image" className="">
        <img
          src={habotImg}
          alt="The main logo"
          className="h-[50px]  cursor-pointer absolute"
          onClick={() => window.open("https://www.habotconnect.com/")}
        />
      </div>
      <div id="lists" className="flex-none text-[12px]">
        {!hidelist && (
          <ul className="md:flex gap-x-3 mt-2 md:visible bg-white border-2 border-black rounded-md absolute right-0 top-[30px] p-2">
            <li className="py-2">Find Suppliers</li>
            <li className="py-2">Find Service tags</li>
            <li className="border-[2px] py-2 px-3 border-green-400 rounded-[10px] font-bold text-green-400 cursor-pointer hover:bg-black">
              Login/Signup
            </li>
          </ul>
        )}
      </div>
      <button
        className="md:hidden visible font-bold hover:text-green-900"
        onClick={() => setHIdeList((prev) => !prev)}
      >
        {hidelist ? "Menu" : "Close"}
      </button>
    </div>
  );
}
