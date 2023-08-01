import React, { useEffect, useState } from "react";
import { ListGroupItem, ListGroup} from "reactstrap";
import {  loadAllCategories } from "../services/Category-Service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function CategorySideMenu() {
  const [categrories, setCategories] = useState(null)

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        setCategories(data);
        toast.success("category loaded in categorySideMenu");
      })
      .catch((err) => {
        toast.error("eorr in menu side bar");
      });
  }, []);
    
  return (
    <>
      <ListGroup>
        <ListGroupItem  href="#" tag={Link} to={"/"} className="border-0">
          All blogs
        </ListGroupItem >
              {categrories &&
                  categrories.map((cat, index) => (
                      <ListGroupItem   href="#" tag={Link} to={"/categories/"+ cat.categoryId} action="true" className="border-0 shadow-5 mt-3" key={index}
                        value={cat.categoryId} >
              {cat.categoryTitle}
            </ListGroupItem>
                  ))}
              {/* <ListGroupItem disabled href="#" tag={Link} to={"/"} className="border-0">
          Add Category
              </ListGroupItem> */}
               {/* <input className="mb-1" type="text" placeholder="add category" value={value} onChange={(e) => { setValue(e.target.value) }} />
              <Button type="submit">add cat..</Button>  */}
      </ListGroup>
    </>
  );
}
