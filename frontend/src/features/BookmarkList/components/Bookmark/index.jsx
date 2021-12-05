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
          key={id}
          // href={bookmark.url}
          target="_blank"
          rel="noreferrer"
        >
          {title.length > 40
            ? `${title.substring(0, 40)} ...`
            : title}
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

Bookmark.propTypes = {};

export default Bookmark;
