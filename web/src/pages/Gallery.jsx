import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import smartRackImg from "../assets/images/smartRackImg.svg";
import conveyorImg from "../assets/images/conveyorImg.svg";
import companyImg from "../assets/images/companyImg.svg";
import Buttons from "../components/Button";
import { useState } from "react";
import "../styles/Gallery.css";

function Gallery() {
  const [filter, setFilter] = useState("All");

  const allImages = [
    { src: smartRackImg, category: "Rack" },
    { src: smartRackImg, category: "Rack" },
    { src: smartRackImg, category: "Rack" },
    { src: conveyorImg, category: "Conveyor" },
    { src: conveyorImg, category: "Conveyor" },
    { src: conveyorImg, category: "Conveyor" },
    { src: companyImg, category: "Company" },
    { src: companyImg, category: "Company" },
    { src: companyImg, category: "Company" },
  ];

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <Container maxWidth="xxl">
      <Row className="mb-2 p-3">
        <Col xs={12}>
          <h3>Our Projects</h3>
          <h1>Recently Launched Projects</h1>
        </Col>
      </Row>
      <Row className="p-3 mb-4">
        <Col xs={12}>
          <div className="d-flex flex-row justify-content-center">
            <Buttons
              height="40px"
              width="120px"
              name="All"
              btnClick={() => setFilter("All")}
            />
            <Buttons
              height="40px"
              width="120px"
              name="Rack"
              btnClick={() => setFilter("Rack")}
            />
            <Buttons
              height="40px"
              width="120px"
              name="Conveyor"
              btnClick={() => setFilter("Conveyor")}
            />
            <Buttons
              height="40px"
              width="120px"
              name="Company"
              btnClick={() => setFilter("Company")}
            />
          </div>
        </Col>
      </Row>

      <Row
        className={`mb-4 shadow ${filter !== "All" ? "filtered-images" : ""}`}
      >
        {filteredImages.map((image, index) => (
          <Col key={index} xs={6} md={4} className="gallery-image-col">
            <Image
              src={image.src}
              name={image.category}
              value={image.category}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
