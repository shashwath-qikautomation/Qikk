import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import aboutSvg from "../assets/images/about.svg";
import about1Svg from "../assets/images/about1.svg";
import homeSvg from "../assets/images/homepage.svg";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Button";
import { routes } from "../helper/routes";
import "../styles/About.css";
import CardText from "react-bootstrap/esm/CardText";
import MyModal from "../components/Model.jsx";
import creativeSvg from "../assets/images/Creative.svg";
import intelliganceSvg from "../assets/images/Intelligance2.svg";
import qualitySvg from "../assets/images/Quality2.svg";
import CyientLogo from "../assets/clientsLogo/CyientDLM.png";
import TycoonLogo from "../assets/clientsLogo/Tycoon.png";
import frontlineLogo from "../assets/clientsLogo/frontline.jpg";
import vinyasLogo from "../assets/clientsLogo/vinyas.jpg";
import { FaAward } from "react-icons/fa";

function About() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow);

  const handleNavigateToContactUs = () => {
    navigate(routes.contact);
  };
  return (
    <div style={{ position: "relative", top: "50px" }}>
      <Container className="position-relative">
        <div>
          <Row className="p-5">
            <Col md={4}>
              <img style={{ width: "400px" }} src={aboutSvg} />
            </Col>
            <Col></Col>
            <Col md={7} className="text-start">
              <h1 style={{ fontSize: "50px" }} className="fw-bolder mb-3">
                We Collect High Quality Leads
              </h1>
              <p className="pt-2">
                <strong>QIK AUTOMATION</strong> MYS PRIVATE LIMITED is a
                cutting-edge startup based in Mysore, India, dedicated to
                revolutionizing the electronic manufacturing industry. With a
                strong focus on innovation, design, and technology, QIK
                AUTOMATION aims to provide comprehensive solutions for enhancing
                efficiency, productivity, and automation within the electronic
                manufacturing sector. The company specializes in the design,
                development, and manufacturing of advanced equipment and
                software solutions that streamline various manufacturing
                processes.
              </p>
              <Buttons
                name={"Contact Us"}
                onClick={handleNavigateToContactUs}
              />
            </Col>
          </Row>
        </div>
        <Row>
          <div className="p-5">
            <h1 style={{ fontSize: "40px" }} className="fs-2 mt-4 fw-bolder">
              Visit some Of Our Stuffs
            </h1>
          </div>
        </Row>
        <div>
          <Row className="m-4 p-5">
            <Col md={6}>
              <Card className="border border-0 mb-5 bg-white rounded bg-dark text-black overflow-auto">
                <Card.Img src={about1Svg} alt="Card image" />
                <Card.ImgOverlay>
                  <div className="hoover rounded  p-2 m-3 position-absolute bottom-0 ">
                    <Card.Title>
                      <h5>Mission</h5>
                    </Card.Title>
                    <Card.Text className="text-start m-2">
                      <p>
                        Our mission is to empower electronic manufacturing
                        companies with state-of-the-art technology solutions
                        that optimize production processes, reduce operational
                        costs, and enhance overall competitiveness in a rapidly
                        evolving market.
                      </p>
                    </Card.Text>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border border-0  mb-5 bg-white rounded bg-dark text-black overflow-auto">
                <Card.Img src={homeSvg} alt="Card image" />
                <Card.ImgOverlay>
                  <div className="hoover rounded p-2 m-3 position-absolute bottom-0 ">
                    <Card.Title>
                      <h5>Future Outlook</h5>
                    </Card.Title>
                    <Card.Text className="text-start m-2">
                      <p>
                        QIK AUTOMATION MYS PRIVATE LIMITED is poised for rapid
                        growth in the electronic manufacturing industry.
                      </p>
                      <Buttons
                        variant="primary"
                        onClick={() => setModalShow(true)}
                        name={"Read More"}
                      ></Buttons>
                    </Card.Text>
                    <CardText className="text-start m-2">
                      <MyModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        title="Future Outlook"
                      >
                        <p>
                          QIK AUTOMATION MYS PRIVATE LIMITED is poised for rapid
                          growth in the electronic manufacturing industry. By
                          leveraging cutting-edge technology, continuous
                          innovation, and a customer-centric approach, we aim to
                          become a global leader in providing integrated
                          solutions for electronic manufacturing processes. As
                          we expand our product portfolio and enhance our
                          software offerings, we will remain dedicated to
                          driving the industry forward through Quality,
                          efficiency, and excellence. For inquiries,
                          collaborations, or more information about QIK
                          AUTOMATION, please visit our website at
                          www.rexsatronix.com or contact us at
                          info@rexsatronix.com.
                        </p>
                      </MyModal>
                    </CardText>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <div className="p5">
            <h2 style={{ fontSize: "40px" }} className="fs-2 mt-4 fw-bolder">
              Dedicated to revolutionizing the electronic manufacturing
              industry.
            </h2>
          </div>
        </Row>
        <Row className="p-5">
          <Col md={4} className="text-center">
            <Card className="qik border border-0">
              {/* <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={qualitySvg}
                rounded
              /> */}
              <Card.Header className="border border-0">
                <FaAward size={"200px"} />
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
          </Col>
          <Col md={4} className="text-center">
            <Card className="qik border border-0">
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={intelliganceSvg}
                rounded
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
          </Col>
          <Col md={4} className="text-center">
            <Card className="qik border border-0">
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={creativeSvg}
                rounded
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
          </Col>
        </Row>
      </Container>
      <Row
        style={{ marginBottom: "80px" }}
        className="d-flex justify-content-evenly p-3 bg-body-secondary"
      >
        <Col md={2}>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={CyientLogo} />
          </div>
        </Col>

        <Col md={2}>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={TycoonLogo} />
          </div>
        </Col>
        <Col md={2}>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={frontlineLogo} />
          </div>
        </Col>
        <Col md={2}>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={vinyasLogo} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default About;
