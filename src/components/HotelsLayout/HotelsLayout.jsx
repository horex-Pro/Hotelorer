import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function HotelsLayout() {
  return (
    <div>
      <Header />
      <h2 className=" text-[40px] font-medium p-5">
        Your<span className="text-blue"> Suitable </span>locations:
      </h2>
      <div className="layout p-[20px] flex flex-wrap">
        <div className="hotels-container w-1/2">
          <Outlet />
        </div>
        <div className="map w-1/2 h-[800px] bg-gray-600"></div>
      </div>
    </div>
  );
}

export default HotelsLayout;
