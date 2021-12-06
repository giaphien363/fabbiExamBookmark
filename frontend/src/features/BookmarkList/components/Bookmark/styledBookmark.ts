import styled from "styled-components";
import { Button } from "reactstrap";

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  display: none;
  border-radius: 100%;
  border-color: transparent;
  float: right;
  margin: 0rem 0.1rem;
  padding: 0.25rem 0.5rem;
`;

export const StyledBookmark = styled.div`
  position: relative;
  padding-left: 2rem;

  &:hover {
    background-color: mintcream;
  }

  &:hover .button1 {
    display: inline;
  }

  &:hover .button2 {
    display: inline;
  }
`;
