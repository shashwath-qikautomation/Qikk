import React from "react";
import  "../styles/Blog.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import BlogImg from "../assets/images/blog.svg";

function Blog() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3 className="blog-heading">Blog</h3>
          <h1 className="blog-heading">Our Blog Area</h1>
        </Col>

        <Col sm={8}>
          <img src={BlogImg} />
          <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
       <Col sm={8}> 
       {/* <img src={BlogImg}/> */}
       <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </Col>
      
      <Col sm={4}> 
      <Card style={{ width: '18rem', backgroundColor: "rgb(226, 226, 247)", padding: "10px",margin:"20px"}}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
        </Button>
      </InputGroup>
      <Button variant="primary" size="lg">
        SEARCH
      </Button>
      </Card>
        
        <Card  style={{ width: '18rem', backgroundColor: "rgb(226, 226, 231)", padding: "10px",margin:"20px"}}>
        <Card.Title>Category</Card.Title>
        <ListGroup style={{padding: "20px"}}>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
       </Card>
      </Col>
      
      
      <Col sm={8}> 
    
       {/* <img src={BlogImg}/> */}
       <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </Col>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "rgb(226, 226, 231)",
              padding: "10px",
              margin: "20px",
            }}
          >
            <Card.Title>Category</Card.Title>
            <ListGroup style={{ padding: "20px" }}>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Container>
  )
}

        
export default Blog;
