import { useEffect, useState, useRef } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import {
  DelCategory,
  GetAllCategory,
  InsertCategory,
  UpdateCategory,
} from "../../../../API/CategoryAPI";
import Group from "../../components/Group";
import ListSearch from "../../components/ListSearch";
import { StyledMain } from "./styledMain";

import { SearchBookmark } from "../../../../API/BookmarkAPI";

const Main = () => {
  const [inputGroup, setInputGroup] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [tempBookmark, setTempBookmark] = useState(null);

  const [categories, setCategories] = useState([]);
  const [searchBookmark, setSearchBookmark] = useState([]);
  const [categoriesSelect, setCategoriesSelect] = useState([]);

  const typeTimeOut = useRef(null);

  useEffect(() => {
    document.title = "List Bookmark";
  }, []);

  useEffect(() => {
    GetAllCategory().then((res) => {
      const newCate = [];

      res.map((item) => {
        let subItem = {
          value: item.id,
          label: item.categoryName,
        };
        newCate.push(subItem);
        return item;
      });

      setCategoriesSelect(newCate);
      setCategories(res);
    });
  }, []);

  const checkCateNameValid = (cateName) => {
    // get array only category name
    let arrayCheck = [];
    categories.forEach((item) => {
      arrayCheck.push(item.categoryName);
    });

    if (cateName.length <= 0 || arrayCheck.includes(cateName)) {
      return false;
    }
    return true;
  };

  const crudCategory = (type = null, id = -1, value = null) => {
    switch (type) {
      case "INSERT":
        if (!checkCateNameValid(value)) {
          alert("Category name is invalid, Try again later!!!");
          return;
        } else {
          InsertCategory({ categoryName: value }).then((res) => {
            alert("Create successfully!!!");
            var listCate = [...categories];
            listCate.push(res);
            setCategories(listCate);
          });
        }
        break;

      case "UPDATE":
        if (id < 0) return;
        if (!checkCateNameValid(value)) {
          return;
        } else {
          UpdateCategory(id, { categoryName: value }).then((res) => {
            var listCate = [...categories];
            let index = listCate.findIndex((obj) => obj.id === id);

            listCate[index].categoryName = value;
            setCategories(listCate);
          });
        }
        break;

      case "DELETE":
        if (id < 0) return;
        // DelCategory

        DelCategory(id).then((res) => {
          var temp = [...categories];
          var listCate = temp.filter((ele) => {
            return ele.id !== id;
          });
          setCategories(listCate);
        });
        break;

      default:
        alert("Choose options.");
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crudCategory("INSERT", -1, inputGroup);
    setInputGroup("");
  };

  const changeInputSearch = (e) => {
    // call api here
    setInputSearch(e.target.value);
    if (e.target.value === "") {
      setSearchBookmark([]);
      return;
    }

    // clear before setTimeOut
    if (typeTimeOut.current) {
      clearTimeout(typeTimeOut.current);
    }

    typeTimeOut.current = setTimeout(() => {
      SearchBookmark(e.target.value).then((res) => {
        setSearchBookmark(res);
      });
    }, 500);
  };

  return (
    <>
      <StyledMain>
        <Row className="my-4">
          <Col md="6">
            <h2>Bookmarks</h2>
          </Col>
          <Col md="6">
            <Input
              placeholder="Search by title"
              value={inputSearch}
              onChange={changeInputSearch}
            />
          </Col>
        </Row>
        {/* if searching */}
        {searchBookmark.length > 0 && (
          <div>
            {searchBookmark.map((item, i) => (
              <ListSearch key={i} item={item} />
            ))}
          </div>
        )}

        {/* if not search */}
        {inputSearch.length > 0 || (
          <Row>
            <Col md="12">
              <Form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  float: "right",
                  width: "49%",
                }}
              >
                <Input
                  type="text"
                  name="group"
                  value={inputGroup}
                  onChange={(e) => {
                    setInputGroup(e.target.value);
                  }}
                  style={{ width: "75%" }}
                  placeholder="New group"
                />
                <Button type="submit" color="primary">
                  Create Group
                </Button>
              </Form>
            </Col>
            <Col md="12">
              <Row>
                {/* map groups */}
                {categories.map((item, i) => (
                  <Group
                    key={i}
                    cateName={item.categoryName}
                    id={item.id}
                    tempBookmark={tempBookmark}
                    categoriesSelect={categoriesSelect}
                    crudCategory={crudCategory}
                    setTempBookmark={setTempBookmark}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </StyledMain>
    </>
  );
};
Main.propTypes = {};
export default Main;
