import axios from 'axios';
import { API_BASE_URL } from '@root/src/client/utils/constants';

const axiosService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosService;
