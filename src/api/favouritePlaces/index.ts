import { clientFetch } from '../clientFetch'
import type { IFavPlace, IAddFavPlace, IDeleteFavPlace } from '../../interfaces/IFavItem'
const BASE_PLACES_URL = 'points'

export const getFavouritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL)
}
export const addFavouritePlace = (body: IAddFavPlace) => {
  return clientFetch.post(BASE_PLACES_URL, body)
}
export const updateFavouritePlace = (body: IFavPlace) => {
  return clientFetch.put(BASE_PLACES_URL, body)
}
export const deleteFavouritePlaces = (body: IDeleteFavPlace) => {
  return clientFetch.delete(BASE_PLACES_URL, body)
}
