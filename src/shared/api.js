import axios from "axios";
import { getToken } from "./localStorage";
// import moment from "moment";

const URL = "http://3.34.129.39";

const headers = () => {
  return { Authorization: `Bearer ${getToken()}` };
};

// axios get api
const getAPI = async (api) => {
  return await axios
    .get(`${URL}${api}`, { headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

// axios post api
const postAPI = async (api, data = {}) => {
  return await axios
    .post(`${URL}${api}`, { headers, data })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

// axios delete api
const deleteAPI = async (api, data = {}) => {
  return await axios
    .delete(`${URL}${api}`, { headers, data })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};


// axios patch api
const patchAPI = async (api, data = {}) => {
  return await axios
    .patch(`${URL}${api}`, { headers, data })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};


export { getAPI, postAPI, deleteAPI, patchAPI };