import { Toaster } from "react-hot-toast";
import "../src/App.css";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";
import NearbyLocations from "./components/NearbyLocations/NearbyLocations";

function App() {
  return (
    <div className="app font-Roboto">
      <Toaster/>
      <Header />
      <NearbyLocations/>
    </div>
  );
}

export default App;
