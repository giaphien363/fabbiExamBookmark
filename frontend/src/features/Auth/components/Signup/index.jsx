import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { Register } from "../../../../API/AuthAPI";
import { useToken } from "../../../../CustomHook/useToken";
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledLabel,
} from "./styledSignup";

function Signup() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = useState("");
  const { setToken } = useToken();
  const history = useHistory();

  const changeValueForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Signup via api
    Register(formValue)
      .then((res) => {
        setErrorForm("");
        setToken(res);
        history.replace("/");
      })
      .catch((res) => {
        let error = res.response.data.detail;
        setErrorForm(error);
      });
  };

  return (
    <StyledContainer>
      <h2>SIGN UP</h2>
      <br />
      
      <Form onSubmit={handleSubmit}>
        {errorForm && <p className="text-danger">{errorForm}</p>}
        <FormGroup>
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            name="username"
            value={formValue["username"]}
            placeholder="Your username"
            type="text"
            onChange={changeValueForm}
            required
          />
        </FormGroup>

        <FormGroup>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            name="email"
            value={formValue["email"]}
            placeholder="Type your email"
            type="email"
            onChange={changeValueForm}
            required
          />
        </FormGroup>

        <FormGroup>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            name="password"
            value={formValue["password"]}
            placeholder="Type your password"
            type="password"
            onChange={changeValueForm}
            required
          />
        </FormGroup>

        <StyledButton>Join for free</StyledButton>
      </Form>

      <div>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </StyledContainer>
  );
}

export default Signup;
