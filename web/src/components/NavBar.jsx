import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../helper/routes";
import "../styles/NavBar.css";
import logoW from "../assets/logoW.png";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return {
    /* <nav className="navbar">
        <div className="nav-container">
          <NavLink to={routes.homePage} className="nav-logo">
            <span>
              <img src={logoW} alt="logo" height={"50"} />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to={routes.homePage}
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={routes.about}
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={routes.blog}
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={routes.contact}
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <IoMdClose />
              </span>
            ) : (
              <span className="icon">
                <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
    </> */
  };
}

export default NavBar;
