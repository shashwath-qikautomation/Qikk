import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rackImg1 from "../assets/images/rackImg.jpg";
import rackImg2 from "../assets/images/reelRackImg.jpg";
import conveyorImg1 from "../assets/images/conveyorImg1.jpg";
import conveyorImg2 from "../assets/images/conveyorImg2.jpg";
import conveyorImg3 from "../assets/images/conveyorImg3.jpg";
import conveyorImg4 from "../assets/images/conveyorImg4.jpg";
import conveyorImg5 from "../assets/images/conveyorImg5.jpg";
import conveyorImg6 from "../assets/images/conveyorImg6.jpg";
import conveyorImg7 from "../assets/images/conveyorImg7.jpg";
import companyImg1 from "../assets/images/companyImg1.jpg";
import companyImg2 from "../assets/images/companyImg2.jpg";
import companyImg3 from "../assets/images/companyImg3.jpg";
import companyImg4 from "../assets/images/companyImg4.jpg";
import Buttons from "../components/Button";
import { useState } from "react";
import "../styles/Gallery.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from "react-bootstrap/Image";
import { FaClone } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const allImages = [
  { src: companyImg1, category: "Company" },
  { src: rackImg1, category: "Rack" },
  { src: rackImg2, category: "Rack" },
  { src: conveyorImg1, category: "Conveyor" },
  { src: companyImg2, category: "Company" },
  { src: conveyorImg2, category: "Conveyor" },
  { src: companyImg3, category: "Company" },
  { src: conveyorImg3, category: "Conveyor" },
  { src: conveyorImg4, category: "Conveyor" },
  { src: conveyorImg5, category: "Conveyor" },
  { src: conveyorImg6, category: "Conveyor" },
  { src: conveyorImg7, category: "Conveyor" },
  { src: companyImg4, category: "Company" },
];

function Gallery() {
  const [data, setData] = useState({ img: "", i: 0, fullView: false });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleHover = (index) => {
    setHoveredIndex(index);
  };
  const width = {
    width: "80px",
  };
  const handleLeave = () => {
    setHoveredIndex(null);
  };

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
    <Container className="pt-4 pb-4 mt-4">
      <Row className="mb-2 pt-4 mt-5">
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
                width={width.width}
                name="All"
                onClick={() => setFilter("All")}
              />
            </div>
            <div className="m-1">
              <Buttons
                className="button-style"
                width={width.width}
                name="Rack"
                onClick={() => setFilter("Rack")}
              />
            </div>

            <div className="m-1">
              <Buttons
                className="button-style"
                name="Conveyor"
                width={width.width}
                onClick={() => setFilter("Conveyor")}
              />
            </div>

            <div className="m-1">
              <Buttons
                className="button-style"
                name="Company"
                width={width.width}
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
                transform: "translate(-10%, -25%)",
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
          <Col key={index} xs={12} sm={12} md={4} lg={4} className="mb-4">
            <div
              className={`gallery-image-col animate__animated animate__fadeInUp ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <Image
                key={index}
                src={image.src}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                onClick={() => viewImage(image, index)}
              />
              {hoveredIndex === index && (
                <div className="hover-content">
                  <h1>
                    <FaClone style={{ marginRight: "5px" }} />
                    {image.category}
                  </h1>

                  <FiPlus className="plus-Icon" />
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
