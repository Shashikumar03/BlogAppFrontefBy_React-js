import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Form, Button, FormGroup, Label, Col, Input, Row } from "reactstrap";
// import { Button, Card,  } from "reactstrap";
import { signUp } from "../services/User-Service";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  // const [error, setError] = useState({
  //   errors: {},
  //   isError: false,
  // });
  useEffect(() => {
    //console.log(data);
  }, [data]);
  const handleChange = (event, property) => {
    //console.log(event.target.value);
    setData({ ...data, [property]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();

    // data Validation
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
        console.log("error aay");
      });

    // call server  api
  };

  return (
    <div className="container">
      {/* {JSON.stringify(data)} */}

      <Row className="mt-5">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardHeader>
              <h1 className="text-center">fill your information</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <FormGroup row>
                  <Label for="exampleName" sm={2}>
                    name
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleName"
                      name="name"
                      placeholder="enter ur name"
                      type="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="enter  ur email"
                      type="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password"
                      type="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="about" sm={2}>
                    About
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="about"
                      name="about"
                      placeholder="write something"
                      type="textarea"
                      style={{ height: "200px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                    />
                  </Col>
                </FormGroup>

                <div className="button1">
                  <Button outline type="submit" className=" text-center">
                    Submit
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
