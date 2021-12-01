import React from "react";
import Bookmark from "../Bookmark";

const Group = () => {
  return (
    <div style={{marginTop:'20px'}}>
      <Bookmark id='1' />
      <Bookmark id='2' />
      <Bookmark id='3' />
    </div>
  );
};

Group.propTypes = {};

export default Group;
