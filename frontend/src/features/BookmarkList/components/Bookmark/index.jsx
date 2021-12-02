import React from "react";
import { Row, Button, Col } from "reactstrap";
import {
  StyledLink,
  StyledButton,
  StyledBookmark,
} from "./styledBookmark";

function Bookmark() {
  const bookmark = [
    { id: 1, title: "google", url: "google.com" },
    { id: 2, title: "facebook", url: "facebook.com" },
    { id: 3, title: "instagram", url: "facebook.com" },
    { id: 4, title: "twitter", url: "facebook.com" },
    { id: 5, title: "youtube", url: "facebook.com" },
    { id: 6, title: "blog", url: "facebook.com" },
    { id: 7, title: "pinterest", url: "facebook.com" },
    { id: 8, title: "weibo", url: "facebook.com" },
  ];
  return (
    <>
      {bookmark.map((bookmark) => (
        <StyledBookmark>
          <StyledLink
            key={bookmark.id}
            href={bookmark.url}
            target="_blank"
            rel="noreferrer"
          >
            {bookmark.title}
          </StyledLink>

          <StyledButton color = 'danger' outline className="button2">
            <i class="fas fa-trash-alt"></i>
          </StyledButton>
          <StyledButton color = 'success' outline className="button1">
            <i class="fas fa-edit"></i>
          </StyledButton>
        </StyledBookmark>
      ))}
    </>
  );
}

export default Bookmark;
