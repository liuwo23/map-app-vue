import { clientFetch } from '../clientFetch';
import type { IUserLogin, IUserRegister } from '../../interfaces/IUser';

export const TOKEN_KEY = 'token';

class AuthService {
  private token: null | string;

  constructor() {
    this.token = null;
  }

  isLoggedIn() {
    return Boolean(this.token);
  }
  getToken() {
    return this.token;
  }
  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this.token = token;
  }
  clearToken() {
    this.token = null;
    localStorage.removeItem(TOKEN_KEY);
    clientFetch.defaults.headers.common = {};
  }
  async loginUser(body: IUserLogin) {
    const { data } = await clientFetch.post('user/login', body);
    const { accessToken } = data;
    this.setToken(accessToken);
  }
  async registerUser(body: IUserRegister) {
    const { data } = await clientFetch.post('user/register', body);
    const { accessToken } = data;
    this.setToken(accessToken);
  }
  async logoutUser() {
    await clientFetch.get('user/logout');
    this.clearToken();
  }
  async refreshUserToken() {
    const { data } = await clientFetch.get('user/refresh');
    const { accessToken } = data;
    this.setToken(accessToken);
  }
}

export const authService = new AuthService();
