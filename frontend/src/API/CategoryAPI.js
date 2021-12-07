import axios from "axios";

const baseURL = `http://127.0.0.1:8000/api/v1/category/`;

function GetAllCategory() {
  let url = baseURL;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
}

function GetCategory(id) {
  let url = baseURL + `${id}/`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
}

function InsertCategory(data) {
  /**
   * param : data
   * example: {categoryName:""}
   *
   */
  let url = baseURL;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(function (response) {
        // handle success
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
}

function UpdateCategory(id, data) {
  /**
   * param : data
   * example: {categoryName:""}
   *
   */
  let url = baseURL;
  return new Promise((resolve, reject) => {
    axios
      .put(`${url}${id}/`, data)
      .then(function (response) {
        // handle success
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
}

const DelCategory = (id) => {
  let url = baseURL;
  return new Promise((resolve, reject) => {
    axios
      .delete(`${url}${id}/`)
      .then(function (response) {
        // handle success
        resolve(response);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      });
  });
};

export {
  GetAllCategory,
  InsertCategory,
  GetCategory,
  UpdateCategory,
  DelCategory,
};
