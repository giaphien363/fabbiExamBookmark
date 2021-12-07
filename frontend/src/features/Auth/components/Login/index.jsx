import React from "react";
import { FormGroup } from "reactstrap";
import {
  StyledButton,
  StyledContainer,
  StyledForgot,
  StyledInput,
  StyledLabel,
} from "./styledLogin";
import { Link } from "react-router-dom";

function Login() {
  return (
    <StyledContainer>
      <h2>Login</h2>
      <br />
      <>
        <FormGroup>
          <StyledLabel>Email</StyledLabel>
          <StyledInput placeholder="Type your email" type="email" />
        </FormGroup>

        <FormGroup>
          <StyledLabel>Password</StyledLabel>
          <StyledInput placeholder="Type your password" type="password" />
        </FormGroup>

        <StyledForgot href="#">Forgot your password?</StyledForgot>

        <StyledButton>Login</StyledButton>
        <div>
          <hr />
          <p>Or</p>
          <div>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" color="red">
              <i class="fab fa-google"></i>
            </a>
          </div>
          <hr />
        </div>

        <div>
          <p>New to Bookmark?</p>
          <h4>
            <Link to="/register">SIGN UP</Link>
          </h4>
        </div>
      </>
    </StyledContainer>
  );
}

export default Login;
