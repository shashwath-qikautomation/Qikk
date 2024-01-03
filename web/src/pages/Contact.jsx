import React from "react";
import style from "../styles/Contact.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import "animate.css";

function Contact() {
  const h2 = {
    color: "#2b4b80",
    fontSize: "50px",
    fontWeight: "700",
    marginBottom: "66px",
    lineHeight: "1.3",
  };

  const contactTitle = {
    fontSize: "27px",
    fontWeight: "600",
    marginBottom: "20px",
    float: "left",
  };

  return (
    <Container>
      <div className="pt-5 mt-5">
        <div className="header">
          <Container>
            <Row className="d-flex justify-content-center animate__animated animate__fadeInUp">
              <Col lg={8}>
                <div>
                  <h2 style={h2}>Contact Us</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-section animate__animated animate__fadeInUp">
          <Container fluid>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <h2 className="contact-title" style={contactTitle}>
                  Get in touch
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg={8} sm={12} md={8} className="mb-4">
                <Form.Group
                  className="mb-3"
                  placeholder="Enter message"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Row>
                    <Col sm={12} lg={12} md={12}>
                      <Form.Control
                        as="textarea"
                        className="mb-3"
                        rows={5}
                        placeholder="Enter Message"
                      />
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Enter your Email"
                      />
                    </Col>
                    <Col sm={12} lg={12} md={12}>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Row>
                  <Col>
                    <Buttons
                      className="btn"
                      variant="outline-Primary"
                      name="SEND"
                      height="35px"
                      width="105px"
                      color="blue"
                    ></Buttons>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={4} lg={4} className="mb-4 ml-1">
                <Card className=" p-4 mb-5 bg-white rounded">
                  <Card.Body>
                    <Row>
                      <Card.Text>
                        {" "}
                        <p>
                          <b>
                            <IoHome /> &emsp; Koorgalli, Mysore.
                          </b>
                        </p>
                        &emsp; &emsp;Karnataka,-570018{" "}
                      </Card.Text>
                    </Row>
                    <br />
                    <Row>
                      <Card.Text>
                        <p>
                          <b>
                            <FaPhoneAlt /> &emsp; +91 8277995300
                          </b>
                        </p>
                        &emsp;&emsp;Mon to Fri 9am to 6pm
                      </Card.Text>
                    </Row>
                    <br />
                    <Row>
                      <Card.Text>
                        <p>
                          {" "}
                          <b>
                            <IoMdMail /> &emsp; info@rexsatronix.com
                          </b>{" "}
                        </p>
                        &emsp;&emsp; Send us your query anytime!
                      </Card.Text>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Container>
  );
}
export default Contact;
