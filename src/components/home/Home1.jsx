import React from "react";
import "../../styles/home1.css";
// import imgscen4 from "../../images/scene-4.jpeg";
import mainImg from "../../images/home1-main.png";
import SuitCase from "../../mixedcomps/SuitCase";
import Location from "../../mixedcomps/Location";
export default function Home1() {
  return (
    <div id="home1-container">
      <img src={mainImg} alt="main" className="h-[600px] w-full" />
      <div id="home1-overlay">
        <h1 className="font-[700]">Are You a Supplier ?</h1>
        <h1 className="font-[400]">Explore Matching Oppurtunities.</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-wrap justify-center gap-2 px-5 mt-[50px] relative"
        >
          <div className="relative">
            <SuitCase className={"absolute my-2 mx-2"} />
            <input
              type="text"
              placeholder="Search your required service here"
              className="placeholder:text-[15.13px] placeholder:font-[300] placeholder:text-[#6b7280] rounded-md w-[350px] font-bold py-2 pl-[40px]"
            />
          </div>
          <div className="relative">
            <Location className={"absolute my-2 mx-2"} />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="placeholder:text-[15.13px] placeholder:font-[300] placeholder:text-[#6b7280] rounded-md w-[350px] font-bold py-2 pl-[40px]"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 px-3 py-2 rounded-md text-[12px] hover:text-black block mx-auto md:mx-0"
          >
            {" "}
            Search
          </button>
        </form>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-5 mt-[34px] ">
          <h1 className="font-bold">Are you a buyer?</h1>
          <h1
            className="underline cursor-pointer hover:text-green-500"
            onClick={() => "nothing"}
          >
            Click here if you are looking to post a requirements
          </h1>
        </div>
      </div>
    </div>
  );
}
