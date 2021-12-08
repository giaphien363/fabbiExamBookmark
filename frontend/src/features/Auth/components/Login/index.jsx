import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { LoginAPI, LoginGoogle, LoginFacebook } from "../../../../API/AuthAPI";
import { useToken } from "../../../../CustomHook/useToken";
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledLabel,
} from "./styledLogin";

const clientID =
  "286335714917-qkb9o2eag4c1fl3g5pjll7p9tdjvdu8f.apps.googleusercontent.com";
const appId = "429007665335347";

function Login() {
  console.log("env: ", process.env.CLIENT_ID);
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const [errorForm, setErrorForm] = useState("");
  const { setToken } = useToken();
  const history = useHistory();

  const responseGoogle = async (response) => {
    let googleResponse = await LoginGoogle(response.accessToken);
    const data = googleResponse.data;
    console.log("gg: ", data);
    const token = {
      access: data["access_token"],
      refresh: data["refresh_token"],
      username: data["user"]["last_name"] + " " + data["user"]["first_name"],
    };
    setToken(token);
    history.replace("/");
  };

  const responseFacebook = async (response) => {
    let fbResponse = await LoginFacebook(response.accessToken);

    const data = fbResponse.data;
    const token = {
      access: data["access_token"],
      refresh: data["refresh_token"],
      username: data["user"]["last_name"] + " " + data["user"]["first_name"],
    };
    setToken(token);
    history.replace("/");
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
        console.log(res);
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
          <FacebookLogin
            textButton="LOGIN WITH FACEBOOK"
            appId={appId}
            fields="name,email,picture"
            callback={responseFacebook}
          />
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
