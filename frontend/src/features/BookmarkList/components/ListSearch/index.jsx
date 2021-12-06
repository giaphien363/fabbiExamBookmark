import React from "react";

const ListSearch = ({ item }) => {
  return (
    <>
      <h2>Title: {item.title}</h2>
      <a href={item.url}>Go to</a>
    </>
  );
};

ListSearch.propTypes = {};

export default ListSearch;
