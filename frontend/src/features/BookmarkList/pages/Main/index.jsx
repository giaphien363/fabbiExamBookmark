import React from "react";
import { Container, Row, Col } from "reactstrap";
import Group from "../Group/index";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Group />
        </Col>
        <Col>
          <Group />
        </Col>
        <Col>
          <Group />
        </Col>
      </Row>
    </Container>
  );
};
Main.propTypes = {};

export default Main;
