import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import aboutSvg from "../assets/images/about.svg";
import about1Svg from "../assets/images/about1.svg";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Button";
import { routes } from "../helper/routes";
import "../styles/About.css";
import CardText from "react-bootstrap/esm/CardText";
import MyModal from "../components/Model.jsx";
import creativeSvg from "../assets/images/Creative.svg";
import intelliganceSvg from "../assets/images/Intelligance2.svg";
import CyientLogo from "../assets/clientsLogo/CyientDLM.png";
import TycoonLogo from "../assets/clientsLogo/Tycoon.png";
import frontlineLogo from "../assets/clientsLogo/frontline.jpg";
import vinyasLogo from "../assets/clientsLogo/vinyas.jpg";
import { FaAward } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Fade from "react-reveal/Fade";
import CardBody from "react-bootstrap/esm/CardBody";
import ResponsiveCollapseCard from "../components/responsiveCard";
import ResponsiveCollapseCard1 from "../components/responsiveCard1";
import { Image } from "react-bootstrap";

function About() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow);
  const width = { width: "120px" };

  const handleNavigateToContactUs = () => {
    navigate(routes.contact);
  };

  const width = {
    width: "120px",
  };

  return (
    <div style={{ position: "relative", top: "110px" }}>
      <Container className="position-relative">
        {/* <div className="header">
          <Fade bottom duration="1500">
            <Row className="d-flex justify-content-center text-center">
              <Col lg={8}>
                <div>
                  <h2
                    style={{ fontSize: "50px" }}
                    className="head fw-bolder mb-3"
                  >
                    About Us
                  </h2>
                </div>
              </Col>
            </Row>
          </Fade>
        </div> */}
        <div>
          <Fade bottom duration="1500">
            <Row className="mt-1 gap-1 p-5">
              <Col md={5} className="text-start">
                <img src={aboutSvg} />
              </Col>
              <Col></Col>
              <Col md={6} className="text-start">
                <h1 style={{ fontSize: "35px" }} className="fw-bolder mb-3">
                  We Collect High Quality Leads
                </h1>
                <p className="pt-2">
                  <strong>QIKK AUTOMATION TECHNOLOGIES</strong> PRIVATE LIMITED
                  is a cutting-edge startup based in Mysore, India, dedicated to
                  revolutionizing the electronic manufacturing industry. With a
                  strong focus on innovation, design, and technology, QIK
                  AUTOMATION aims to provide comprehensive solutions for
                  enhancing efficiency, productivity, and automation within the
                  electronic manufacturing sector. The company specializes in
                  the design, development, and manufacturing of advanced
                  equipment and software solutions that streamline various
                  manufacturing processes.
                </p>
                <Buttons
                  width={width.width}
                  name={"Contact Us"}
                  width={width.width}
                  onClick={handleNavigateToContactUs}
                />
              </Col>
            </Row>
          </Fade>
        </div>
        <Fade right duration="1500">
          <Row>
            <div className="p-5">
              <h1 style={{ fontSize: "40px" }} className="fs-2 mt-4 fw-bolder">
                Vision and Future Outlook
              </h1>
            </div>
          </Row>
        </Fade>
        <div>
          <Row className=" p-5">
            <Col md={6}>
              <Fade left duration="1500">
                <ResponsiveCollapseCard1 />
              </Fade>
            </Col>
            <Col md={6}>
              <Fade right duration="1500">
                <ResponsiveCollapseCard />
              </Fade>
            </Col>
          </Row>
        </div>
        <Fade right duration="1500">
          <Row>
            <div className="p5">
              <h1 style={{ fontSize: "40px" }} className="fs-2 mt-4 fw-bolder">
                Dedicated to revolutionizing the electronic manufacturing
                industry.
              </h1>
            </div>
          </Row>
        </Fade>
        <Row className="p-5">
          <Col md={4} className="text-center col-lg-4 col-md-6">
            <Fade left duration="1500">
              <Card className="qik border border-0">
                <Card.Header className="border border-0">
                  <FaAward
                    size={"180px"}
                    backgroundColor={"transparent"}
                    fluid
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h5>Quality</h5>
                  </Card.Title>
                  <Card.Text className="text-center">
                    We are committed to delivering products and services of the
                    highest quality, ensuring the satisfaction of our customers
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4} className="text-center col-lg-4 col-md-6">
            <Fade bottom duration="1500">
              <Card className="qik border border-0">
                <Card.Img
                  style={{ height: "170px" }}
                  variant="top"
                  src={intelliganceSvg}
                  rounded
                  fluid
                />
                <Card.Body>
                  <Card.Title>Intelligence</Card.Title>
                  <Card.Text className="text-center">
                    We aim to create solutions that are not only efficient but
                    also intelligent, capable of adapting and learning from data
                    to provide superior performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4} className="text-center col-lg-4 col-md-6">
            <Fade right duration="1500">
              <Card className="qik border border-0">
                <Card.Img
                  style={{ height: "180px" }}
                  variant="top"
                  src={creativeSvg}
                  rounded
                  fluid
                />
                <Card.Body>
                  <Card.Title>Creativity</Card.Title>
                  <Card.Text className="text-center">
                    We foster a culture of creativity and constant improvement,
                    encouraging our team to think outside the box and explore
                    novel ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Row
        style={{ marginBottom: "150px", backgroundColor: "#E9FDFD" }}
        className="d-flex justify-content-evenly p-3 "
      >
        <Col className="col-lg-2 col-md-4 col-6">
          <Fade big clear duration="2800">
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>CYIENT DLM</div>
                      <a href="https://www.cyientdlm.com/" target="blank">
                        cyientdlm.com
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={CyientLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Fade>
        </Col>

        <Col className="col-lg-2 col-md-4 col-6">
          <Fade big clear delay="500" duration="2800">
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>Tycoon Innovative Technology</div>
                      <a href="https://tycoonit.in/" target="blank">
                        tycoonit.in
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={TycoonLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Fade>
        </Col>
        <Col className="col-lg-2 col-md-4 col-6">
          <Fade big clear delay="1000" duration="2800">
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>Frontline Electronics Ltd.</div>
                      <a
                        href="http://www.frontlineelectronics.com/"
                        target="blank"
                      >
                        frontlineelectronics.com
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={frontlineLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Fade>
        </Col>
        <Col className="col-lg-2 col-md-4 col-6">
          <Fade big clear delay="1500" duration="2800">
            <div className="hoverIcon">
              <span>
                <OverlayTrigger
                  delay={{ hide: 600, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      <div>Vinyas Innovative Technologies Ltd.</div>
                      <a href="https://www.vinyasit.com/" target="blank">
                        vinyasit.com
                      </a>
                    </Tooltip>
                  )}
                  placement="top"
                >
                  <Image style={{ height: "70px" }} src={vinyasLogo} fluid />
                </OverlayTrigger>
              </span>
            </div>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}
export default About;
