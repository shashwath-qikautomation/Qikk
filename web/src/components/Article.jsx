import React from "react";
import business from "../assets/images/business.svg";
import Button from "../components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { routes } from "../helper/routes";
import { useNavigate } from "react-router-dom";

function Article() {
  const navigate = useNavigate();

  const btnClick = () => navigate(routes.contact);
  return (
    <Container maxWidth="xxl">
      <Row className="mb-5 p-5">
        <Col className="pt-2">
          <img src={business} width="600px" height="500px" />
        </Col>
        <Col className="gap-4">
          {" "}
          <h1 className="fs-1">
            We Create a Steps to Build a Successful Digital Product
          </h1>
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
      </Row>
      <Row className="gap-4 p-5">
        <Col>
          <h1 className="fs-2 mt-4 font-weight-bold">
            Generating New Customers via Online
          </h1>
        </Col>
      </Row>
      <Row className="gap-4 p-5">
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Link building</h1>
          <p className="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Content marketing</h1>
          <p className="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
      <Row className="gap-4 p-5">
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Link building</h1>
          <p className="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col className="shadow-lg p-4 mb-5 bg-white rounded">
          <h1 className="fs-3">Content marketing</h1>
          <p className="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Article;
