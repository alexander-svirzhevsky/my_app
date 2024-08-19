import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../constant/localstorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  if (token) {
    config.headers.Authorization = token;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});
