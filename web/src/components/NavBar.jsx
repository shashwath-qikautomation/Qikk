import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoW from "../assets/logoW.png";
import { routes } from "../helper/routes";
//import "../styles/NavBar.css";
import Fade from "react-reveal/Fade";

function NavBar() {
  //"me-auto p-5"

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href={routes.homePage}>
          <img src={logoW} alt="logo" height={"80"} width={"140"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4 p-4">
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              href={routes.homePage}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              href={routes.about}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              href={routes.blog}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              href={routes.product}
            >
              Products & Services
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              href={routes.gallery}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              href={routes.contact}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
