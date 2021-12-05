import React from "react";
import { Button } from "reactstrap";

const Bookmark = ({ id, title, crudBookmark, setBookId, toggleShow }) => {
  const handleDel = () => {
    crudBookmark("DELETE", id);
  };

  const handleUpdate = () => {
    setBookId(id);
    toggleShow();
  };

  return (
    <div style={{ border: "2px solid deeppink", padding: "5px" }}>
      <p>bookmark Id : {id}</p>
      <p>bookmark Title : {title}</p>
      <Button
        style={{ marginRight: "10px" }}
        color="success"
        onClick={handleUpdate}
      >
        Update
      </Button>

      <Button
        style={{ marginRight: "10px" }}
        color="danger"
        onClick={handleDel}
      >
        Delete
      </Button>
    </div>
  );
};

Bookmark.propTypes = {};

export default Bookmark;
