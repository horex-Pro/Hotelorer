import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import { useHotels } from "../../context/HotelsProvider";

function HotelsLayout() {
  const { isLoading, data } = useHotels();
  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      <Header />
      <h2 className=" text-[40px] font-medium p-5">
        Your<span className="text-blue"> Suitable </span>locations: {}
      </h2>
      <div className="layout p-[20px] flex  items-center flex-wrap max-lg:flex-col max-lg:p-2">
        <div className="hotels-container w-1/2 max-lg:w-full">
          <Outlet />
        </div>
        {data ? <Map markerLocations={data} /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default HotelsLayout;
