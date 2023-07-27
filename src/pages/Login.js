import React, { useState } from "react";

import { Card, CardHeader, CardBody } from "reactstrap";
import { Form, Button, FormGroup, Label, Col, Input, Row } from "reactstrap";
import { loginUser } from "../services/User-Service";
import { toast } from "react-toastify";
export default function Login() {
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, field) => {
    let actualValue = e.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    // submit data to generate Token:
    loginUser(loginDetail)
      .then((jwtTokenData) => {
        console.log(jwtTokenData);
        console.log("token genetared succesfully");
      })
      .catch((error) => {
        console.log(error);
        console.log("daya kux garbad hai");
        toast.success(error.response.data.message);
      });
  };
  return (
    <>
      <div className="container">
        <Row className="mt-5">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h1 className="text-center">fill your information</h1>
                <hr />
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
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
                        value={loginDetail.username}
                        onChange={(e) => handleChange(e, "username")}
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
                        value={loginDetail.password}
                        onChange={(e) => handleChange(e, "password")}
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
    </>
  );
}
