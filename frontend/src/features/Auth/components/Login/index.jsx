import React, { useState } from "react";
import { Roller } from "react-awesome-spinners";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { LoginAPI, LoginFacebook, LoginGoogle } from "../../../../API/AuthAPI";
import { useToken } from "../../../../CustomHook/useToken";
import {
  StyledButton,
  StyledButtonFb,
  StyledContainer,
  StyledIconFb,
  StyledInput,
  StyledLabel,
  StyledLoader,
  StyledTextFb,
  StyledWith,
} from "./styledLogin";

const clientID = process.env.REACT_APP_CLIENT_ID_GG;
const appId = process.env.REACT_APP_CLIENT_ID_FB;

function Login() {
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const [errorForm, setErrorForm] = useState("");
  const [loader, setLoader] = useState(false);

  const { setToken } = useToken();
  const history = useHistory();

  const responseGoogle = async (response) => {
    setLoader(true);
    let googleResponse = await LoginGoogle(response.accessToken);
    const data = googleResponse.data;
    const token = {
      access: data["access_token"],
      refresh: data["refresh_token"],
      username: data["user"]["last_name"] + " " + data["user"]["first_name"],
    };
    setToken(token);
    // loader spinner :false
    history.replace("/");
  };

  const responseFacebook = async (response) => {
    setLoader(true);
    let fbResponse = await LoginFacebook(response.accessToken);

    const data = fbResponse.data;
    const token = {
      access: data["access_token"],
      refresh: data["refresh_token"],
      username: data["user"]["last_name"] + " " + data["user"]["first_name"],
    };
    setToken(token);
    // loader spinner :false
    history.replace("/");
  };

  const changeValueForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (formValue["username"].length < 3 || formValue["password"].length < 3) {
      setErrorForm("Your username or password is invalid. Please try again!");
      return;
    }

    // login via api
    LoginAPI(formValue)
      .then((res) => {
        setErrorForm("");
        setToken(res);
        history.replace("/bookmarklet");
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
          <div>
            <StyledButton type="submit">Login</StyledButton>
            {loader && (
              <StyledLoader>
                <Roller />
              </StyledLoader>
            )}
          </div>
        </Form>

        <div>
          <hr />
          <p>Or</p>

          <StyledWith>
            <GoogleLogin
              clientId={clientID}
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />

            <StyledButtonFb>
              <FacebookLogin
                textButton={
                  <div style={{ display: "flex" }}>
                    <StyledIconFb className="fab fa-facebook-f"></StyledIconFb>
                    <StyledTextFb>login with facebook</StyledTextFb>
                  </div>
                }
                appId={appId}
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </StyledButtonFb>
          </StyledWith>
          <br />
          <hr />
        </div>
        <div>
          <span>New to Bookmark? &nbsp;&nbsp;</span>
          <span>
            <Link to="/register"> SIGN UP</Link>
          </span>
        </div>
      </>
    </StyledContainer>
  );
}

export default Login;
