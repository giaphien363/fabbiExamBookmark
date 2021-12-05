import React from "react";
import { StyledHeader, StyledHeaderTitle } from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>
        <h1>Bookmark Management</h1>
      </StyledHeaderTitle>
    </StyledHeader>
  );
};
Header.propTypes = {};

export default Header;
