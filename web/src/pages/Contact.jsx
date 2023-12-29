import React from "react";
import style from "../styles/Contact.css" 
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Contact() {
  return (
    <Container>
     
         <h5> contact</h5>                                        {/* main Heading */}
          <h1>Contact Us</h1>
     
   

      <Row>
      <Col sm={7} className="mt-5 ml-1">
      <Row >
        <h2 style={{color:"rgba(14, 14, 122, 0.8)"}}>Get in Touch</h2>             {/* Sub Heading */}
      </Row>

     
      <Row >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={5} />                                     {/* Textarea */}
        </Form.Group>
      </Row>


       <Row >
        <Col sm={6}>
        <Form.Control sm={3}
          className="mb-3"                                                            
          type="text"
          placeholder="Enter your name"
        />
        </Col>
        <Col sm={6}>
        <Form.Control sm={3} className="mb-3" type="text" placeholder="Enter email address" />
        </Col>
        </Row>

        <Row sm={6}>
        <Form.Control 
          className="mb-3 ml-1"
          type="text"
          placeholder="Enter subject"
        />
        </Row>
           <Button className="btn" variant="outline-Primary" style={{border:"1px solid rgb(216, 34, 170)",float:"left"}}>SEND</Button>
      </Col>
      <Col sm={5} className="mt-5 ml-1">
         <card >
          <Card.Body>
              <Row>
                  {/* <i class="fa-solid fa-house"></i> */}
                  <Card.Text> <p><b>Buttonwood, California.</b></p>
                   Rosemead, CA 91770   </Card.Text>
              </Row>
              <br/>
              <Row>
              {/* <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" /> */}
                 <Card.Text><p><b>+1 253 565 2365</b></p>
                  Mon to Fri 9am to 6pm</Card.Text>
              </Row> 
              <br/>
              <Row>
              {/* <i class="fa-light fa-envelope"></i> */}
                 <Card.Text><p> <b>support@colorlib.com</b> </p>
                   Send us your query anytime!</Card.Text>
              </Row>
          </Card.Body>
         </card>
      </Col>
    </Row>
    </Container>
  );
}
export default Contact;
