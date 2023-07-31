import React, { useState } from "react";
import NewFeed from "../components/NewFeed";
import CustomNavbar from "../components/CustomNavbar";
import LoadingBar from "react-top-loading-bar";

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <CustomNavbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <div className="container">
        <NewFeed setProgress={setProgress} />
      </div>
    </>
  );
}
