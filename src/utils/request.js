import axios from 'axios';

const service = axios.create({
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        console.log(error.response.statusText);
        break;
      case 403:
        console.log(error.response.statusText);
        break;
      case 500:
        console.log(error.response.statusText);
        break;
      case 503:
        console.log(error.response.statusText);
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
