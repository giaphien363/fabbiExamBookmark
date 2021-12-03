import { useState } from "react";
import { Col, Container, Row, Modal, Button, Navbar } from "reactstrap";
import Group from "../../components/Group";
import { StyledMain } from "./styledMain";

const groups = [
  { id: 1, groupName: "Bookmarks" },
  { id: 2, groupName: "Search" },
  { id: 3, groupName: "Study" },
  { id: 4, groupName: "News" },
  { id: 5, groupName: "Game" },
  { id: 6, groupName: "Movie" },
  { id: 7, groupName: "Music" },
  { id: 8, groupName: "Novel" },
];

const Main = () => {
  const [show, setShow] = useState({modal: false});

  const handleClose = () => setShow({modal:false});
  const handleShow = () => setShow({modal: true});

  

  return (
    <StyledMain>
      <Container>
        {groups.map(group => 
            <Group key={group.id} id={group.id} groupName={group.groupName} />
          )}
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
