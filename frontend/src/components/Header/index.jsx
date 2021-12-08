import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../CustomHook/useToken";
import {
  StyledColLeft,
  StyledColRight,
  StyledHeader,
  StyledLink,
} from "./StyledHeader";

const Header = () => {
  const { user, removeToken } = useToken();

  const logout = () => {
    removeToken();
  };

  return (
    <StyledHeader>
      <StyledColLeft xs="6">
        <StyledLink>
          <Link to="/">Home</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/bookmarklet">BookmarkLet</Link>
        </StyledLink>
      </StyledColLeft>

      <StyledColRight xs="6">
        {user ? (
          <>
            <StyledLink>Hello, {user}</StyledLink>
            <StyledLink>
              <a onClick={logout}>Logout</a>
            </StyledLink>
          </>
        ) : (
          <StyledLink>
            <Link to="/login">Login</Link>
          </StyledLink>
        )}
      </StyledColRight>
    </StyledHeader>
  );
};
Header.propTypes = {};

export default Header;
