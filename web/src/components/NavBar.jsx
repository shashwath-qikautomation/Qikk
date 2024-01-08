import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoW from "../assets/logoFW.png";
import { routes } from "../helper/routes";
import "../styles/NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    const storedItem = localStorage.getItem("activeItem");
    return storedItem || "home";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem, location.pathname]);

  const navigateRouteTo = (path) => {
    console.log(path);
    navigate(path);
  };

  const handleClick = (link) => {
    setActiveItem(link);
  };

  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
      <Container className="gap-5">
        <Navbar.Brand
          onClick={() => {
            navigateRouteTo(routes.homePage);
          }}
        >
          <img src={logoW} alt="logo" height={"80"} width={"140"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 p-4">
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              onClick={() => {
                navigateRouteTo(routes.homePage);
                handleClick("home");
              }}
              //href={routes.homePage}
              style={{
                color: location.pathname === "/" ? "#3498db" : "inherit",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              onClick={() => {
                navigateRouteTo(routes.about);
                handleClick("about");
              }}
              //href={routes.about}

              style={{
                color: location.pathname === "/about" ? "#3498db" : "inherit",
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              // href={routes.blog}
              onClick={() => {
                navigateRouteTo(routes.blog);
                handleClick("blog");
              }}
              style={{
                color: location.pathname === "/blog" ? "#3498db" : "inherit",
              }}
            >
              Blog
            </Nav.Link>
            <NavDropdown
              className="d-flex justify-content-start"
              title="Products & Solutions"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
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
              onClick={() => {
                navigateRouteTo(routes.gallery);
                handleClick("gallery");
              }}
              style={{
                color: location.pathname === "/gallery" ? "#3498db" : "inherit",
              }}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className="nav-link d-flex justify-content-start"
              // href={routes.contact}
              onClick={() => {
                navigateRouteTo(routes.contact);
                handleClick("contact");
              }}
              style={{
                color: location.pathname === "/contact" ? "#3498db" : "inherit",
              }}
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
