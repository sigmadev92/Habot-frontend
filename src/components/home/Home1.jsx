import React from "react";
import "../../styles/home1.css";
// import imgscen4 from "../../images/scene-4.jpeg";
export default function Home1() {
  return (
    <div id="home1">
      <div className="bg-[rgba(33,33,65,0.81)] text-white pt-[100px] h-full">
        <h1 className="text-center md:text-[50px] text-[30px] font-bold">
          Are You a Supplier ?
        </h1>
        <h1 className="text-center text-[20px] md:text-[50px] font-thin ">
          Explore Matching Oppurtunities
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="md:flex flex-wrap justify-center gap-2 px-5 mt-[50px]"
        >
          <input
            type="text"
            placeholder="Search your required service here"
            className="placeholder:text-[12px] placeholder:font-normal md:py-2 px-3 rounded-md w-[350px] text-red-400 font-bold mb-2 md:mb-0 block mx-auto md:mx-0"
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="placeholder:text-[12px] placeholder:font-normal md:py-2 px-3 rounded-md  w-[350px] text-red-400 font-bold mb-2 md:mb-0 block mx-auto md:mx-0"
          />
          <button
            type="submit"
            className="bg-green-700 px-3 py-2 rounded-md text-[12px] hover:text-black block mx-auto md:mx-0"
          >
            {" "}
            Search
          </button>
        </form>
        <div className="flex flex-wrap justify-center gap-2 gap-y-1 mt-[50px]">
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
