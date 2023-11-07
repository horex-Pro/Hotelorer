import { Toaster } from "react-hot-toast";
import "../src/App.css";
import Header from "./components/Header/Header";
import NearbyLocations from "./components/NearbyLocations/NearbyLocations";
import Comments from "./components/Comments/Comments";
import JobOffer from "./components/JobOffer/JobOffer";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app font-Roboto">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<NearbyLocations />} />
      </Routes>
      <Comments />
      <JobOffer />
      <Footer />
    </div>
  );
}

export default App;
