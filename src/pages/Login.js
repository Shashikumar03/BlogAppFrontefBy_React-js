import React from "react";

import { Card, CardHeader, CardBody } from "reactstrap";
import { Form, Button, FormGroup, Label, Col, Input, Row } from "reactstrap";
export default function Login() {
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
                <Form>
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
