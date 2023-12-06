import React from "react";
import { useBookmarks } from "../../context/BookmarksListProvider";
import ReactCountryFlag from "react-country-flag";

function Bookmark() {
  const { isLoaading, bookmarks } = useBookmarks();

  if (bookmarks) console.log(bookmarks.map((item) => item.cityName));
  if (bookmarks)
    return (
      <div>
        <h2>Bookmark list:</h2>
        <div className="bookmark-list">
          {bookmarks.map((item) => {
            return (
              <div
                className="w-[95%] min-h-[150px] rounded-3xl flex gap-4 items-center p-5 mt-2 bg-slate-50"
                key={item.id}
              >
                <ReactCountryFlag svg countryCode={item.countryCode} />
                <p>{item.cityName}</p>
                <p>in {item.country}</p>
              </div>
            );
            
          })}
        </div>
      </div>
    );
}

export default Bookmark;
