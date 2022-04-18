import axios from "axios";
import { getToken, setToken } from "./localStorage";
// import moment from "moment";

// const URL = "https://62515352dfa31c1fbd6c586e.mockapi.io";
const headers = () => {
  return { authorization: `Bearer ${getToken()}` };
};
axios.defaults.baseURL = "http://3.34.132.47";


// axios get api
const getAPI = async api => {
  return await axios
    .get(`${api}`, { headers: headers() })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

// axios post api
const postAPI = async (api, data = {}) => {
  return await axios
    .post(`${api}`, {...data}, {headers: headers()})
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

// axios delete api
const deleteAPI = async (api, data = {}) => {
  return await axios
    .delete(`${api}`, { headers: headers(), data })
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
    .patch(`${api}`, { headers: headers(), data })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { getAPI, postAPI, deleteAPI, patchAPI };
