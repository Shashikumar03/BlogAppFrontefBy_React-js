import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Base from "./components/Base";
import Services from "./pages/Services";
//import CustomNavbar from "./components/CustomNavbar";
//import Base from "./components/Base";
//import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <>
      <Router>
        <Base />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
