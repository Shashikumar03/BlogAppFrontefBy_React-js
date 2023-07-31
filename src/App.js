import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Base from "./components/Base";
import Services from "./pages/Services";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserDashboard from "./pages/user-routes/UserDashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import PostPage from "./pages/PostPage";
// import LoadingBar from "react-top-loading-bar";
//import { useState } from "react";

//import CustomNavbar from "./components/CustomNavbar";
//import Base from "./components/Base";
//import CustomNavbar from "./components/CustomNavbar";

function App() {
  // const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        {/* <LoadingBar height={3} color="#f11946" progress={progress} /> */}

        <Base />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:postId" element={<PostPage />} />

          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile-info" element={<ProfileInfo />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
