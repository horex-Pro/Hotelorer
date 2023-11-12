import { Toaster } from "react-hot-toast";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HotelsLayout from "./components/HotelsLayout/HotelsLayout";
import Hotels from "./components/Hotels/Hotels";


function App() {
  return (
    <div className="app font-Roboto">
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsLayout />}>
          <Route index element={<Hotels/>}/>
          <Route path=":id" element={<div>single hotel</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
