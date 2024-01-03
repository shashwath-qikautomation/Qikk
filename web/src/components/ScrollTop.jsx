import React, { Component } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const ScrollToTop = () => {
  return (
    <ScrollLink
      to="top"
      spy={true}
      smooth={true}
      duration={500}
      className="some-class"
      activeClass="some-active-class"
    >
      <FaArrowCircleUp />
    </ScrollLink>
  );
};

export default ScrollToTop;
