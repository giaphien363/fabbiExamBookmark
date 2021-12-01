import React from "react";
import { Col, Container, Row } from "reactstrap";
import Group from "../../components/Group";
import { StyledMain } from "./styledMain";

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Row>
          <Col>
            <Group />
          </Col>
        </Row>
      </Container>
    </StyledMain>
  );
};
Main.propTypes = {};

export default Main;
