import React, { useState } from "react";
import NewFeed from "../components/NewFeed";
import CustomNavbar from "../components/CustomNavbar";
import LoadingBar from "react-top-loading-bar";
import { Col, Row } from "reactstrap";
import CategorySideMenu from "../components/CategorySideMenu";
import Footer from "../components/Footer";

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />

      <div className="container flex-grow-1 mt-5 pt-3">
        <Row>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>

          <Col md={10}>
            <LoadingBar height={3} color="#f11946" progress={progress} />
            <div className="container">
              <NewFeed setProgress={setProgress} />
            </div>
          </Col>
        </Row>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
