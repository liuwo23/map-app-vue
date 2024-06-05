import { clientFetch } from '../clientFetch'
import type { IUserLogin, IUserRegister } from '../../interfaces/IUser'

export const loginUser = (body: IUserLogin) => {
  return clientFetch.post('user/login', body)
}
export const registerUser = (body: IUserRegister) => {
  return clientFetch.post('user/register', body)
}
export const logoutUser = () => {
  return clientFetch.get('user/logout')
}
export const refreshUserToken = () => {
  return clientFetch.get('user/refresh')
}
