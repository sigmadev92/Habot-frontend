import React from "react";
import "../../styles/home5.css";

import Home5Box from "../../mixedcomps/Home5Box";

export default function Home5() {
  return (
    <div className="max-h-[809px] ">
      <h1 className="text-center text-black home5-h1">How it works?</h1>
      <div className="w-[90%] mx-auto  flex justify-center mt-[17px] pt-[24px]">
        <p className="max-w-[839px] text-center home5-p ">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="w-[80%] mx-auto mt-[45px] h-[508px] border-[1.5px] grid grid-cols-3 grid-rows-2">
        <Home5Box box="1" text="Select Your Role Your Role and Sign Up" />
        <Home5Box box="2" text="Buyers Post Their Requirements" />
        <Home5Box
          box="3"
          text="Review, Select and Contact the Best Suppliers"
        />
        <Home5Box
          box="4"
          text="Suppliers Complete your profile and get notified for oppurtunities"
        />
        <Home5Box
          box="5"
          text="Contact To Buyers and Share your Quote for the service"
        />
        <Home5Box
          box="6"
          text="Both the Parties can Connect and M
              ake Business Leave a Feedback"
        />
      </div>
    </div>
  );
}
