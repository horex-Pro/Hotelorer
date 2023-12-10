import { Toaster } from "react-hot-toast";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HotelsLayout from "./components/HotelsLayout/HotelsLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./context/HotelsProvider";
import SingleHotelData from "./components/singleHotelData/singleHotelData";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout"
import BookmarksProvider from "./context/BookmarksListProvider";
import Bookmark from "./components/Bookmark/Bookmark";
import SingleBookmark from "./components/SingleBookmark/SingleBookmark";

function App() {
  return (
    <BookmarksProvider>
      <HotelsProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotelData />} />
          </Route>
          <Route path="/bookmarks" element={<BookmarkLayout />}>
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookmark/>} />
            <Route path="add" element={<div>add new boomark</div>} />
          </Route>
        </Routes>
      </HotelsProvider>
    </BookmarksProvider>
  );
}

export default App;
