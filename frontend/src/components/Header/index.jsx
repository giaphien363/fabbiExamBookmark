import React from "react";
import { StyledHeader, StyledHeaderTitle } from "./StyledHeader";
import { useLocation, Link } from "react-router-dom";
import { Navbar } from "reactstrap";

const Header = () => {
  const location = useLocation()["pathname"];
  return (
    <>
      <Navbar color="info" dark expand="md" fixed="top" light>
        {" "}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={
                location == "/bookmark" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li
              className={
                location == "/bookmarklet" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/bookmarklet">
                BookmarkLet
              </Link>
            </li>

            <div style={{display:"flex", }}>
            <li
              className={location == "/login" ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            
            <li
              className={location == "/#" ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/#">
                Logout
              </Link>
            </li>
            </div>
          </ul>
        </div>
      </Navbar>
    </>
  );
};
Header.propTypes = {};

export default Header;
