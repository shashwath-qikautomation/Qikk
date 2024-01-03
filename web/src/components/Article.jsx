import React from "react";
import business from "../assets/images/business.svg";
import Button from "../components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { routes } from "../helper/routes";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

function Article() {
  const navigate = useNavigate();

  const onClick = () => navigate(routes.contact);
  const width = {
    width: "150px",
  };
  //mb-5
  return (
    <div style={{ marginBottom: "100px" }}>
      <Row xs={1} md={2} className="md-2 p-5">
        <Col className="pt-2">
          <Fade left duration="1500">
            <Image src={business} width="500" height="400px" fluid />
          </Fade>
        </Col>
        <Col className="gap-4 pt-4">
          <Fade right duration="1500">
            {" "}
            <h1 className="fs-1">
              Our compressive solutions aligned with Industry 4.0
            </h1>
            <p className="p-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Button
              color={"pink"}
              width={width.width}
              height={"40px"}
              name={"Contact Us"}
              onClick={onClick}
            />
          </Fade>
        </Col>
      </Row>
      <Fade bottom duration="1500">
        <Row className="gap-4 p-5">
          <Col>
            <h1 className="fs-2 mt-4 font-weight-bold">
              Generating New Customers via Online
            </h1>
          </Col>
        </Row>
      </Fade>
      <Fade bottom duration="1500">
        <Row className="gap-4 p-5">
          <Col className="card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-3">Link building</h1>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col className="card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-3">Content marketing</h1>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </Fade>
      <Fade bottom duration="1400">
        <Row className="gap-4 p-5">
          <Col className="card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-3">Link building</h1>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col className="card-hover shadow p-4 bg-white rounded">
            <h1 className="fs-3">Content marketing</h1>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </Fade>
    </div>
  );
}

export default Article;
