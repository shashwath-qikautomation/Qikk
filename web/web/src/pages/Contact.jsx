import React from "react";
import style from "../styles/Contact.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
  };

  const button = {
    background: "#fff",
    color: "#ff5c97 !important",
    display: "inline-block",
    padding: "18px 44px",
    fontFamily: '"Poppins",sans-serif',
    fontSize: "14px",
    fontWeight: "400",
    border: "0",
    border: "1px solid #ff5c97",
    letterSpacing: "3px",
    textAlign: "center",
    color: "#ff5c97",
    textTransform: "uppercase",
    cursor: "pointer",
  };

  return (
    <div className="pt-5 mt-5">
      <div className="header">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg={8}>
              <div>
                <h2 style={h2}>Contact Us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact-section">
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
                      rows={5}
                      className="mb-3"
                      placeholder="Enter Message"
                    />
                  </Col>
                </Row>
                <Row>
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
                  <Button
                    className="btn"
                    variant="outline-Primary"
                    style={{
                      border: "1px solid rgb(216, 34, 170)",
                      float: "left",
                    }}
                  >
                    SEND
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4} className="mb-4 ml-1">
              <Card className="shadow-lg p-4 mb-5 bg-white rounded">
                <Card.Body>
                  <Row>
                    {/* <i class="fa-solid fa-house"></i> */}
                    <Card.Text>
                      {" "}
                      <p>
                        <b>Buttonwood, California.</b>
                      </p>
                      Rosemead, CA 91770{" "}
                    </Card.Text>
                  </Row>
                  <br />
                  <Row>
                    {/* <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" /> */}
                    <Card.Text>
                      <p>
                        <b>+1 253 565 2365</b>
                      </p>
                      Mon to Fri 9am to 6pm
                    </Card.Text>
                  </Row>
                  <br />
                  <Row>
                    {/* <i class="fa-light fa-envelope"></i> */}
                    <Card.Text>
                      <p>
                        {" "}
                        <b>support@colorlib.com</b>{" "}
                      </p>
                      Send us your query anytime!
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Contact;
