import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import "../../styles/home3.css";
import YoutubeIcon from "../../mixedcomps/YoutubeIcon";
export default function Home3() {
  const [tab1, setTab1] = useState("1");
  return (
    <div className="flex flex-wrap justify-between py-[100px] px-[72px] bg-[#072f57] my-20 w-[90%] mx-auto rounded-[6px] md:h-[600px]">
      <div id="yt-box">
        <YoutubeIcon />
      </div>
      <div id="buysell" className="p-2  w-[300px] h-[170px]">
        <div
          id="tab"
          className=" flex justify-center mb-[20px]  gap-x-3 font-bold text-white"
        >
          <h1
            className={`${
              tab1 === "1"
                ? "text-[#eb7150] border-[#eb7150]"
                : " border-b-transparent"
            } px-10 border-b-2 cursor-pointer text-[26px]`}
            onClick={() => setTab1("1")}
          >
            Buyer
          </h1>
          <h1
            className={`${
              tab1 === "2"
                ? "text-[#eb7150] border-[#eb7150]"
                : " border-b-transparent"
            } px-10 border-b-2 cursor-pointer text-[26px] `}
            onClick={() => setTab1("2")}
          >
            Supplier
          </h1>
        </div>
        {tab1 === "1" && (
          <div className="text-white text-[18.75px]">
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
