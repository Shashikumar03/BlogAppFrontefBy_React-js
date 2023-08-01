import React, { useEffect, useState } from 'react'
import CustomNavbar from '../components/CustomNavbar'
import { useParams } from 'react-router-dom'
import { getPostByCategoryId } from '../services/Post-service';
import { toast } from 'react-toastify';
import { Col, Row } from 'reactstrap';
import CategorySideMenu from '../components/CategorySideMenu';
import LoadingBar from 'react-top-loading-bar';
import Post from '../components/Post';

export default function Categories() {
    const { categoryId } = useParams();
    const [posts, setPosts] = useState([]);
    
  const [progress, setProgress] = useState(0);

    useEffect(() => {
        getPostByCategoryId(categoryId).then((data) => {
            console.log(data);
            setPosts([...data]);
            
        }).catch((err) => {
            toast.error(err);
            
        });
    },[categoryId])
  return (
     <>
      <CustomNavbar />

      <div className="container">
        <Row>
          <Col md={2} className="border-0 pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={9}>
            <LoadingBar height={3} color="#f11946" progress={progress} />
            <div className="container">
                          {posts && (posts.map((post) => {
                              return (<Post post={post}/>)
                          }))
                              
               }
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
