import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

function HotelsLayout() {
  return (
    <div>
      <Header />
      <h2 className=" text-[40px] font-medium p-5">
        Your<span className="text-blue"> Suitable </span>locations: {}
      </h2>
      <div className="layout p-[20px] flex flex-wrap">
        <div className="hotels-container w-1/2">
          <Outlet />
        </div>
        <Map/>
      </div>
      <Footer/>
    </div>
  );
}

export default HotelsLayout;
