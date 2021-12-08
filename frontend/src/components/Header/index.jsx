import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  StyledColLeft, StyledColRight, StyledHeader, StyledLink
} from "./StyledHeader";

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
