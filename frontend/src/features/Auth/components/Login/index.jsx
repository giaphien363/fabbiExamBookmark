import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { LoginAPI } from "../../../../API/AuthAPI";
import { useToken } from "../../../../CustomHook/useToken";
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledLabel
} from "./styledLogin";

const clientID =
  "286335714917-qkb9o2eag4c1fl3g5pjll7p9tdjvdu8f.apps.googleusercontent.com";

function Login() {
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const [errorForm, setErrorForm] = useState("");
  const { setToken } = useToken();
  const history = useHistory();

  const responseGoogle = async (response) => {
    console.log("response from gg:", response);
    // let googleResponse = await LoginGoogle(response.accessToken);
    // console.log(googleResponse);
  };

  const changeValueForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // login via api
    LoginAPI(formValue)
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
      <h2>Login</h2>
      <br />
      <>
        <Form onSubmit={handleSubmit}>
          {errorForm && <p className="text-danger">{errorForm}</p>}
          <FormGroup>
            <StyledLabel>Username</StyledLabel>
            <StyledInput
              name="username"
              value={formValue["username"]}
              placeholder="Type your username"
              type="text"
              onChange={changeValueForm}
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
            />
          </FormGroup>

          <StyledButton type="submit">Login</StyledButton>
        </Form>

        <div>
          <hr />
          <p>Or</p>
        </div>

        <div>
          <div>
            <GoogleLogin
              clientId={clientID}
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
          <hr />
        </div>

        <div>
          <span>New to Bookmark? </span>
          <span>
            <Link to="/register">SIGN UP</Link>
          </span>
        </div>
      </>
    </StyledContainer>
  );
}

export default Login;
