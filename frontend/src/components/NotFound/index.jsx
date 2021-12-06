import React from "react";
import { Container } from "reactstrap";

NotFound.propTypes = {};

function NotFound() {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h3>Oopss ... Not found</h3>
      </div>
    </Container>
  );
}

export default NotFound;
