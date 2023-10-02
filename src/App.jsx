import "./App.css";
import Footer from "./components/Footer";
// import Home from "./components/Home";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


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
