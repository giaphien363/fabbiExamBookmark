import React, { useEffect, useState } from "react";
import Bookmark from "../Bookmark";
import { Button, Input } from "reactstrap";
import { Modal } from "react-bootstrap";

import AddEdit from "../../components/AddEdit";
import {
  GetAllBookmark,
  DelBookmark,
  UpdateBookmark,
  InsertBookmark,
} from "../../../../API/BookmarkAPI";

const Group = ({
  id,
  cateName,
  tempBookmark,
  categoriesSelect,
  crudCategory,
  setTempBookmark,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [bookId, setBookId] = useState(null);

  const [categoryName, setCategoryName] = useState(cateName);
  const [bookmark, setBookmark] = useState([]);
  const toggleShow = () => setShowModal((prev) => !prev);

  useEffect(() => {
    GetAllBookmark(id).then((res) => {
      setBookmark(res);
    });
  }, [tempBookmark]);


  const crudBookmark = (type = null, id = -1, value = null) => {
    switch (type) {
      case "INSERT":
        InsertBookmark(value).then((res) => {
          var listCate = [...bookmark];
          listCate.push(res);
          setBookmark(listCate);
          toggleShow();
        });
        break;

      case "UPDATE":
        UpdateBookmark(id, value).then((res) => {
          var listCate = [...bookmark];
          let index = listCate.findIndex((obj) => obj.id === id);
          let oldCate = listCate[index].category;

          listCate[index].title = value.title;
          listCate[index].url = value.url;
          listCate[index].category = value.category;

          if (oldCate === value.category) {
            setBookmark(listCate);
          } else {
            setTempBookmark(listCate[index]);
            listCate.splice(index, 1);
            setBookmark(listCate);
          }
          toggleShow();
        });
        break;

      case "DELETE":
        if (id < 0) return;
        if (window.confirm("Are you sure?")) {
          DelBookmark(id).then((res) => {
            alert("Delete successfully!");
            var temp = [...bookmark];
            var listCate = temp.filter((ele) => {
              return ele.id !== id;
            });
            setBookmark(listCate);
          });
        }
        break;

      default:
        alert("Please choose option!!!");
        break;
    }
  };

  const handleUpdateCate = () => {
    crudCategory("UPDATE", id, categoryName);
    setEditMode(false);
  };

  const handleDeleteCate = () => {
    if (!window.confirm("Are you sure?")) return;
    crudCategory("DELETE", id);
  };

  return (
    <div style={{ marginTop: "20px", border: "2px solid red", padding: "5px" }}>
      <h3>id: {id}</h3>
      <div>
        {editMode || categoryName}

        {editMode && (
          <div style={{ display: "flex" }}>
            <Input
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
            <Button onClick={handleUpdateCate}>Update</Button>
          </div>
        )}
      </div>

      <Button
        color="link"
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        change
      </Button>

      <Button
        color="primary"
        onClick={() => {
          setBookId(null);
          toggleShow();
        }}
      >
        New bookmark
      </Button>

      {bookmark.length <= 0 && (
        <Button color="danger" onClick={handleDeleteCate}>
          Delete
        </Button>
      )}
      <hr />
      <div
        style={{ border: "2px solid gray", display: "flex", padding: "5px" }}
      >
        {bookmark.map((item, i) => (
          <Bookmark
            key={i}
            setBookId={setBookId}
            toggleShow={toggleShow}
            crudBookmark={crudBookmark}
            id={item["id"]}
            title={item.title}
          />
        ))}
      </div>

      {/* modal */}
      <Modal
        show={showModal}
        backdrop="static"
        keyboard={false}
        onHide={toggleShow}
      >
        <Modal.Body>
          <AddEdit
            groupId={id}
            bookId={bookId}
            categoriesSelect={categoriesSelect}
            crudBookmark={crudBookmark}
            toggleShow={toggleShow}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

Group.propTypes = {};

export default Group;
