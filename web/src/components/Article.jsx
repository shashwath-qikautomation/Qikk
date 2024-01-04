import React, { useState, useRef } from "react";
import business from "../assets/images/business.svg";
import Button from "../components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { routes } from "../helper/routes";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
import productImg from "../assets/images/product.svg";
import Cards from "../components/Cards";
import url1 from "../assets/pdf/img1.png";
import MyModal from "../components/Model";
import Buttons from "../components/Button";
import html2canvas from "html2canvas";
import url2 from "../assets/pdf/img2.png";
import url3 from "../assets/pdf/img3.png";
import url4 from "../assets/pdf/img4.png";
import { jsPDF } from "jspdf";

function Article() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const canvasRef = useRef(null);

  const onClick = () => navigate(routes.contact);
  const width = {
    width: "150px",
  };
  //mb-5

  const handleShowModal = (url) => {
    setSelectedUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUrl("");
    setShowModal(false);
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
              We offer end-to-end solutions and enable electronic manufacturers
              to significantly improve their overall productivity, production
              efficiency and help our clients to elevate their journey of
              automation. We carry the pride of our Solutions to be of high
              Quality, Intelligent and Creative along with an exclusive
              alignment to Industry 4.0.
            </p>
            <Button
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
            <h5 className="text-primary fs-5 fw-bold">
              Our Product & Solutions
            </h5>
            <h1 className="fs-2 mt-4 font-weight-bold">
              Our compressive solutions aligned with Industry 4.0
            </h1>
          </Col>
        </Row>
      </Fade>
      <Fade bottom duration="1500">
        <Row className="gap-4 p-5">
          <Col>
            <Cards
              title="Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC "
              text="PCB (Printed Circuit Board) conveyors are essential 
                    equipment within the Surface Mount Technology (SMT) assembly...."
              productImg={productImg}
              url={url1}
              onClick={() => handleShowModal(url1)}
            />
            {/* <h1 className="fs-3">
            className="card-hover shadow p-4 bg-white rounded"
              Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC{" "}
            </h1>
            <p className="p">
              Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC
            </p> */}
          </Col>
          <Col>
            <Cards
              title="Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC "
              text="PCB (Printed Circuit
                     Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
              productImg={productImg}
              url={url2}
              onClick={() => handleShowModal(url2)}
            />
          </Col>
        </Row>
      </Fade>
      <Fade bottom duration="1400">
        <Row className="gap-4 p-5">
          <Col>
            <Cards
              title="Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC "
              text="PCB (Printed Circuit Board) conveyors
                     are essential equipment within the Surface Mount Technology (SMT) assembly... "
              productImg={productImg}
              url={url3}
              onClick={() => handleShowModal(url3)}
            />
          </Col>
          <Col>
            <Cards
              title="Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC "
              text="PCB (Printed Circuit Board) conveyors 
                    are essential equipment within the Surface Mount Technology "
              productImg={productImg}
              url={url4}
              onClick={() => handleShowModal(url4)}
            />
          </Col>
        </Row>
      </Fade>
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

export default Article;
