import React, { useEffect, useState } from "react";
// import axios from "axios";

import {
  Card,
  CardBody,
  CardHeader,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Col,
} from "reactstrap";
import { loadAllCategories } from "../services/Category-Service";
// import { loadAllCategories } from "../services/Category-Service";
import JoditEditor from "jodit-react";
import { useRef } from "react";

export default function AddPost() {
  const [categories, setCatogories] = useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCatogories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <Card className="postCard ">
          <CardHeader>
            <h3 className="text-center">what is in yoir mind !!</h3>
          </CardHeader>
          <CardBody>
            <Form className="posrCard">
              <FormGroup>
                <Label for="title">post title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Write a title"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="content ">post content</Label>
                <Input
                  id="content"
                  name="content"
                  placeholder="Write a title"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText" sm={2}>
                  Text Area
                </Label>
                <Col sm={20}>
                  {/* <Input
                    style={{ height: "150px" }}
                    id="exampleText"
                    name="text"
                    type="textarea"
                  /> */}
                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  category
                </Label>
                <Col sm={20}>
                  <Input id="exampleSelect" name="select" type="select">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.categoryTitle}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>

              <div className="text-center ">
                <Button className="bg-primary">Submit</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
