import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "../styles/Product.css";
import productImg from "../assets/images/product.svg";
import { useState } from "react";
import url1 from "../assets/pdf/img1.png";
import url2 from "../assets/pdf/img2.png";
import url3 from "../assets/pdf/img3.png";
import url4 from "../assets/pdf/img4.png";
import url5 from "../assets/pdf/img5.png";
import url6 from "../assets/pdf/img6.png";
import url7 from "../assets/pdf/img7.png";
import url8 from "../assets/pdf/img8.png";
import url9 from "../assets/pdf/img9.png";
import url10 from "../assets/pdf/img10.png";
import MyModal from "../components/Model";
import Cards from "../components/Cards";
import { useRef } from "react";
import Buttons from "../components/Button";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import styles from "../styles/Cards.css";
import Fade from "react-reveal";

function Product() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const canvasRef = useRef(null);

  const handleShowModal = (url) => {
    setSelectedUrl(url);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedUrl("");
    setShowModal(false);
  };

  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
  };

  const handleDownloadPdf = () => {
    if (canvasRef.current) {
      const captureNode = canvasRef.current;
      const { width, height } = captureNode.getBoundingClientRect();
      const pdf = new jsPDF({ unit: "px", format: [width, height] });
      html2canvas(captureNode).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
        pdf.save("QIK.pdf");
      });
    }
  };

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center mt-5 mb-5 animate__animated animate__fadeInUp">
          <h1 className="mt-5" style={{ fontWeight: "800" }}>
            Product and Solution
          </h1>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col lg={12}>
            <div className="mt-5">
              <h5
                style={{ color: "#2124b1", fontWeight: 700 }}
                className="animate__animated animate__fadeInUp"
              >
                Our Services
              </h5>
              <h1
                className="animate__animated animate__fadeInUp"
                style={{ fontWeight: 800 }}
              >
                What Solutions We Provide
              </h1>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} sm={12} md={12}>
            <p className="d-flex justify-content-start text-justify animate__animated animate__fadeInUp">
              We are India's first smart factory solution provider in addressing
              the challenges of the electronics manufacturing industry
              particularly, in traceability, material handling and production
              execution. We offer end-to-end solutions and enable electronic
              manufacturers to significantly improve their overall productivity,
              production efficiency and help our clients to elevate their
              journey of automation. We carry the pride of our Solutions to be
              of high Quality, Intelligent and Creative along with an exclusive
              alignment to Industry 4.0.
            </p>
          </Col>
        </Row>

        <Row className="mt-4 animate__animated animate__fadeInUp">
          <Col lg={12} sm={12} md={12}>
            <h4 style={{ textAlign: "start", color: "#2124b1" }}>Product</h4>
            <ul className="mt-4" style={{ textAlign: "start" }}>
              <li>Smart Inventory Management</li>
              <li>Smart Reel Storage System</li>
              <li>Automated Storage and Retrieval System (ASRS)</li>
              <li>Autonomous Mobile Robots (AMR)</li>
              <li>
                SMT Material Handling Systems
                <ul>
                  <li>Link Conveyors</li>
                  <li>Inspection Conveyors</li>
                  <li>Cooling Conveyors</li>
                  <li>PCB Loaders</li>
                  <li>PCB Unloaders</li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 animate__animated animate__fadeInUp">
          <Col lg={12} sm={12} md={12}>
            <h4 style={{ textAlign: "start", color: "#2124b1" }}>Solution</h4>
            <ul className="mt-4" style={{ textAlign: "start" }}>
              <li>Total Manufacturing Execution Software</li>
              <li>MES/MOM o Traceability</li>
              <li>Machine Maintenance o Data Analytics </li>
            </ul>
          </Col>
        </Row>
        <Fade bottom>
          <Row className="mt-4">
            <Col sm={12} md={4} lg={4}>
              <Cards
                title="Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC "
                text="PCB (Printed Circuit Board) conveyors are essential 
                    equipment within the Surface Mount Technology (SMT) assembly...."
                productImg={productImg}
                url={url1}
                onClick={() => handleShowModal(url1)}
              />
            </Col>

            <Col sm={12} md={4}>
              <Cards
                title="Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC "
                text="PCB (Printed Circuit
                     Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
                productImg={productImg}
                url={url2}
                onClick={() => handleShowModal(url2)}
              />
            </Col>

            <Col sm={12} md={4}>
              <Cards
                title="Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC "
                text="PCB (Printed Circuit Board) conveyors
                     are essential equipment within the Surface Mount Technology (SMT) assembly... "
                productImg={productImg}
                url={url3}
                onClick={() => handleShowModal(url3)}
              />
            </Col>

            <Col sm={12} md={4}>
              <Cards
                title="Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC "
                text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology "
                productImg={productImg}
                url={url4}
                onClick={() => handleShowModal(url4)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Cards
                title="Single Lane Conveyor Series 1 M Cooling Conveyor QIK-1000CC "
                text="PCB (Printed Circuit Board) conveyors
                    are essential equipment within the Surface Mount Technology (SMT)... "
                productImg={productImg}
                url={url5}
                onClick={() => handleShowModal(url5)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Cards
                title=" Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC "
                text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology (SMT) assembly.... "
                productImg={productImg}
                url={url6}
                onClick={() => handleShowModal(url6)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Cards
                title=" Single Lane Series Magazine Loader QIK-ML "
                text="PCB (Printed Circuit Board) loaders are an 
                    integral part of the Surface Mount Technology (SMT) assembly process.... "
                productImg={productImg}
                url={url7}
                onClick={() => handleShowModal(url7)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Cards
                title="Single Lane Series Magazine Unloader QIK-MUL "
                text="PCB (Printed Circuit Board) 
                    unloaders play a crucial role in the Surface Mount Technology (SMT)... "
                productImg={productImg}
                url={url8}
                onClick={() => handleShowModal(url8)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Cards
                title="Smart Storage Series Smart Component Incoming System QIK-SCIS "
                text="A Smart Incoming SMT System
                     Stream lines the process of receiving and inspection electronics component... "
                productImg={productImg}
                url={url9}
                onClick={() => handleShowModal(url9)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Cards
                title="Smart Storage Series Smart Reel Storage System QIK-SRSS "
                text="Our Storage system is equipped 
                    with features to improve component management, reduce errors... "
                productImg={productImg}
                url={url10}
                onClick={() => handleShowModal(url10)}
              />
            </Col>
          </Row>
        </Fade>
      </Container>

      <MyModal
        show={showModal}
        fullscreen={true}
        onHide={handleCloseModal}
        className="modal-pdf border-0"
      >
        <div className="image-frame text-center m-auto border-0">
          <img
            style={{ width: "100%" }}
            ref={canvasRef}
            src={selectedUrl}
            alt="image"
          ></img>
          <Buttons
            color="blue"
            name="Download PDF"
            onClick={handleDownloadPdf}
          ></Buttons>
        </div>
      </MyModal>
    </div>
  );
}

export default Product;
