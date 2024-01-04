import React from "react";
import { Container } from "react-bootstrap";
import productImg from "../assets/images/product.svg";
import Buttons from "./Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Container>
      <Card className="shadow p-4 mb-5 rounded">
        <Card.Img
          variant="top"
          src={props.productImg}
          style={{ height: "70px" }}
        />
        <Card.Title>{props.title} </Card.Title>
        <Card.Text>{props.text} </Card.Text>
        <center>
          <Buttons
            style={{ alignItems: "center" }}
            onClick={() => props.onClick(props.url)}
            height="35px"
            width="105px"
            color="blue"
            name="Read More"
          />{" "}
        </center>
      </Card>
    </Container>
  );
}

export default Cards;
