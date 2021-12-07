import React from "react";
import Bookmark from "../Bookmark";
import { StyledSearch } from "./styledSearch";


const ListSearch = ({item}) => {
  // const handleDel = () => {
  //   crudBookmark("DELETE", item.id);
  // };

  // const handleUpdate = () => {
  //   setBookId(item.id);
  //   toggleShow();
  // };

  return (
    <StyledSearch>
      {/* <StyledLink href={item.url} target="_blank" rel="noreferrer">{item.title}</StyledLink>
      <StyledButtons>
      <StyledButton
          color="success"
          outline
          className="button1"
          // onClick={handleUpdate}
        >
          <i className="fas fa-edit"></i>
        </StyledButton>
        
        <StyledButton
          color="danger"
          outline
          className="button2"
          // onClick={handleDel}
        >
          <i className="fas fa-trash-alt"></i>
        </StyledButton>

        
      </StyledButtons> */}

      {/* <><StyledLink href={item.url} target="_blank" rel="noreferrer">{item.title}</StyledLink></> */}
      <Bookmark/>
    </StyledSearch>
  );
};
ListSearch.protoType ={};
export default ListSearch;
