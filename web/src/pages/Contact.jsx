import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { Fade } from "react-reveal";
import "animate.css";

function Contact() {
  const h2 = {
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

  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="contact-section m-3">
        <div className="row">
          <div className="col col-xs-12 col-md-12 col-sm-12 col-lg-12">
            <Fade bottom>
              <h2
                className="contact-title mt-3 fs-2 d-flex justify-content-center fw-bolder"
                style={{ fontSize: "calc(1.275rem + 1.5vw)" }}
              >
                Get in touch
              </h2>
            </Fade>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-xs-12 col-lg-8 col-md-8 col-sm-12 mb-4">
            <div className="form-group">
              <div className="row">
                <Fade bottom>
                  <div className="col col-xs-12 col-sm-12 col-lg-12 col-md-12">
                    <textarea
                      rows="5"
                      className="form-control mb-3"
                      placeholder="Enter Message"
                      id="message"
                    ></textarea>
                  </div>
                </Fade>
              </div>
              <div className="row mb-2">
                <Fade bottom>
                  <div className="col col-xs-12 col-sm-12 col-lg-6 col-md-6 mb-2">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your name"
                      id="text-area"
                    />
                  </div>

                  <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your Email"
                      id="email"
                    />
                  </div>
                </Fade>
                <div className="row">
                  <Fade bottom>
                    <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <select className="form-control mb-3" id="reason">
                        <option>Reason 1</option>
                        <option>Reason 2</option>
                        <option>Reason 3</option>
                      </select>
                    </div>
                  </Fade>
                </div>
                <div className="row">
                  <Fade bottom>
                    <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Enter Subject"
                        id="subject"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            <Fade bottom>
              <div className="row">
                <div className="col">
                  <Buttons
                    width={"120px"}
                    className="btn"
                    name="SEND"
                  ></Buttons>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col col-sm-12 col-md-4 col-lg-4 mb-5 ml-1">
            <Fade bottom>
              <Card className=" p-4 mb-5 bg-white rounded border border-0">
                <Card.Body>
                  <Row>
                    <Card.Text>
                      {" "}
                      <p>
                        <b>
                          <MdHomeFilled /> &emsp; Koorgalli, Mysore.
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
                          <IoMdMail /> &emsp; info@qikautomation.com
                        </b>{" "}
                      </p>
                      &emsp;&emsp; Send us your query anytime!
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
