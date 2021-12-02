import React from "react";
import {
  Card,
  CardTitle,
  Button,
  Row,
  Col,
  Container,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";

import Bookmark from "../Bookmark";

import {
  StyledCard,
  StyledCardTitle,
  StyledDiv,
  StyledCardBody,
  StyledDropdown,
  StyledCardHeader,
  StyledDropdownButton,
  StyledCardFooter,
} from "./styledGroup";

function Group() {
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
  const grouplist = groups.map((group) => (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle key={group.id} id={group.id}>
          {group.groupName}
        </StyledCardTitle>

        <UncontrolledButtonDropdown>
          <DropdownToggle color="">
            <i class="fal fa-ellipsis-v-alt"></i>
          </DropdownToggle>
          <DropdownMenu>
            <StyledDropdownButton color="danger" outline className="button2">
              <i class="fas fa-trash-alt"></i>
              Delete
            </StyledDropdownButton>
            <StyledDropdownButton color="success" outline className="button1">
              <i class="fas fa-edit"></i>
              Edit
            </StyledDropdownButton>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </StyledCardHeader>
      <StyledCardBody>
        <Bookmark key={group.id} />
      </StyledCardBody>

      <StyledCardFooter color="">
        <i class="fas fa-plus">&ensp;Add a new bookmark</i>
      </StyledCardFooter>
    </StyledCard>
  ));

  return <StyledDiv>{grouplist}</StyledDiv>;
}

export default Group;
