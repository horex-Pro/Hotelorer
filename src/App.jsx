import { Toaster } from "react-hot-toast";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HotelsLayout from "./components/HotelsLayout/HotelsLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./context/HotelsProvider";
import SingleHotelData from "./components/singleHotelData/singleHotelData";

function App() {
  return (
    <HotelsProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<SingleHotelData/>} />
        </Route>
      </Routes>
    </HotelsProvider>
  );
}

export default App;
