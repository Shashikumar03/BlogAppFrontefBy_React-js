import React, { useState } from "react";
import NewFeed from "../components/NewFeed";
import CustomNavbar from "../components/CustomNavbar";
import LoadingBar from "react-top-loading-bar";
import { Col, Row } from "reactstrap";
import CategorySideMenu from "../components/CategorySideMenu";
// import { createCategory } from "../services/Category-Service";
// import { toast } from "react-toastify";

export default function Home() {
  const [progress, setProgress] = useState(0);
  // const [value, setValue] = useState();
  // const [cat, setCat] = useState({
  //   categoryTitle: "",
  //   categoryDescription: "",
  // });

  // const addCat = () => {
  //   setCat({
  //     categoryTitle: value,
  //     categoryDescription: "shashikumar",
  //   });
  //   createCategory(cat)
  //     .then((data) => {
  //       console.log(data + "create successfully");
  //       toast.success("category create Succesfully");
  //     })
  //     .catch((err) => {
  //       toast.error("category does not created");
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <CustomNavbar />

      <div className="container">
        <Row>
          <Col md={2} className="border-0 pt-5">
            <CategorySideMenu />

            {/* <div md={1}>
              <input
                className="mb-1"
                type="text"
                placeholder="add category"
                value={value}
                size={6}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <Button type="submit" onClick={addCat}>
                add cat..
              </Button>
            </div> */}
          </Col>

          <Col md={9}>
            <LoadingBar height={3} color="#f11946" progress={progress} />
            <div className="container">
              <NewFeed setProgress={setProgress} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
