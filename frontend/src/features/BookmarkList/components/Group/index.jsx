import React, { useEffect, useState } from "react";
import AddEdit from "../../components/AddEdit";
import { Col, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import {
  DelBookmark,
  GetAllBookmark,
  InsertBookmark,
  UpdateBookmark,
} from "../../../../API/BookmarkAPI";
import Bookmark from "../Bookmark";
import CustomModal from "../Modal";
import {
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardTitleInput,
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
      <Col md={6}>
        <StyledCard>
          <StyledCardHeader>
            {editMode || (
              <StyledCardTitle key={id} id={id}>
                {categoryName}
              </StyledCardTitle>
            )}
            {editMode && (
              <form onSubmit={handleUpdateCate} style={{ width: "100%" }}>
                <StyledCardTitleInput
                  value={categoryName}
                  autoFocus
                  onChange={handleChangeCateName}
                />
              </form>
            )}
            {editMode || (
              <Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                <DropdownToggle color="" style={{ margin: "0.3rem" }}>
                  <i className="fal fa-ellipsis-v-alt"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <StyledDropdownButton
                    color="link"
                    outline
                    onClick={() => {
                      setEditMode((prev) => !prev);
                      setDropdownOpen((prev) => !prev);
                    }}
                  >
                    Rename
                  </StyledDropdownButton>

                  {bookmark.length <= 0 && (
                    <StyledDropdownButton
                      onClick={handleDeleteCate}
                      color="link"
                      outline
                    >
                      Delete
                    </StyledDropdownButton>
                  )}
                </DropdownMenu>
              </Dropdown>
            )}
          </StyledCardHeader>

          <StyledCardBody>
            {bookmark.map((item, i) => (
              <Bookmark
                key={i}
                setBookId={setBookId}
                toggleShow={toggleShow}
                crudBookmark={crudBookmark}
                item={item}
              />
            ))}
          </StyledCardBody>

          <StyledCardFooter
            color="primary"
            onClick={() => {
              toggleShow();
            }}
          >
            <i className="fas fa-plus">&ensp;Add a new bookmark</i>
          </StyledCardFooter>
        </StyledCard>
      </Col>

      {/* modal */}

      <CustomModal
        showModal={showModal}
        toggleShow={toggleShow}
        groupId={id}
        bookId={bookId}
        listCategory={categoriesSelect}
        crudBookmark={crudBookmark}
      />
      {/* <Modal
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
      </Modal> */}
    </>
  );
};

export default Group;
