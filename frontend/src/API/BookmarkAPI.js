import axios from "axios";

const baseURL = `http://127.0.0.1:8000/api/v1/`;

function GetAllBookmark(cateId) {
    let url = baseURL;
    return new Promise((resolve, reject) => {
        axios
            .get(`${url}bookmark/?category=${cateId}`)
            .then(function(response) {
                // handle success
                resolve(response.data);
            })
            .catch(function(error) {
                // handle error
                reject(error);
            });
    });
}

function GetBookmark(id) {
    let url = baseURL;
    return new Promise((resolve, reject) => {
        axios
            .get(`${url}bookmark/${id}/`)
            .then(function(response) {
                // handle success
                resolve(response.data);
            })
            .catch(function(error) {
                // handle error
                reject(error);
            });
    });
}

function InsertBookmark(data) {
    /**
     * param : data
     * example: {
     * title:"",
     * url: "",
     * category: 1}
     *
     */
    let url = baseURL;
    return new Promise((resolve, reject) => {
        axios
            .post(`${url}bookmark/`, data)
            .then(function(response) {
                // handle success
                resolve(response.data);
            })
            .catch(function(error) {
                // handle error
                reject(error);
            });
    });
}

function UpdateBookmark(id, data) {
    /**
     * param : data
     * example: {
     * title:"",
     * url: "",
     * category: 1}
     *
     */
    let url = baseURL;
    return new Promise((resolve, reject) => {
        axios
            .put(`${url}bookmark/${id}/`, data)
            .then(function(response) {
                // handle success
                resolve(response.data);
            })
            .catch(function(error) {
                // handle error
                reject(error);
            });
    });
}

const DelBookmark = (id) => {
    let url = baseURL;
    return new Promise((resolve, reject) => {
        axios
            .delete(`${url}bookmark/${id}/`)
            .then(function(response) {
                // handle success
                resolve(response);
            })
            .catch(function(error) {
                // handle error
                reject(error);
            });
    });
};

export {
    GetAllBookmark,
    InsertBookmark,
    GetBookmark,
    UpdateBookmark,
    DelBookmark,
};