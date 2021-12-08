import axios from "axios";

const baseURL = `http://127.0.0.1:8000/`;

function LoginAPI(data) {
  /**
   * param : data
   * example: {username:"admin", password:"admin"}
   *
   */
  let url = baseURL + "api/token/";
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function Register(data) {
  /**
   * param : data
   * example: {username:"admin", password:"admin",email:"admin@admin.com"}
   *
   */
  let url = baseURL + "create/user/";
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function Refresh(data) {
  /**
   * param : data
   * example: {refresh:""}
   *
   */
  let url = baseURL + "api/token/refresh/";
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

const LoginGoogle = async (accesstoken) => {
  let res = await axios.post("http://localhost:8000/login/google/", {
    access_token: accesstoken,
  });
  return await res.status;
};

export { Refresh, LoginAPI, Register, LoginGoogle };
