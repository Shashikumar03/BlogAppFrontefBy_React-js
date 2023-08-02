import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardText } from "reactstrap";
import { getLoginUserDetail, isLogged } from "../auth";

function Post({
  post = { id: -1, title: "title", content: "content" },
  deletePost,
}) {
  const [user, setUser] = useState({});
  const [loggin, setLogin] = useState(null);
  useEffect(() => {
    setUser(getLoginUserDetail());
    setLogin(isLogged());
  }, []);
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
          {loggin && user && user.id == post.user.id && (
            <Button
              className="ms-2"
              color="danger"
              onClick={(event) => deletePost(post)}
            >
              delete
            </Button>
          )}
        </div>
      </Card>
    </>
  );
}

export default Post;
