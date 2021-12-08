import React from "react";
import { Modal } from "react-bootstrap";
import AddEdit from "../AddEdit";

const CustomModal = (prop) => {
  const { showModal, toggleShow, groupId, bookId, listCategory, crudBookmark } =
    prop;
  return (
    <>
      <Modal
        show={showModal}
        backdrop="static"
        keyboard={false}
        onHide={toggleShow}
      >
        <Modal.Body>
          <AddEdit
            groupId={groupId}
            bookId={bookId}
            categoriesSelect={listCategory}
            crudBookmark={crudBookmark}
            toggleShow={toggleShow}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

CustomModal.propTypes = {};

export default CustomModal;
