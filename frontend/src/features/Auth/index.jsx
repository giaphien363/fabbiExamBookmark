import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container } from "reactstrap";
import { LoginGoogle } from "../../API/AuthAPI";

const clientID =
  "286335714917-qkb9o2eag4c1fl3g5pjll7p9tdjvdu8f.apps.googleusercontent.com";

const Login = (props) => {
  const responseGoogle = async (response) => {
    let googleResponse = await LoginGoogle(response.accessToken);
    console.log(googleResponse);
  };
  return (
    <Container>
      <h3>LOGIN</h3>

      <GoogleLogin
        clientId={clientID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </Container>
  );
};

Login.propTypes = {};

export default Login;
