import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBookmarks } from "../../context/BookmarksListProvider";

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

  return (
    <div className="w-full p-2 pt-0">
      {currentBookmark && (
        <h1 className="font-bold text-xl">{currentBookmark.name}</h1>
      )}
    </div>
  );
}

export default SingleBookmark;
