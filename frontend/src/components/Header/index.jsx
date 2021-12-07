import React from "react";
import {
  StyledHeader,
  StyledColRight,
  StyledColLeft,
  StyledLink,
} from "./StyledHeader";
import { useLocation, Link } from "react-router-dom";
import { Col, Container, Navbar, Row } from "reactstrap";

const Header = () => {
  const location = useLocation()["pathname"];
  return (
    <StyledHeader>
      <StyledColLeft xs="6">
        <Link to="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link to="/bookmarklet">
          <StyledLink>BookmarkLet</StyledLink>
        </Link>
      </StyledColLeft>

      <StyledColRight xs="6">
        <StyledLink>Username</StyledLink>
        <Link to="/login">
          <StyledLink>Login</StyledLink>
        </Link>
        <Link to="/#">
          <StyledLink>Logout</StyledLink>
        </Link>
      </StyledColRight>
    </StyledHeader>
  );
};
Header.propTypes = {};

export default Header;
