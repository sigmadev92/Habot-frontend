import React from "react";
import "../../styles/home4.css";
export default function Home4() {
  return (
    <div className="flex flex-wrap justify-around my-[100px]  bg-[#e8fbff] h-[254px] pt-[100px]">
      <h1
        id="home4-h1"
        className="font-semibold text-[30px] mt-[-10px]  text-center"
      >
        Let Suppliers{" "}
        <span className="border-b-[3px] border-[#eb7150]">Find You</span>{" "}
      </h1>
      <div className="">
        <button className="py-1 px-10 text-white bg-[#eb7150] font-medium rounded-[5px]">
          Get Verified
        </button>
      </div>
    </div>
  );
}
