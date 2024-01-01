import React from "react";
import Buttons from "../components/Button";
import heroImg from "../assets/images/hero-img.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { routes } from "../helper/routes";
import Article from "../components/Article";
import Image from "react-bootstrap/Image";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.about);

  return (
    <Container className="pt-5 pb-5 mt-4" fluid="xxl">
      <Row xs={1} md={2} className="header-content mb-5 p-5">
        <Col className="text-start">
          {" "}
          <h1 style={{ fontSize: "50px" }} className="fw-bolder">
            Quality, Intelligent & Creative Solutions
          </h1>
          <p className="fst-italic pt-2">
            To revolutionize manufacturing and shop floor operations with
            unprecedented efficiency and innovation in scale!!
          </p>
          <p className="pt-2">
            <strong>QIK AUTOMATION</strong> is a cutting-edge startup based in
            Mysuru, India. We specialize in the design, development, and
            manufacturing of advanced equipment and software solutions for
            Electronic Manufacturing Industries. We offer end-to-end solutions
            that enable electronic manufacturers to significantly improve their
            overall productivity and elevate their journey of automation.
          </p>
          <Buttons name={"Get Started"} onClick={onClick} />
        </Col>
        <Col className="p-3">
          <Image
            className="moveArrow"
            src={heroImg}
            width="500"
            height="400"
            fluid
          />
        </Col>
      </Row>
      <Row className="gap-4 p-5">
        <Col>
          <h1 style={{ fontSize: "40px" }} className="fs-2 mt-4 fw-bolder">
            What we will do for your Business
          </h1>
        </Col>
      </Row>
      <Row className="gap-4 p-5">
        <Col className="card-effect shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Link building</h1>
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Col>
        <Col className="card-effect shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Content marketing</h1>
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Col>
        <Col className="card-effect shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">On Page SEO</h1>
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Col>
      </Row>
      <Article />
    </Container>
  );
}
export default HomePage;
