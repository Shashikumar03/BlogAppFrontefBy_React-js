import React, { useEffect, useState } from "react";
import CustomNavbar from "../../components/CustomNavbar";
import AddPost from "../../components/AddPost";
import { getLoginUserDetail } from "../../auth";
import { toast } from "react-toastify";
import { deletePostService, getPostByUser } from "../../services/Post-service";
import Post from "../../components/Post";

function UserDashboard() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setUser(getLoginUserDetail());
    // getPostByUser(getLoginUserDetail().id)
    //   .then((data) => {
    //     setPosts([...data]);
    //     console.log([...data]);
    //
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    loadPostData();
  }, []);
  function loadPostData() {
    getPostByUser(getLoginUserDetail().id)
      .then((data) => {
        console.log(data);
        setPosts([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading user posts");
      });
    
  }
  const deletePost = (post) => {
    const id = post.postId;

    deletePostService(id)
      .then((data) => {
        console.log(data);
        toast.success("delete successfully");
        let newPost = posts.filter((p) => p.postId != post.postId);
        setPosts([...newPost]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("not deleted");
        console.log(err);
      });
  };
  return (
    <>
      <CustomNavbar />
      <div className="container">
        <AddPost />
        <h3 className="my-5 text-center mx-2">
          {user.name} see your tatal post={posts.length}
        </h3>
        {posts.map((post, index) => {
          return <Post post={post} key={index} deletePost={deletePost} />;
        })}
      </div>
    </>
  );
}

export default UserDashboard;
