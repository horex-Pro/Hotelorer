import React, { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BookmarksContext = createContext();

function BookmarksProvider({ children }) {
  const { isLoading, data: bookmarks } = useFetch(
    "http://localhost:5000/bookmarks"
  );
  return (
    <BookmarksContext.Provider value={{ isLoading, bookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksProvider;

export function useBookmarks() {
  return useContext(BookmarksContext);
}
