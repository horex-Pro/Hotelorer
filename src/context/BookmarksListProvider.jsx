import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BookmarksContext = createContext();

function BookmarksProvider({ children }) {
  const { isLoading, data: bookmarks } = useFetch(
    "http://localhost:5000/bookmarks"
  );

  const { bookmarksList, setBookmarksList } = useState([]);

  useEffect(() => {
    async function fetchBookmarksList() {
      try {
        const { data } = await axios.get(`http://localhost:5000/bookmarks`);

        setBookmarksList(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
  }, []);

  async function createBookmark(newBookmark) {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/bookmarks`,
        newBookmark
      );

      setBookmarksList((prevBookmark) => [...prevBookmark, data]);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <BookmarksContext.Provider value={{ isLoading, bookmarks, createBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksProvider;

export function useBookmarks() {
  return useContext(BookmarksContext);
}
