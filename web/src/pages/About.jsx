import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutSvg from "../assets/images/about.svg";
import homeSvg from "../assets/images/homepage.svg";
import businessSvg from "../assets/images/business.svg";
import logo from "../assets/logoW.png";
import Card from "react-bootstrap/Card";
import { Button } from "bootstrap";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "../helper/routes";
import "../styles/About.css";
import CardText from "react-bootstrap/esm/CardText";
import App from "../components/Model";
import MyModal from "../components/Model.jsx";

function About() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow);

  const handleNavigateToContactUs = () => {
    navigate(routes.contact);
  };
  return (
    <Container fluid xxl>
      <div>
        <Row className="p-5">
          <Col md={4}>
            <img style={{ width: "400px" }} src={aboutSvg} />
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
        <div className="p-5">
          <h1>Visit some Of Our Stuffs</h1>
        </div>
      </Row>
      <div>
        <Row className="gap-2 p-5">
          <Col>
            <Card className="shadow-lg mb-5 bg-white rounded bg-dark text-black overflow-y-auto">
              <Card.Img src={homeSvg} alt="Card image" />
              <Card.ImgOverlay>
                <div className="hoover rounded  p-2 m-3 position-absolute bottom-0 ">
                  <Card.Title>
                    {/* <h5 className=" position-absolute bottom-0 start-50 translate-middle"></h5> */}
                    <h5>Mission</h5>
                  </Card.Title>
                  <Card.Text className="text-start m-2">
                    <p>
                      Our mission is to empower electronic manufacturing
                      companies with state-of-the-art technology solutions that
                      optimize production processes, reduce operational costs,
                      and enhance overall competitiveness in a rapidly evolving
                      market.
                    </p>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-lg mb-5 bg-white rounded bg-dark text-black overflow-y-auto">
              <Card.Img src={homeSvg} alt="Card image" />
              {/* <Card.Img src={businessSvg} alt="Card image" /> */}
              <Card.ImgOverlay>
                <div className="hoover rounded p-2 m-3 position-absolute bottom-0 ">
                  <Card.Title>
                    {/* <h5 className=" position-absolute bottom-0 start-50 translate-middle"></h5> */}
                    <h5>Future Outlook</h5>
                  </Card.Title>
                  <Card.Text className="text-start m-2">
                    <p>
                      REXSATRONIX MYS PRIVATE LIMITED is poised for rapid growth
                      in the electronic manufacturing industry. We aim to become
                      a global leader in providing integrated solutions for
                      electronic manufacturing processes.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <Buttons
                      variant="primary"
                      btnClick={() => setModalShow(true)}
                      name={"Read More"}
                    ></Buttons>
                  </Card.Text>
                  <CardText className="text-start m-2">
                    <MyModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    >
                      <p>
                        REXSATRONIX MYS PRIVATE LIMITED is poised for rapid
                        growth in the electronic manufacturing industry. By
                        leveraging cutting-edge technology, continuous
                        innovation, and a customer-centric approach, we aim to
                        become a global leader in providing integrated solutions
                        for electronic manufacturing processes. As we expand our
                        product portfolio and enhance our software offerings, we
                        will remain dedicated to driving the industry forward
                        through Quality, efficiency, and excellence. For
                        inquiries, collaborations, or more information about
                        REXSATRONIX, please visit our website at
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
      <Row className="d-flex justify-content-evenly mb-5 p-2 bg-body-secondary">
        <Col>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={aboutSvg} />
          </div>
        </Col>
        {/* <Col>
          <img style={{ width: "50px" }} src={businessSvg} />
        </Col> */}
        <Col>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={homeSvg} />
          </div>
        </Col>
        <Col>
          <div className="hoverIcon">
            <img style={{ height: "70px" }} src={logo} />
          </div>
        </Col>
      </Row>
      <div> </div>
    </Container>
  );
}
export default About;
