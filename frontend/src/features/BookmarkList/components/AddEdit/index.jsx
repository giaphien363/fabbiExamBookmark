import { AddEditStyled } from "./styledAddEdit";
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import { Button, FormGroup, Spinner } from "reactstrap";
import { useEffect, useRef } from "react";

import { GetBookmark } from "../../../../API/BookmarkAPI";
import SelectField from "../../../../custom-fields/SelectField";
import InputField from "../../../../custom-fields/InputField";

const AddEdit = (props) => {
  const { groupId, bookId, categoriesSelect, crudBookmark, toggleShow } = props;
  const isAddMode = !bookId;
  const formikRef = useRef();

  const initialValues = {
    title: "",
    url: "",
    category: 1,
  };

  useEffect(() => {
    if (!isAddMode) {
      GetBookmark(bookId).then((res) => {
        if (formikRef.current) {
          formikRef.current.setFieldValue("title", res["title"]);
          formikRef.current.setFieldValue("url", res["url"]);
          formikRef.current.setFieldValue("category", res["category"]);
        }
      });
    } else {
      if (groupId != null && formikRef.current) {
        formikRef.current.setFieldValue("category", groupId);
      }
    }
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    url: Yup.string().required("This field is required."),
    category: Yup.number().required("This field is required.").nullable(),
  });

  const handleSubmit = (value) => {
    if (isAddMode) {
      crudBookmark("INSERT", -1, value);
    } else {
      crudBookmark("UPDATE", bookId, value);
    }
  };

  return (
    <AddEditStyled>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <FastField
                name="title"
                component={InputField}
                label="Title"
                placeholder="Title of website..."
              />

              <FastField
                name="url"
                component={InputField}
                label="Url"
                placeholder="https://www.google.com/"
              />

              <FastField
                name="category"
                component={SelectField}
                label="Category"
                placeholder="What's your group?"
                options={categoriesSelect}
                disabled={isAddMode ? true : false}
              />

              <FormGroup
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button type="submit" color={isAddMode ? "primary" : "success"}>
                  {isSubmitting && <Spinner size="sm" />}
                  {isAddMode ? "Create" : "Update"}
                </Button>
                <Button onClick={() => toggleShow()}>Cancel</Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </AddEditStyled>
  );
};
AddEdit.propTypes = {};

export default AddEdit;
