import React from "react";
import { useBookmarks } from "../../context/BookmarksListProvider";

function Bookmark() {
  const { isLoaading, bookmarks } = useBookmarks();
  
  if(bookmarks) return <div>
    <h2>Bookmark list:</h2>
  </div>
}

export default Bookmark;
