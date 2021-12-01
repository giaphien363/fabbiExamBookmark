import { Col, Row, Container, Button, FormGroup, Spinner } from "reactstrap";
import { useParams } from "react-router-dom";
import { FastField, Form, Formik } from "formik";

import * as Yup from "yup";
import { AddEditStyled } from "./styledAddEdit";
import SelectField from "../../../../custom-fields/SelectField";
import InputField from "../../../../custom-fields/InputField";

// fake data
const CATEGORY_OPTIONS = [
  { value: 1, label: "Default" },
  { value: 2, label: "Education" },
  { value: 3, label: "Nature" },
  { value: 4, label: "Animals" },
  { value: 5, label: "Favourite" },
];

const AddEdit = (props) => {
  const { id } = useParams();
  const isAddMode = !id;

  const initialValues = {
    title: "",
    url: "",
    categoryId: null,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    url: Yup.string().required("This field is required."),
    categoryId: Yup.number().required("This field is required.").nullable(),
  });

  const handleSubmit = (value) => {
    console.log(`value: `, { value });
  };

  return (
    <AddEditStyled>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formikProps) => {
                // do something here ...
                const { isSubmitting } = formikProps;
                // console.log({ values, errors, touched });

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
                      name="categoryId"
                      component={SelectField}
                      label="Category"
                      placeholder="What's your group category?"
                      options={CATEGORY_OPTIONS}
                    />

                    <FormGroup>
                      <Button
                        type="submit"
                        color={isAddMode ? "primary" : "success"}
                      >
                        {isSubmitting && <Spinner size="sm" />}
                        {isAddMode ? "Create bookmark" : "Update your bookmark"}
                      </Button>
                    </FormGroup>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </AddEditStyled>
  );
};
AddEdit.propTypes = {};

export default AddEdit;
