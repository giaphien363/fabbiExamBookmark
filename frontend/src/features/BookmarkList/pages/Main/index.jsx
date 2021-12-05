import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import {
  DelCategory,
  GetAllCategory,
  InsertCategory,
  UpdateCategory
} from "../../../../API/CategoryAPI";
import Group from "../../components/Group";
import { StyledMain } from "./styledMain";

const Main = () => {
  const [inputGroup, setInputGroup] = useState("");
  const [tempBookmark, setTempBookmark] = useState(null);

  const [categories, setCategories] = useState([]);
  const [categoriesSelect, setCategoriesSelect] = useState([]);

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
          alert("Category name is invalid, Try again later!!!");
          return;
        } else {
          UpdateCategory(id, { categoryName: value }).then((res) => {
            alert("Update successfully!!!");
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
          alert("Delete successfully!!!");
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
  };

  return (
    <>
      <StyledMain>
        <Row>
          <Col md="8" style={{ margin: "0 auto" }}>
            <Form onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                <Input
                  type="text"
                  name="group"
                  value={inputGroup}
                  onChange={(e) => {
                    setInputGroup(e.target.value);
                  }}
                />
                <Button type="submit" color="primary">
                  Create
                </Button>
              </div>
            </Form>

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
          </Col>
        </Row>
      </StyledMain>
    </>
  );
};
Main.propTypes = {};
export default Main;
