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
import { createPost } from "../services/Post-service";
import { getLoginUserDetail } from "../auth";

export default function AddPost() {
  const [categories, setCatogories] = useState([]);
  const editor = useRef(null);
  //const [content, setContent] = useState("");
  const [user, setUser] = useState(undefined);

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    setUser(getLoginUserDetail());

    loadAllCategories()
      .then((data) => {
        setCatogories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fieldChange = (event) => {
    event.preventDefault();
    // console.log(event);
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const contentFieldChange = (data) => {
    setPost({ ...post, content: data });
  };

  const createPostForm = (event) => {
    event.preventDefault();

    if (post.title.trim() === "") {
      alert("post is requires");
      return;
    }
    if (post.content.trim() === "") {
      alert("post content is requires");
      return;
    }
    if (post.categoryId === 0 || post.categoryId === -1) {
      alert("plz select the category");
      return;
    }
    post["userId"] = user.id;
    console.log(post.userId);
    console.log(post.categoryId);

    /// submit the form on the server

    createPost(post)
      .then((data) => {
        alert("post create succesfully");
        console.log(post);
      })
      .catch((err) => {
        alert("post doest not creates");
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-5 postCard">
        <Card className=" ">
          <CardHeader>
            <h3 className="text-center">what is in yoir mind !!</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={createPostForm}>
              <FormGroup>
                <Label for="title">post title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Write a title"
                  type="text"
                  onChange={fieldChange}
                  required
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="content ">post content</Label>
                <Input
                  id="content"
                  name="content"
                  placeholder="Write a title"
                  type="text"
                />
              </FormGroup> */}
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
                    value={post.content}
                    required
                    // onChange={(newContent) => setContent(newContent)}
                    onChange={contentFieldChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  category
                </Label>
                <Col sm={20}>
                  <Input
                    id="category"
                    name="categoryId"
                    onChange={fieldChange}
                    type="select"
                    defaultValue={0}
                  >
                    <option disabled value={0}>
                      --select category---
                    </option>
                    {categories.map((category) => (
                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.categoryTitle}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>

              <div className="text-center ">
                <Button type="submit" className="bg-primary">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
