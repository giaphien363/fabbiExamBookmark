import { useState } from "react";
import { Col, Container, Row, Modal, Button, Navbar } from "reactstrap";
import Group from "../../components/Group";
import { StyledMain } from "./styledMain";

const Main = () => {
  const [show, setShow] = useState({modal: false});

  const handleClose = () => setShow({modal:false});
  const handleShow = () => setShow({modal: true});

  return (
    <StyledMain>
      <Container>
            <Group />
        {/* test modal */}
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>

        <Modal
          show={show['modal']}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
        </Modal>
      </Container>
    </StyledMain>
  );
};
Main.propTypes = {};
export default Main;
