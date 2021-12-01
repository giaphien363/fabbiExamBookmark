import React from "react";
import { Col, Container, Row } from "reactstrap";

Header.propTypes = {};

function Header() {
  return (
    <div>
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="/bookmark/add"
              target="_blank"
              rel="noopener noreferrer"
            >
              ADD
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
