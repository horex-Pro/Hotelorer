import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBookmarks } from "../../context/BookmarksListProvider";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const { id } = useParams();
  const [currentBookmark, setCurrentBookmark] = useState();
  const { isLoading, bookmarks } = useBookmarks();

  useEffect(() => {
    if (bookmarks && id) {
      const selectedBookmark = bookmarks.find((item) => item.id == id);
      setCurrentBookmark(selectedBookmark);
    }
  }, [id, bookmarks]);

  currentBookmark ? console.log(currentBookmark) : null;

  return (
    <div className="w-full p-2 pt-0">
      {currentBookmark ? (
        <div className="flex items-center flex-wrap">
          <p className=" text-[30px]">{currentBookmark.cityName} in &nbsp;</p>
          <span className=" text-[30px]">
            <ReactCountryFlag
              style={{
                width: "2em",
                height: "2em",
              }}
              svg
              countryCode={currentBookmark.countryCode}
            />
            {currentBookmark.country}
          </span>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default SingleBookmark;
