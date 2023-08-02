import React, { useState } from "react";
import {
  Form,
  Label,
  Input,
  Button,
  Col,
  Row,
  FormGroup,
  FormText,
  FormFeedback,
} from "reactstrap";
import { createCategory } from "../services/Category-Service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const [cat, setCat] = useState({
    categoryTitle: "",
    categoryDescription: "",
  });
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });
  const navigate = useNavigate();
  const handleChange = (e, field) => {
    let actualValue = e.target.value;
    setCat({
      ...cat,
      [field]: actualValue,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    createCategory(cat)
      .then((data) => {
        console.log(data);
        //    toast.success("category added succesfully")
        console.log("succesfully category added");
        
        setCat({
          categoryTitle: "",
          categoryDescription: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.categoryDescription);
        console.log("error in category");
        
        
        toast.error("category is not added");
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <>
      <div className="container mt-10 py-5">
        <Row xs={1}>
          <Col sm="8" md={{ size: 6, offset: 2 }}>
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label for="categoryTitle">categoryTitle</Label>
                <Input
                  name="categoryTitle"
                  type="text"
                  value={cat.categoryTitle}
                  onChange={(e) => handleChange(e, "categoryTitle")}
                   invalid={
                        error.errors?.response?.data?.categoryTitle? true : false
                      }
                />
                
                <FormFeedback>
                  {error.errors?.response?.data?.categoryTitle}
                
                    </FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="categoryDescription">categoryDescription</Label>
                <Input
                  name="categoryDescription"
                  type="text"
                  value={cat.categoryDescription}
                  onChange={(e) => handleChange(e, "categoryDescription")}
                  invalid={
                    error.errors?.response?.data?.categoryDescription
                      ? true
                      : false
                  }
                />
                <FormFeedback>
                  {error.errors?.response?.data?.categoryDescription}
                </FormFeedback>
              </FormGroup>

              <div className="text-center">
                <Button type="submit"> add Category</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}
