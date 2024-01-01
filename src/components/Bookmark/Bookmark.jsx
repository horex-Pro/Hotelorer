import React from "react";
import { useBookmarks } from "../../context/BookmarksListProvider";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

function Bookmark() {
  const { isLoading, bookmarks, deleteBookmark } = useBookmarks();

  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(id);
    deleteBookmark(id);
  };

  return (
    <div>
      <h2>Bookmark list:</h2>
      <div className="bookmark-list h-screen overflow-scroll">
        {bookmarks &&
          bookmarks.map((item) => (
            <Link
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
              key={item.id}
            >
              <div className="w-[95%] min-h-[150px] flex justify-between rounded-3xl gap-4 items-center p-5 mt-2 bg-slate-50">
                <div className="data flex w-3/4 items-center">
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  <p>{item.cityName}</p>
                  <p>in {item.country}</p>
                </div>
                <div
                  className="delete bg-red-600 p-3 rounded hover:bg-red-800"
                  onClick={(e) => handleClick(e, item.id)}
                >
                  <FaTrash className="text-white" />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Bookmark;
