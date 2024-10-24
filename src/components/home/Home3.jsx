import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
export default function Home3() {
  const [tab1, setTab1] = useState("1");
  return (
    <div className="flex flex-wrap justify-around p-[30px] px-[50px] bg-blue-950 my-20 w-[80%] mx-auto rounded-[6px]">
      <div id="yt-link" className="w-[300px] h-[170px] rounded-sm bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-[50px] mt-[60px] mx-auto cursor-pointer"
        >
          <path
            className="hover:fill-black"
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=IZLp-TZyDkQ")
            }
            fill="#ff0000"
            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
          />
        </svg>
      </div>
      <div id="buysell" className="p-2  w-[300px] h-[170px]">
        <div
          id="tab"
          className=" flex justify-center mb-[20px]  gap-x-3 font-bold text-white"
        >
          <h1
            className={`${
              tab1 === "1"
                ? "text-orange-500 border-orange-500"
                : " border-b-transparent"
            } px-10 border-b-2 cursor-pointer `}
            onClick={() => setTab1("1")}
          >
            Buyer
          </h1>
          <h1
            className={`${
              tab1 === "2"
                ? "text-orange-500 border-orange-500"
                : " border-b-transparent"
            } px-10 border-b-2 cursor-pointer `}
            onClick={() => setTab1("2")}
          >
            Supplier
          </h1>
        </div>
        {tab1 === "1" && (
          <div className="text-white text-[13px]">
            <div className="flex">
              <IoCheckmarkSharp className="flex-shrink-0 `inline mr-2 bg-green-500 rounded-full mt-1" />
              <h1>Post your requirements.</h1>
            </div>

            <div className="flex">
              <IoCheckmarkSharp className=" flex-shrink-0 inline mr-2 bg-green-500 rounded-full mt-1" />
              <h1>Sit back for multiple suppliers to contact you.</h1>
            </div>

            <div className="flex ">
              <IoCheckmarkSharp className="flex-shrink-0 mr-2 bg-green-500 rounded-full mt-1" />
              <div className="">
                Choose among the suppliers based on the ratings and reviews.
              </div>
            </div>
          </div>
        )}
        {tab1 === "2" && (
          <div className="text-white text-[13px]">
            <div className="flex">
              <IoCheckmarkSharp className="flex-shrink-0 `inline mr-2 bg-green-500 rounded-full mt-1" />
              <h1>Explore matching Oppurtunities</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
