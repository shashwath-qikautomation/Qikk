import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import aboutSvg from "../assets/images/about.svg";
import homeSvg from "../assets/images/about.svg";
import businessSvg from "../assets/images/about.svg";
import logoW from "../assets/logoW.png";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Button";
import { routes } from "../helper/routes";

function About() {
  const navigate = useNavigate();

  const handleNavigateToContactUs = () => {
    navigate(routes.contact);
  };
  return (
    <Container fluid>
      <div>
        <Row className="mb-5 p-5">
          <Col md={4}>
            <img style={{ width: "300px" }} src={aboutSvg} />
          </Col>
          <Col></Col>
          <Col md={7} className="text-start">
            <h1>We Collect High Quality Leads</h1>
            <p>
              REXSATRONIX MYS PRIVATE LIMITED is a cutting-edge startup based in
              Mysore, India, dedicated to revolutionizing the electronic
              manufacturing industry. With a strong focus on innovation, design,
              and technology, REXSATRONIX aims to provide comprehensive
              solutions for enhancing efficiency, productivity, and automation
              within the electronic manufacturing sector. The company
              specializes in the design, development, and manufacturing of
              advanced equipment and software solutions that streamline various
              manufacturing processes.
            </p>
            <Buttons name={"Contact Us"} btnClick={handleNavigateToContactUs} />
          </Col>
        </Row>
      </div>
      <Row>
        <div className="mb-4 p-5">
          <h1>Visit some Of Our Stuffs</h1>
        </div>
      </Row>
      <div>
        <Row className="gap-4 p-5">
          <Col>
            <Card className="shadow-lg p-1 mb-5 bg-white rounded bg-dark text-black">
              <Card.Img src={homeSvg} alt="Card image" />
              <Card.ImgOverlay>
                <div className="hoover">
                  <Card.Title>Mission</Card.Title>
                  <Card.Text>
                    Our mission is to empower electronic manufacturing companies
                    with state-of-the-art technology solutions that optimize
                    production processes, reduce operational costs, and enhance
                    overall competitiveness in a rapidly evolving market.
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-lg p-1 mb-5 bg-white rounded bg-dark text-black">
              <Card.Img src={homeSvg} alt="Card image" />
              {/* <Card.Img src={businessSvg} alt="Card image" /> */}
              <Card.ImgOverlay>
                <div className="hoover">
                  <Card.Title>Future Outlook</Card.Title>
                  <Card.Text>
                    REXSATRONIX MYS PRIVATE LIMITED is poised for rapid growth
                    in the electronic manufacturing industry. By leveraging
                    cutting-edge technology, continuous innovation, and a
                    customer-centric approach, we aim to become a global leader
                    in providing integrated solutions for electronic
                    manufacturing processes. As we expand our product portfolio
                    and enhance our software offerings, we will remain dedicated
                    to driving the industry forward through Quality, efficiency,
                    and excellence. For inquiries, collaborations, or more
                    information about REXSATRONIX, please visit our website at
                    www.rexsatronix.com or contact us at info@rexsatronix.com.
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          {/* <Col className="shadow-lg p-1 mb-5 bg-white rounded">
            <Card>
              <Card.Body>
                <Card.Title>Mission</Card.Title>
                <Card.Text>
                  REXSATRONIX MYS PRIVATE LIMITED is poised for rapid growth in
                  the electronic manufacturing industry. By leveraging
                  cutting-edge technology, continuous innovation, and a
                  customer-centric approach, we aim to become a global leader in
                  providing integrated solutions for electronic manufacturing
                  processes. As we expand our product portfolio and enhance our
                  software offerings, we will remain dedicated to driving the
                  industry forward through Quality, efficiency, and excellence.
                  For inquiries, collaborations, or more information about
                  REXSATRONIX, please visit our website at www.rexsatronix.com
                  or contact us at info@rexsatronix.com.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </div>
      <Row>
        <div className="mb-4 p-5">
          <h1>What client Say About Us</h1>
        </div>
      </Row>
      <Row className="d-flex justify-content-evenly mb-4 p-2 bg-dark">
        <Col>
          <img style={{ width: "50px" }} src={aboutSvg} />
        </Col>
        <Col>
          <img style={{ width: "50px" }} src={businessSvg} />
        </Col>
        <Col>
          <img style={{ width: "50px" }} src={homeSvg} />
        </Col>
        <Col>
          <img style={{ width: "50px" }} src={logoW} />
        </Col>
      </Row>
      <div></div>
    </Container>
  );
}
export default About;
