import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rackImg1 from "../assets/images/rackImg1.svg";
import rackImg2 from "../assets/images/rackImg2.svg";
import rackImg3 from "../assets/images/rackImg3.svg";
import rackImg4 from "../assets/images/rackImg4.svg";
import conveyorImg1 from "../assets/images/conveyorImg1.svg";
import conveyorImg2 from "../assets/images/conveyorImg2.svg";
import conveyorImg3 from "../assets/images/conveyorImg3.svg";
import conveyorImg4 from "../assets/images/conveyorImg4.svg";
import companyImg1 from "../assets/images/companyImg1.svg";
import companyImg2 from "../assets/images/companyImg2.svg";
import companyImg3 from "../assets/images/companyImg3.svg";
import companyImg4 from "../assets/images/companyImg4.svg";
import Buttons from "../components/Button";
import { useState } from "react";
import "../styles/Gallery.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from "react-bootstrap/Image";

const allImages = [
  { src: rackImg1, category: "Rack" },
  { src: rackImg2, category: "Rack" },
  { src: rackImg3, category: "Rack" },
  { src: rackImg4, category: "Rack" },
  { src: conveyorImg1, category: "Conveyor" },
  { src: conveyorImg2, category: "Conveyor" },
  { src: conveyorImg3, category: "Conveyor" },
  { src: conveyorImg4, category: "Conveyor" },
  { src: companyImg1, category: "Company" },
  { src: companyImg2, category: "Company" },
  { src: companyImg3, category: "Company" },
  { src: companyImg4, category: "Company" },
];

function Gallery() {
  const [data, setData] = useState({ img: "", i: 0, fullView: false });

  const viewImage = (img, i) => {
    setData({ img, i, fullView: true });
  };

  const imgAction = (action) => {
    setData((prevData) => {
      let i = prevData.i;
      if (action === "next-img" && i < allImages.length - 1) {
        return { img: allImages[i + 1], i: i + 1, fullView: true };
      }
      if (action === "previous-img" && i > 0) {
        return { img: allImages[i - 1], i: i - 1, fullView: true };
      }
      return { img: "", i: 0, fullView: false };
    });
  };
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <Container className="pt-5 pb-5 mt-5">
      <Row className="mb-5 p-2 mt-5">
        <Col xs={12}>
          <h1 className="text-primary fs-5 fw-bold animate__animated animate__fadeInUp">
            Our Projects
          </h1>
          <p className="text-dark fs-4 fw-bold text-center animate__animated animate__fadeInUp">
            Recently Launched Projects
          </p>
          <br />
          <span className="d-flex justify-content-center">
            {" "}
            <hr className="text-dark w-75" />
          </span>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-2 animate__animated animate__fadeInUp">
          <div className="d-flex flex-row justify-content-center mb-3">
            <div className="m-1">
              <Buttons
                className="button-style"
                name="All"
                onClick={() => setFilter("All")}
              />
            </div>
            <div className="m-1">
              <Buttons
                className="button-style"
                name="Rack"
                onClick={() => setFilter("Rack")}
              />
            </div>

            <div className="m-1">
              <Buttons
                className="button-style"
                name="Conveyor"
                onClick={() => setFilter("Conveyor")}
              />
            </div>

            <div className="m-1">
              <Buttons
                className="button-style"
                name="Company"
                onClick={() => setFilter("Company")}
              />
            </div>
          </div>
        </Col>
      </Row>
      <div>
        {data.fullView && (
          <div
            className="mt-5"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.8)",
              position: "fixed",
              zIndex: "100",
              top: "0",
              left: "0",
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "4px",
                right: "3px",
                color: "black",
                fontSize: "15px",
                zIndex: "100",
                cursor: "pointer",
                fontWeight: "bolder",
              }}
              onClick={() => imgAction()}
            >
              X
            </button>

            <SlArrowLeft
              onClick={() => imgAction("previous-img")}
              className="text-white fs-3"
              style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                cursor: "pointer",
              }}
            />

            <img
              src={data.img.src}
              style={{
                position: "absolute",
                maxWidth: "90%",
                maxHeight: "90%",
                display: "block",
                objectFit: "contain",
                top: "5%",
                left: "25%",
                transform: "transaate(-10%, -25%)",
                border: "3px solid #fff",
              }}
              alt={data.img.category}
            />
            <SlArrowRight
              onClick={() => imgAction("next-img")}
              className="text-white fs-3"
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </div>

      <Row>
        {filteredImages.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="gallery-image-col animate__animated animate__fadeInUp">
              <Image
                key={index}
                src={image.src}
                style={{
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                }}
                alt={image.category}
                onClick={() => viewImage(image, index)}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
