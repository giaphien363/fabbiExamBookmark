import React from "react";
import { StyledBookmark, StyledButton, StyledLink } from "./styledBookmark";

const Bookmark = ({ id, title, crudBookmark, setBookId, toggleShow }) => {
  const handleDel = () => {
    crudBookmark("DELETE", id);
  };

  const handleUpdate = () => {
    setBookId(id);
    toggleShow();
  };

  return (
    <>
      <StyledBookmark>
        <StyledLink
          key={bookmark.id}
          href={bookmark.url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </StyledLink>

        <StyledButton
          color="success"
          outline
          className="button1"
          onClick={handleUpdate}
        >
          <i class="fas fa-edit"></i>
        </StyledButton>
        <StyledButton
          color="danger"
          outline
          className="button2"
          onClick={handleDel}
        >
          <i class="fas fa-trash-alt"></i>
        </StyledButton>
      </StyledBookmark>
    </>
  );
};

Bookmark.propTypes = {};

export default Bookmark;
