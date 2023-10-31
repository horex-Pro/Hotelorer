import { Toaster } from "react-hot-toast";
import "../src/App.css";
import Header from "./components/Header/Header";
import NearbyLocations from "./components/NearbyLocations/NearbyLocations";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="app font-Roboto">
      <Toaster />
      <Header />
      <NearbyLocations />
      <Comments/>
    </div>
  );
}

export default App;
