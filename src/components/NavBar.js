import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container menu">
          <div className="menuChild"></div>
          <NavLink exact to="/" className="nav-logo">
            <img className="logo" alt="" src="../group-44.svg" />
          </NavLink>
          <div className="groupParent">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div className="languageButton">
          <div className="englishParent nav-item">
            <div className="english">English</div>
            <img
              className="americanFlag1Icon"
              alt=""
              src="../american-flag1@2x.png"
            />
            <img className="groupIcon" alt="" src="../group-30.svg" />
          </div>
        </div>
            <li className="nav-item">
              <NavLink
                exact
                to="/Careers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/FAQ"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="getEarlyAccess">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <button className="groupInner" disabled>Get early access</button>
              </NavLink>
            </li>
          </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
