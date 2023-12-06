import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useBookmarks } from "../../context/BookmarksListProvider";

function BookmarkLayout() {
  const { isLoading, bookmarks } = useBookmarks();
  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      <h2 className=" text-[40px] font-medium p-5">
        Your<span className="text-blue"> Bookmarks </span>locations: {}
      </h2>
      <div className="layout p-[20px] flex flex-wrap">
        <div className="bookmarks-container w-1/2">
          <Outlet />
        </div>
        {bookmarks ? <Map markerLocations={bookmarks} /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default BookmarkLayout;
