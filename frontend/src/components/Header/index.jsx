import React from "react";
import { Col, Container, Row } from "reactstrap";

const Header = () => {
  const styles = {
    col: {
      margin: "15px auto",
    },
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-between">
          <Col xs="6" style={styles.col}>
            <h3>Bookmark management!</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
Header.propTypes = {};

export default Header;
