import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

axios.interceptors.response.use(
  (response) => {
    console.log("success");
    return response;
  },
  (error) => {
    console.log("error...");
    console.log(error);
    return Promise.reject(error.message);
  }
);

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
  post: (url, body) => axios.post(url, body).then((response) => response.data),
  put: (url, body) => axios.put(url, body).then((response) => response.data),
  delete: (url) => axios.delete(url).then((response) => response.data),
};

const products = {
  list: () => methods.get("products"),
  details: (id) => methods.get(`products/${id}`),
};

const requests = {
  products,
};

export default requests;
