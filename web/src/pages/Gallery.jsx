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
import Fade from "react-reveal/Fade";

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
      const currentIndex = allImages.findIndex(
        (img) => img.src === prevData.img.src
      );
      let newIndex;

      if (action === "next-img" && currentIndex < allImages.length - 1) {
        newIndex = currentIndex + 1;
        console.log(newIndex);
      } else if (action === "previous-img" && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else {
        newIndex = 0;
      }

      return { img: allImages[newIndex].src, i: newIndex, fullView: true };
    });
  };
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <Container className="pt-4 pb-4 mt-4">
      <Fade bottom duration="1500">
        <Row className="mb-2 pt-4 mt-5">
          <Col xs={12}>
            <h2 className="gallery-heading mb-5">Gallery</h2>
            <h1 className="text-primary fs-5 fw-bold">Our Projects</h1>
            <p className="text-dark fs-4 fw-bold text-center">
              Recently Launched Projects
            </p>
            <br />
            <span className="d-flex flex-row justify-content-center">
              {" "}
              <hr className="text-dark w-75" />
            </span>
          </Col>
        </Row>
      </Fade>
      <Fade bottom duration="1500">
        <Row>
          <Col xs={12} className="mb-2">
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
      </Fade>

      <div>
        {data.fullView && (
          <div
            className="full-image-view"
            onClick={() => setData({ img: "", i: 0, fullView: false })}
          >
            <button className="close-btn">X</button>

            <SlArrowLeft
              className="nav-arrow left-arrow"
              onClick={() => imgAction("previous-img")}
            />

            <Image
              src={data.img.src}
              alt={data.img.category}
              className="full-image mt-5"
            />

            <SlArrowRight
              className="nav-arrow right-arrow"
              onClick={() => imgAction("next-img")}
            />
          </div>
        )}
      </div>

      <Fade bottom duration="1500">
        <Row>
          {filteredImages.map((image, index) => (
            <Col key={index} xs={12} sm={12} md={4} lg={4} className="mb-4">
              <div
                className={`gallery-image-col ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <Image
                  key={index}
                  src={image.src}
                  onClick={() => viewImage(image, index)}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
                {hoveredIndex === index && (
                  <div className="hover-content">
                    <h1>
                      <FaClone style={{ marginRight: "5px" }} />
                      {image.category}
                    </h1>

                    <FiPlus
                      className="plus-Icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        viewImage(image, index);
                      }}
                    />
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Fade>
    </Container>
  );
}

export default Gallery;
