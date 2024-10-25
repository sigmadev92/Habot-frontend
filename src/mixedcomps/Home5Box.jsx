import React from "react";
import AddUser from "../mixedcomps/AddUser";
import PaperSearch from "./PaperSearch";
import PaperTick from "./PaperTick";
import ProfilePen from "./ProfilePen";
import PadPencil from "./PadPencil";
import HandShake from "./HandShake";
export default function Home5Box(props) {
  return (
    <div
      className={`w-full ${
        Number(props.box) % 2 === 1 && "bg-[#e8fbff]"
      }  h-full`}
    >
      <div className="flex justify-center pt-[40px]">
        {props.box === "1" && <AddUser />}
        {props.box === "2" && <PaperTick />}
        {props.box === "3" && <PaperSearch />}
        {props.box === "4" && <ProfilePen />}
        {props.box === "5" && <PadPencil />}
        {props.box === "6" && <HandShake />}
      </div>
      <div className="flex justify-center p-4">
        <h1 className="text-center w-[206px] font-[500]">{props.text}</h1>
      </div>
    </div>
  );
}
