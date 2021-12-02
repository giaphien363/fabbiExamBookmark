import React from "react";
import { Button, Col, Container, Navbar, Row } from "reactstrap";
import { StyledHeader, StyledAddButton } from "./StyledHeader";

const Header = () => {
  // const styles = {
  //   col: {
  //     margin: "15px auto",
  //   },
  // };

  return (
    <Container>
      <StyledHeader>
        <h1>Bookmark Management</h1>
      </StyledHeader>
      <Row></Row>
      <StyledAddButton>
        <i class="fas fa-plus">&ensp;Add New</i>
      </StyledAddButton>
    </Container>
  );
};
Header.propTypes = {};

export default Header;
