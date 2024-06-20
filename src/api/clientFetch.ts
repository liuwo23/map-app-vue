import axios, { type AxiosRequestHeaders } from 'axios';
import { useRouter } from 'vue-router';
import { authService } from './authService';

const router = useRouter();
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
    try {
      const errorCode = error.response.status;
      if (errorCode === 401) {
        await authService.refreshUserToken();
      }
    } catch (e) {
      await router.push('/');
      return Promise.reject(e);
    }
    return Promise.reject(error);
  }
);
