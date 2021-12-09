import { Modal } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { Ellipsis, Roller } from "react-awesome-spinners";
import { Form } from "reactstrap";
import {
  StyledLoader,
  StyledButton,
  StyledButtons,
  StyledLink,
  StyledSearch,
} from "./styledSearch";
import {
  DelBookmark,
  UpdateBookmark,
  SearchBookmark,
} from "../../../../API/BookmarkAPI";

const ListSearch = ({ inputSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [choseBook, setChoseBook] = useState({
    id: "",
    title: "",
    url: "",
    category: "",
  });

  const [resultBookmark, setResultBookmark] = useState([]);

  const searchTimeOut = useRef(null);

  useEffect(() => {
    let isSubScribe = true;

    if (isSubScribe && inputSearch) {
      if (searchTimeOut.current) {
        clearTimeout(searchTimeOut.current);
      }

      searchTimeOut.current = setTimeout(() => {
        SearchBookmark(inputSearch).then((res) => {
          setResultBookmark(res);
          setLoader(false);
        });
      }, 500);
    }

    return () => {
      isSubScribe = false;
    };
  }, [inputSearch]);

  const toggleShow = () => {
    setShowModal((pre) => !pre);
  };
  const handleDel = (id) => {
    if (id < 0) return;
    if (window.confirm("Are you sure?")) {
      DelBookmark(id).then((res) => {
        var temp = [...resultBookmark];
        var listCate = temp.filter((ele) => {
          return ele.id !== id;
        });
        setResultBookmark(listCate);
      });
    }
  };

  return (
    <>
      {loader ? (
        <div style={{display:"flex", justifyContent:"center", padding:"3rem"}}>
          <Roller />
        </div>
      ) : (
        <p>There are {resultBookmark.length} bookmarks!</p>
      )}

      {resultBookmark.map((item, i) => {
        return (
          <StyledSearch key={i}>
            <StyledLink href={item.url} target="_blank" rel="noreferrer">
              {item.title.length > 40
                ? `${item.title.substring(0, 40)} ...`
                : item.title}
            </StyledLink>
            <StyledButtons>
              <StyledButton
                color="success"
                outline
                className="button1"
                onClick={() => {
                  setChoseBook(item);
                  toggleShow();
                }}
              >
                <i className="fas fa-edit"></i>
              </StyledButton>

              <StyledButton
                color="danger"
                outline
                className="button2"
                onClick={() => {
                  handleDel(item.id);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </StyledButton>
            </StyledButtons>
          </StyledSearch>
        );
      })}
      {choseBook.id && (
        <ModalSmall
          item={choseBook}
          showModal={showModal}
          toggleShow={toggleShow}
          resultBookmark={resultBookmark}
          setResultBookmark={setResultBookmark}
        />
      )}
    </>
  );
};
ListSearch.protoType = {};

const ModalSmall = ({
  item,
  showModal,
  toggleShow,
  resultBookmark,
  setResultBookmark,
}) => {
  const [formValue, setFormValue] = useState({
    title: item.title,
    url: item.url,
  });

  useEffect(() => {
    setFormValue({
      title: item.title,
      url: item.url,
    });
  }, [item.id]);

  const handleChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValue({ ...formValue, [name]: value });
  };

  const submitFormEdit = (e) => {
    e.preventDefault();

    UpdateBookmark(item.id, formValue).then((res) => {
      var listBook = [...resultBookmark];
      let index = listBook.findIndex((obj) => obj.id === item.id);

      listBook[index].title = formValue.title;
      listBook[index].url = formValue.url;

      setResultBookmark(listBook);

      toggleShow();
    });
  };

  return (
    <Modal
      show={showModal}
      backdrop="static"
      keyboard={false}
      onHide={toggleShow}
    >
      <Modal.Header>
        <Modal.Title>Edit bookmark</Modal.Title>
      </Modal.Header>

      <Form onSubmit={submitFormEdit}>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              value={formValue["title"]}
              name="title"
              onChange={handleChangeForm}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Url</label>
            <input
              value={formValue["url"]}
              name="url"
              onChange={handleChangeForm}
              type="text"
              className="form-control"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={toggleShow}
            type="button"
            className="btn btn-primary"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ListSearch;
