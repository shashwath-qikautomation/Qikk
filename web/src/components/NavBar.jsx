import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoW from "../assets/logoW.png";
import { routes } from "../helper/routes";
//import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const navigateRouteTo = (path) => {
    console.log(path);
    navigate(path);
  };
  // position-fixed z-3
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    console.log("scrolling");
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href={routes.homePage}>
            <img src={logoW} alt="logo" height={"80"} width={"140"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4 p-4">
              <Nav.Link
                className="nav-link d-flex justify-content-start"
                onClick={() => navigateRouteTo(routes.homePage)}
                // href={routes.homePage}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex justify-content-start"
                // href={routes.about}
                onClick={() => navigateRouteTo(routes.about)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex justify-content-start"
                // href={routes.blog}
                onClick={() => navigateRouteTo(routes.blog)}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex justify-content-start"
                // href={routes.product}
                onClick={() => navigateRouteTo(routes.product)}
              >
                Products & Services
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex justify-content-start"
                // href={routes.gallery}
                onClick={() => navigateRouteTo(routes.gallery)}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex justify-content-start"
                // href={routes.contact}
                onClick={() => navigateRouteTo(routes.contact)}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
