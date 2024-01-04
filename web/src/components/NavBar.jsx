import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoW from "../assets/logoW.png";
import { routes } from "../helper/routes";
//import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const navigate = useNavigate();
  const navigateRouteTo = (path) => {
    console.log(path);
    navigate(path);
  };
  // position-fixed z-3
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setNavbarBg("yourDesiredColor"); // Set your desired background color
      } else {
        setNavbarBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
      <Container className="gap-5">
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
            <NavDropdown title="Products & Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => navigateRouteTo(routes.materialHandling)}
              >
                Material handling
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigateRouteTo(routes.smartStorage)}
              >
                Smart storage
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigateRouteTo(routes.smartInventory)}
              >
                Smart inventory
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigateRouteTo(routes.traceability)}
              >
                Traceability
              </NavDropdown.Item>
            </NavDropdown>
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
  );
}

export default NavBar;
