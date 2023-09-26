import axios from 'axios';

const api = axios.create({
  timeout: 10000
});

let apiController = new AbortController();

api.interceptors.request.use(
  config => {
    apiController = new AbortController();
    config.signal = apiController.signal;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export { api, apiController };
