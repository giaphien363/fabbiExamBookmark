import React from "react";
import { StyledBookmark, StyledButton, StyledLink } from "./styledBookmark";

const Bookmark = ({ item, crudBookmark, setBookId, toggleShow }) => {
  const handleDel = () => {
    crudBookmark("DELETE", item.id);
  };

  const handleUpdate = () => {
    setBookId(item.id);
    toggleShow();
  };

  return (
    <>
      <StyledBookmark>
        <StyledLink href={item.url} target="_blank" rel="noreferrer">
          {item.title.length > 50
            ? `${item.title.substring(0, 50)} ...`
            : item.title}
        </StyledLink>
        <StyledButton
          color="danger"
          outline
          className="button2"
          onClick={handleDel}
        >
          <i className="fas fa-trash-alt"></i>
        </StyledButton>

        <StyledButton
          color="success"
          outline
          className="button1"
          onClick={handleUpdate}
        >
          <i className="fas fa-edit"></i>
        </StyledButton>
      </StyledBookmark>
    </>
  );
};

export default Bookmark;
