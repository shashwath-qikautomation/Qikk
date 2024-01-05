import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { routes } from "../helper/routes";
import Image from "react-bootstrap/Image";
import business from "../assets/images/business.svg";
import usa from "../assets/languages/usa.svg";
import china from "../assets/languages/china.svg";
import japan from "../assets/languages/japan.svg";
import thailand from "../assets/languages/thailand.svg";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#efefef",
        color: "#1c1a1a",
        fontWeight: 300,
        fontSize: "14px",
        opacity: 1,
        padding: "80px",
      }}
      className="main-footer"
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-md-3 col-sm-6">
            <Col className="text-start">
              <h1 className="fs-6 pb-3 text-black">Get In Touch</h1>
              <p>
                <IoLocationSharp /> No.22, P-3 & P-4 , Site No.97 3rd Phase
                Koorgalli Industrial Area Mysore , Karnataka - 570018
              </p>
              <p>
                <FaPhoneAlt />
                <a
                  style={{
                    color: "#3e4643",
                    textDecoration: "none",
                    paddingLeft: "10px",
                  }}
                  href="tel:+4733378901"
                >
                  +91 827 799 5300
                </a>
              </p>
            </Col>
          </div>
          <div className="col-md-3 col-sm-6">
            <Col className="text-start">
              <h1 className="fs-6 pb-3 text-black">Popular Link</h1>
              <Nav.Link className="pb-2" href={routes.about}>
                About
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.product}>
                Services
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.blog}>
                Blog
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.gallery}>
                Gallery
              </Nav.Link>
              <Nav.Link className="pb-2" href={routes.contact}>
                Contact
              </Nav.Link>
            </Col>
          </div>
          <div className="col-md-6 col-lg-3">
            <Col className="text-start">
              <h1 className="fs-6 pb-3 text-black">Gallery</h1>
              <div className="row g-2">
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
                <div className="col-4">
                  <Image
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={business}
                  />
                </div>
              </div>
              <Col className="pt-4">
                <h1 className="fs-6 pb-3 text-black">Language</h1>
                <div className="d-flex justify-content-">
                  <Image src={usa} width="20px" />
                  <Image src={china} width="20px" />
                  <Image src={japan} width="20px" />
                  <Image src={thailand} width="20px" />
                </div>
              </Col>
            </Col>
          </div>
          <div className="col-md-6 col-lg-3">
            <Col className="text-start">
              <h1 className="fs-6 pb-3 text-black">Mission</h1>
              <p>
                Our mission is to empower electronic manufacturing companies
                with state-of-the-art technology solutions that optimize
                production processes, reduce operational costs, and enhance
                overall competitiveness in a rapidly evolving market.
              </p>
            </Col>
          </div>
        </div>
        <div
          style={{ position: "relative", top: "60px" }}
          className="d-flex justify-content-center"
        >
          <p>Copyright © 2024 QikAutomation.com. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
