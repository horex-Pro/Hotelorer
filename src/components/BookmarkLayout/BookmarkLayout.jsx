import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useBookmark } from "../../context/BookmarksListProvider";
import Navbar from "../Navbar/Navbar";

function BookmarkLayout() {
  const { isLoading, bookmarks } = useBookmark();
  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      <Navbar />
      <h2 className=" text-[40px] font-medium p-5">
        Your<span className="text-blue"> Bookmarks </span>locations: {}
      </h2>
      <div className="layout p-[20px] w-full flex justify-between max-lg:p-1 items-center max-lg:flex-col">
        <div className="bookmarks-container w-1/2 max-lg:w-full">
          <Outlet />
        </div>
        {bookmarks ? <Map markerLocations={bookmarks} /> : "loading..."}
      </div>
      <Footer />
    </div>
  );
}

export default BookmarkLayout;
