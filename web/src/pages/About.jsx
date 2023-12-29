import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutSvg from "../assets/images/about.svg";
import Card from "react-bootstrap/Card";
import { Button } from "bootstrap";

function About() {
  return (
    <Container>
      <div>
        <Row>
          <Col md={4}>
            <img style={{ width: "300px" }} src={aboutSvg} />
          </Col>
          <Col></Col>
          <Col md={7} className="text-start">
            <h1>We Collect High Quality Leads</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, quasi vitae nostrum quis, hic quae ratione praesentium
              ipsa in atque quas error est ad! Exercitationem veniam quas in
              ducimus commodi.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <h1>Choose Your Very Best Pricing Plan</h1>
      </div>
      <div>
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={aboutSvg} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <h1>Visit some Of Our Stuffs</h1>
      </div>
      <div>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={aboutSvg} />
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={aboutSvg} />
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={aboutSvg} />
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={aboutSvg} />
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <h1>What client Say About Us</h1>
      </div>
      <div></div>
    </Container>
  );
}
export default About;
