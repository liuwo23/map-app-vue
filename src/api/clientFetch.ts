import axios, { type AxiosRequestHeaders } from 'axios';
import { router } from '../router';
import { authService } from './authService';

export const clientFetch = axios.create({
  baseURL: 'https://back-for-vue.b.goit.study/'
});

clientFetch.interceptors.request.use((request) => {
  const token = authService.getToken();
  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`
    } as AxiosRequestHeaders;
  }

  return request;
});
clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error.response.statusCode;
    if (errorCode === 401) {
      try {
        await authService.refreshUserToken();
      } catch (e) {
        await router.push('/auth/login');
        return Promise.reject(e);
      }
    }

    return Promise.reject();
  }
);
