import "./App.css";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
