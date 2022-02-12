import axios from 'axios';
import url from 'url';

const axiosService = axios.create({
  baseURL: url.format({
    pathname: '/api',
  }),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosService;
