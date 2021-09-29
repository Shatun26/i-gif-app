import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  responseType: 'json',
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Token ${token}`;
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export default instance;
