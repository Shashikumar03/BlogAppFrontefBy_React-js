import React, { useEffect, useState } from "react";
import CustomNavbar from "../components/CustomNavbar";
import { useParams } from "react-router-dom";
import { getPostById, updatePostForm } from "../services/Post-service";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { loadAllCategories } from "../services/Category-Service";

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

export default function UpdatePost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [categories, setCatogories] = useState([]);
  const editor = useRef(null);
  let catTitle = "";

  useEffect(() => {
    getPostById(postId)
      .then((data) => {
        setPost({ ...data, categoryId: data.category.categoryId });
        catTitle = data.category.categoryTitle;
      })
      .catch((err) => {
        console.log(err);
        toast.error("post is not found by id");
      });
    loadAllCategories()
      .then((data) => {
        setCatogories(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(post);
  }, []);
  const handleUpdate = (event, field) => {
    event.preventDefault();
    setPost({
      ...post,
      [field]: event.target.value,
    });
  };
  const updatePost = (event) => {
    event.preventDefault();
    updatePostForm(
      { ...post, category: { categoryId: post.categoryId } },
      postId
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("post not updated");
      });
    toast.success("post updated");
  };
  return (
    <>
      <CustomNavbar />
      {post && (
        <div className="container mt-5 postCard">
          <Card className=" ">
            <CardHeader>
              <h3 className="text-center">update your post !!</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={updatePost}>
                <FormGroup>
                  <Label for="title">post title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Write a title"
                    type="text"
                    value={post.title}
                    onChange={(event) => handleUpdate(event, "title")}
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
                      onChange={(newContent) =>
                        setPost({ ...post, content: newContent })
                      }
                      required
                      // onChange={(newContent) => setContent(newContent)}
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
                      type="select"
                      value={post.categoryId}
                      onChange={(event) => handleUpdate(event, "categoryId")}
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
      )}
    </>
  );
}
