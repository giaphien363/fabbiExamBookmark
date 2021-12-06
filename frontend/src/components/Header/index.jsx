import React from "react";
import { StyledHeader, StyledHeaderTitle } from "./StyledHeader";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation()["pathname"];
  return (
    <StyledHeader>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          </ul>
        </div>
      </nav>
      {location == "/bookmark" && (
        <StyledHeaderTitle>
          <h1>Bookmark Management</h1>
        </StyledHeaderTitle>
      )}
    </StyledHeader>
  );
};
Header.propTypes = {};

export default Header;
