import React, { useEffect, useState } from "react";
import Bookmark from "../Bookmark";
import { Modal } from "react-bootstrap";

import AddEdit from "../../components/AddEdit";
import {
  GetAllBookmark,
  DelBookmark,
  UpdateBookmark,
  InsertBookmark,
} from "../../../../API/BookmarkAPI";
import {
  Button,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Input,
} from "reactstrap";
import {
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardTitle,
  StyledDiv,
  StyledDropdownButton,
} from "./styledGroup";

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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDrop = () => {
    setDropdownOpen(!dropdownOpen);
  };
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

  const handleChangeCateName = (e) => {
    setCategoryName(e.target.value);
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
    <>
      <StyledDiv>
        <Col xs={6}>
          <StyledCard>
            <StyledCardHeader>
              <div>
                {editMode || (
                  <StyledCardTitle key={id} id={id}>
                    {categoryName}
                  </StyledCardTitle>
                )}
                {editMode && (
                  <Col xs={4} style={{ display: "inline" }}>
                    <input
                      value={categoryName}
                      onChange={handleChangeCateName}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        borderBottomColor: "steelblue",
                      }}
                    />
                    <Button onClick={handleUpdateCate} color="success" outline>
                      Save
                    </Button>
                  </Col>
                )}
              </div>

              <Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                <DropdownToggle color="">
                  <i className="fal fa-ellipsis-v-alt"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <StyledDropdownButton color="link" outline>
                    Rename
                  </StyledDropdownButton>
                  <StyledDropdownButton
                    onClick={handleDeleteCate}
                    color="link"
                    outline
                  >
                    Delete
                  </StyledDropdownButton>
                </DropdownMenu>
              </Dropdown>
            </StyledCardHeader>

            <StyledCardBody>
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
            </StyledCardBody>

            <StyledCardFooter color="">
              <i className="fas fa-plus">&ensp;Add a new bookmark</i>
            </StyledCardFooter>
          </StyledCard>
        </Col>
      </StyledDiv>

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
    </>
  );
};
