import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Input,
  Button,
} from "reactstrap";
// import CustomNavbar from "../components/CustomNavbar";
import { getPostById } from "../services/Post-service";
import { toast } from "react-toastify";
import { createComment } from "../services/Comment-Service";
import { isLogged } from "../auth";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(undefined);
  const [comment, setComment] = useState({
    content: "",
  });
  console.log(postId);

  useEffect(() => {
    // eslint-disable-next-line
    getPostById(postId)
      .then((data) => {
        console.log(data);
        setPost(data);
        toast.success("post by id load Succesfully");
      })
      .catch((err) => {
        console.log("error");
        toast.error(err);
      });
  }, []);

  const printDate = (number) => {
    console.log(number);
    return new Date(number).toDateString();
  };
  const submitComment = () => {
    if (!isLogged()) {
      toast.warning("login first");
      return;
    }
    createComment(comment, postId)
      .then((data) => {
        console.log(data.content);
        setPost({
          ...post,
          comments: [...post.comments, data],
        });
        setComment({
          content: "",
        });
        toast.success("comment suceesfully");
      })
      .catch((err) => {
        toast.error("error in comment");
        console.log(err);
      });
  };

  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="container">
        <Row>
          <Col
            md={{
              size: 12,
            }}
          >
            {post && (
              <Card>
                <CardHeader>
                  <h2 className="text-center">{post.title}</h2>
                </CardHeader>
                <CardBody>
                  <CardText className="text-center">
                    Post by :-
                    <b>{post.user.name}</b> on{" "}
                    <b>{printDate(post.addedDate)}</b>
                  </CardText>
                  <hr />
                  <CardText>
                    <h5>{post.content}</h5>
                  </CardText>
                  <hr />
                  <CardText>category:-- {post.category.categoryTitle}</CardText>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col
            md={{
              size: 4,
              offset: 3,
            }}
          >
            <h3 className="text-center">comments on post</h3>
            {post &&
              post.comments.map((c, index) => (
                <Card key={index}>
                  <CardBody>
                    <CardText>
                      <h5>{c.content}</h5>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            <Card className=" mt-3">
              <CardBody>
                <CardHeader>write your comment</CardHeader>
                <CardText>
                  <Input
                    type="text"
                    value={comment.content}
                    placeholder="write comments "
                    onChange={(event) =>
                      setComment({ content: event.target.value })
                    }
                  />

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-primary mt-2"
                      onClick={submitComment}
                    >
                      submit
                    </Button>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
