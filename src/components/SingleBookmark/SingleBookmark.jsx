import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "../../context/BookmarksListProvider";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentBookmark, setCurrentBookmark] = useState();
  const { isLoading, bookmarks } = useBookmark();

  useEffect(() => {
    if (bookmarks && id) {
      const selectedBookmark = bookmarks.find((item) => item.id == id);
      setCurrentBookmark(selectedBookmark);
    }
  }, [id, bookmarks]);

  currentBookmark ? console.log(currentBookmark) : null;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full p-2 pt-0">
      <button
        className=" bg-blue w-[70px] mb-3 text-white rounded p-[5px]"
        onClick={handleBack}
      >
        {" "}
        &larr; back
      </button>
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
