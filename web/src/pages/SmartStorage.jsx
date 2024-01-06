import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SmartStorage = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center mt-5 mb-5 animate__animated animate__fadeInUp">
          <div className="mt-5">
            <h1 className="mt-5" style={{ fontWeight: "800" }}>
              <span className="line">Product and Solution</span>
            </h1>
          </div>
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
              <h3
                className="animate__animated animate__fadeInUp"
                style={{ fontWeight: 800 }}
              >
                What Solutions We Provide
              </h3>
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
      </Container>
    </div>
  );
};

export default SmartStorage;
