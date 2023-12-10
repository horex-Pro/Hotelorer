import React from "react";
import { useBookmarks } from "../../context/BookmarksListProvider";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

function Bookmark() {
  const { isLoaading, bookmarks } = useBookmarks();

  if (bookmarks)
    return (
      <div>
        <h2>Bookmark list:</h2>
        <div className="bookmark-list">
          {bookmarks.map((item) => {
            return (
              <Link
                to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
                key={item.id}
              >
                <div className="w-[95%] min-h-[150px] rounded-3xl flex gap-4 items-center p-5 mt-2 bg-slate-50">
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  <p>{item.cityName}</p>
                  <p>in {item.country}</p>
                </div>
              </Link>
            );
            
          })}
        </div>
      </div>
    );
}

export default Bookmark;
