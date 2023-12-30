import React from "react";
import Button from "../components/Button";

import homeSvg from "../assets/images/homepage.svg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "../styles/HomePage.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { routes } from "../helper/routes";
import Article from "../components/Article";

function HomePage() {
  const navigate = useNavigate();

  const btnClick = () => navigate(routes.contact);
  return (
    <Container maxWidth="xxl">
      <Row className="mb-5 p-5">
        <Col className="gap-4">
          {" "}
          <h1 className="fs-1">We Collect High Quality Leads</h1>
          <p className="p-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button
            color={"pink"}
            width={"150px"}
            height={"40px"}
            name={"Contact Us"}
            btnClick={btnClick}
          />
        </Col>
        <Col className="pt-5">
          <img src={homeSvg} width="600px" height="350px" />
        </Col>
      </Row>
      <Row className="gap-4 p-5">
        <Col>
          <h1 className="fs-2 mt-4 font-weight-bold">
            What we will do for your Business
          </h1>
        </Col>
      </Row>
      <Row className="gap-4 p-5">
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Link building</h1>
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Content marketing</h1>
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">On Page SEO</h1>
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
      <Article />
    </Container>
  );
}
export default HomePage;
