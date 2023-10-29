import { Toaster } from "react-hot-toast";
import "../src/App.css";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

function App() {
  return (
    <div className="app font-Roboto">
      <Toaster/>
      <Header />
    </div>
  );
}

export default App;
