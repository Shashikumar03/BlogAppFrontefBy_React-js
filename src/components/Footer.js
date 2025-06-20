import React from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-light text-dark mt-5 py-4 shadow-sm">
      <Container>
        <Row className="text-center text-md-start align-items-center">
          <Col md={4}>
            <h5>My Blogs</h5>
            <p className="mb-0">
              A place to express your thoughts and share knowledge with the world.
            </p>
          </Col>

          <Col md={4} className="my-3 my-md-0">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://shashikumar03.github.io/blog_privacy_policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-dark text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Connect with me</h6>
            <a
              href="https://www.linkedin.com/in/shashi-kumar-kushwaha-a4427120a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-decoration-none"
            >
              LinkedIn Profile
            </a>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} My Blogs | All Rights Reserved
        </p>
      </Container>
    </div>
  );
}
