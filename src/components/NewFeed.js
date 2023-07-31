import React, { useEffect, useState } from "react";
import { getAllPost } from "../services/Post-service";
import { Col, Row } from "reactstrap";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";

function NewFeed(props) {
  const [allPosts, setAllPosts] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  const changePage = async (pageNumber = 0, pageSize = 5) => {
    if (pageNumber > allPosts.pageNumber && allPosts.lastPage) {
      return;
    }
    if (pageNumber < allPosts.pageNumber && allPosts.pageNumber === 0) {
      return;
    }
    props.setProgress(10);
    await getAllPost(pageNumber, pageSize)
      .then((data) => {
        console.log(data);
        props.setProgress(30);

        setAllPosts({
          content: [...allPosts.content, ...data.content],
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          pageSize: data.pageSize,
          lastPage: data.lastPage,
          pageNumber: data.pageNumber,
        });
        props.setProgress(100);

        console.log(data);
      })
      .catch((err) => {
        console.log("eror");
        toast.error("error in page loading");
      });
  };
  useEffect(
    (event) => {
      // event.preventDefault();
      // eslint-disable-next-line

      changePage(currentPage);
      // eslint-disable-next-line
    },
    [currentPage]
  );

  const fetchData = () => {
    console.log("fetch data");
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="conatainer-fluid mt-3 cle">
        <Row>
          <Col
            md={{
              size: 10,
              offset: 1,
            }}
          >
            <h1>{allPosts?.totalElements}</h1>

            <InfiniteScroll
              dataLength={allPosts.content.length} //This is important field to render the next data
              next={fetchData}
              hasMore={!allPosts.lastPage}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              // below props only if you need pull down functionality
              //   refreshFunction={this.refresh}
              //   pullDownToRefresh
              //   pullDownToRefreshThreshold={50}
              //   pullDownToRefreshContent={
              //     <h3 style={{ textAlign: "center" }}>
              //       &#8595; Pull down to refresh
              //     </h3>
              //   }
              //   releaseToRefreshContent={
              //     <h3 style={{ textAlign: "center" }}>
              //       &#8593; Release to refresh
              //     </h3>
              //   }
            >
              {allPosts.content.map((post, index) => (
                <Post post={post} key={index} />
              ))}
            </InfiniteScroll>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NewFeed;
