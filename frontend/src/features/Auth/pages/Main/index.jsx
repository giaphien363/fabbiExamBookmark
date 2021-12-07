import React from "react";
import Login from "../../components/Login";
import Signin from "../../components/Signup";
import { Link, useHistory } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <Login />
      </div>
      <Link to="/auth/login">Login</Link>
    </div>
  );
};

Main.propTypes = {};
export default Main;
