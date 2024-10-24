import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Home2() {
  const cities = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];
  return (
    <div className="flex flex-wrap justify-between my-[20px] w-[80%] mx-auto ">
      <div id="text" className="max-w-[50%]">
        <h1 className="font-bold text-[25px]">
          Ready to dive into <span className="text-blue-950">HABOT?</span>
        </h1>
        <p className="text-[10px] my-4 w-[70%]">
          Signing up with HABOT opens the door to a world of new oppurtunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded indiviuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>

        <button className="text-white bg-green-600 py-1 px-3">
          Sign up Today! <FaArrowRightLong className="text-white inline ml-3" />
        </button>
      </div>
      <div className="max-w-[50%] grid grid-cols-2 gap-2">
        {cities.map((city, index) => {
          return (
            <button
              className="border-yellow-300 border-[2px] p-1 px-5 rounded-md text-[10px]"
              key={index}
            >
              {city}
            </button>
          );
        })}
      </div>
    </div>
  );
}
