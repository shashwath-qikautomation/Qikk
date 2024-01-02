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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const allImages = [
  // { src: "https://picsum.photos/2000/3000", category: "Rack" },
  // { src: "https://picsum.photos/3000/2000", category: "Rack" },
  // { src: "https://picsum.photos/4000/3000", category: "Rack" },
  // { src: "https://picsum.photos/3000/1500", category: "Conveyor" },
  // { src: "https://picsum.photos/1000/2000", category: "Conveyor" },
  // { src: "https://picsum.photos/1500/2000", category: "Conveyor" },
  // { src: "https://picsum.photos/3000/2000", category: "Company" },
  // { src: "https://picsum.photos/2000/1500", category: "Company" },
  // { src: "https://picsum.photos/3000/2000", category: "Company" },
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
    <Container className="bg-white">
      <Row className="mb-5 p-2 mt-3">
        <Col xs={12}>
          <h1 className="text-primary fs-4 fw-bold">Our Projects</h1>
          <p className="text-dark fs-1 fw-bold">Recently Launched Projects</p>
          <br />
          <div className="d-flex justify-content-center">
            <hr className="text-dark w-50" />
          </div>
        </Col>

        <Col className="d-flex flex-row  justify-content-center mb-3">
          <div className="m-2">
            <Buttons
              height="40px"
              width="90px"
              name="All"
              btnClick={() => setFilter("All")}
              color="grey"
              backgroundColor="white"
              borderStyle="none"
            />
          </div>

          <div className="m-2">
            <Buttons
              height="40px"
              width="90px"
              name="Rack"
              btnClick={() => setFilter("Rack")}
              color="grey"
              backgroundColor="white"
              borderStyle="none"
            />
          </div>
          <div className="m-2">
            <Buttons
              height="40px"
              width="90px"
              name="Conveyor"
              btnClick={() => setFilter("Conveyor")}
              color="grey"
              backgroundColor="white"
              borderStyle="none"
            />
          </div>
          <div className="m-2">
            <Buttons
              height="40px"
              width="90px"
              name="Company"
              btnClick={() => setFilter("Company")}
              color="grey"
              backgroundColor="white"
              borderStyle="none"
            />
          </div>
        </Col>
        <>
          {data.fullView && (
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                zIndex: 1000,
                top: 0,
                left: 0,
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "10px",
                  backgroundColor: "grey",
                  color: "white",
                  fontSize: "15px",
                  borderStyle: "none",
                  borderRadius: "4px",
                  marginTop: "5px",
                }}
                onClick={() => imgAction()}
              >
                X
              </button>

              <SlArrowLeft
                onClick={() => imgAction("previous-img")}
                className="text-white fs-3"
              />

              <img
                src={data.img.src}
                style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
                alt={data.img.category}
              />
              <SlArrowRight
                onClick={() => imgAction("next-img")}
                className="text-white fs-3"
              />
            </div>
          )}

          <div>
            <ResponsiveMasonry
            // columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {filteredImages.map((image, index) => (
                  <div className="gallery-image-col">
                    <img
                      key={index}
                      src={image.src}
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "block",
                        cursor: "pointer",
                      }}
                      alt={image.category}
                      onClick={() => viewImage(image, index)}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </>
      </Row>
    </Container>
  );
}

export default Gallery;
