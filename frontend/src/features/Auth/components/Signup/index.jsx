import React from "react";
import {
    FormGroup
} from "reactstrap";
import {
    StyledButton, StyledContainer, StyledForgot, StyledInput, StyledLabel
} from "./styledSignup";
import {Link} from 'react-router-dom';
import { FormGroup } from "reactstrap";
import {
  StyledButton,
  StyledContainer,
  StyledForgot,
  StyledInput,
  StyledLabel,
} from "./styledSignup";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <StyledContainer>
      <h2>SIGN UP</h2>
      <br />
      <>
        <FormGroup>
          <StyledLabel>Username</StyledLabel>
          <StyledInput placeholder="Your username" type="text" />
        </FormGroup>
        
        <FormGroup>
          <StyledLabel>Email</StyledLabel>
          <StyledInput placeholder="Type your email" type="email" />
        </FormGroup>

        <FormGroup>
          <StyledLabel>Password</StyledLabel>
          <StyledInput placeholder="Type your password" type="password" />
        </FormGroup>
        

        <StyledButton>Join for free</StyledButton>

        <div>
          <hr />
          <p>Or</p>
          <div>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" color="red">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <hr />
        </div>

        <div>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </>
    </StyledContainer>
  );
}

export default Signup;

