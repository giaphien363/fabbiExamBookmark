import { useEffect } from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

import { AddEditStyled } from "./styledAddEdit";

const AddEdit = () => {
  const { id } = useParams();

  useEffect(() => {
    let obj = id ? id : "nothing"; 
    console.log(`object: `, obj);
  });

  
  return (
    <AddEditStyled>
      <Container>
        <h1>
          this is add or edit bookmark page!
          <br />
          we will create form handle that job
        </h1>
      </Container>
    </AddEditStyled>
  );
};
AddEdit.propTypes = {};

export default AddEdit;
