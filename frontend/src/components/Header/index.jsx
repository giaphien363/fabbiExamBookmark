import React from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import {
  StyledHeaderTitle,
  StyledAddButton,
  StyledInput,
  StyledHeader,
} from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>
        <h1>Bookmark Management</h1>
      </StyledHeaderTitle>
      <Col xs={4}>
        <StyledInput>
          <Input placeholder="New Category" />
          <StyledAddButton color="">
            <i class="fas fa-plus"></i>
          </StyledAddButton>
        </StyledInput>
      </Col>
    </StyledHeader>
  );
};
Header.propTypes = {};

export default Header;
