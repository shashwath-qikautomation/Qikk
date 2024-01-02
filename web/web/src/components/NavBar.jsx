import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoW from "../assets/logoW.png";
import { routes } from "../helper/routes";
//import "../styles/NavBar.css";

function NavBar() {
  //"me-auto p-5"
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styled = {
    boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
    padding: "12px 0",
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href={routes.homePage}>
          <img src={logoW} alt="logo" height={"80"} width={"140"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4 p-4">
            <Nav.Link className="nav-link" href={routes.homePage}>
              Home
            </Nav.Link>
            <Nav.Link href={routes.about}>About Us</Nav.Link>
            <Nav.Link href={routes.blog}>Blog</Nav.Link>
            <Nav.Link href={routes.product}>Products & Services</Nav.Link>
            <Nav.Link href={routes.gallery}>Gallery</Nav.Link>
            <Nav.Link href={routes.contact}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
