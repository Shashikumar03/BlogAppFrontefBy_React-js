import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";

function Post({ post = { title: "title", content: "content" } }) {
  console.log(post);
  return (
    <>
      <Card className="mt-3">
        <CardHeader className="text-center">
          <h4>
            {post.postId}.{post.title}
          </h4>
        </CardHeader>

        <CardBody>
          <CardText>{post.content.substring(0, 200)}.....</CardText>
        </CardBody>
        <div className="text-center mb-3 mt-1">
          <Link className=" btn bg-primary" to={"/post/" + post.postId}>
            read more
          </Link>
        </div>
      </Card>
    </>
  );
}

export default Post;
