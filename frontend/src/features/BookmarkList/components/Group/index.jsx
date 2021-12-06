import React, { useState } from "react";
import {
  Button, Col, Dropdown, DropdownMenu, DropdownToggle
} from "reactstrap";
import Bookmark from "../Bookmark";
import {
  StyledCard, StyledCardBody, StyledCardFooter, StyledCardHeader, StyledCardTitle,
  StyledDiv, StyledDropdownButton
} from "./styledGroup";



const Group = ({id, groupName}) => {
  const [nameGroup, setNameGroup] = useState(groupName)
  const [editMode, setEditMode] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = ()=>{
    setDropdownOpen(!dropdownOpen)
  }
  
  const handleChange = (e)=>{
    setNameGroup(e.target.value)
  }
  const handleSubmit =()=>{
    alert(nameGroup);
    setEditMode(!editMode);
  }

  return <StyledDiv><Col xs={6}>
  <StyledCard>
    <StyledCardHeader>
           
      <div>
        {editMode || (
          <StyledCardTitle key={id} id={ id}>
          { nameGroup}
        </StyledCardTitle>
        )}
          {editMode && (
            
            <Col xs={5} style={{ display: "inline",width: "70%",}}>
              <input
              value={nameGroup}
              onChange={handleChange}
                style={{
                  backgroundColor: "red",
                  borderColor: "transparent",
                  borderBottomColor: "steelblue",
                }}
              />
              <Button onClick={handleSubmit} color="success" outline >
                Save
              </Button>
            </Col>
            
          )}
        </div>


      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle  color="" style={{position:"absolute"}}>
          <i className="fal fa-ellipsis-v-alt"></i>
        </DropdownToggle>
        <DropdownMenu>
          <StyledDropdownButton
            color="link"
            outline
            onClick={() => {
              setEditMode(!editMode);
              toggle()
            }}
          >
            Rename
          </StyledDropdownButton>
          <StyledDropdownButton color="link" outline>
            Delete
          </StyledDropdownButton>
        </DropdownMenu>
      </Dropdown>
    </StyledCardHeader>

    <StyledCardBody>
      <Bookmark key={ id} />
    </StyledCardBody>

    <StyledCardFooter color="">
      <i className="fas fa-plus">&ensp;Add a new bookmark</i>
    </StyledCardFooter>
  </StyledCard>
</Col></StyledDiv>;
};

export default Group;
