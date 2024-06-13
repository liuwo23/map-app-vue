import { clientFetch } from '../clientFetch';
import type { IFavPlace, IAddFavPlace, IDeleteFavPlace } from '../../interfaces/IFavItem';
const BASE_PLACES_URL = 'points';

interface IServerFavPlace extends IFavPlace {
  _id: number;
}
export const getFavouritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL).then(({ data }) =>
    data.map((place: IServerFavPlace) => ({
      ...place,
      id: place._id
    }))
  );
};
export const addFavouritePlace = (body: IAddFavPlace) => {
  return clientFetch.post(BASE_PLACES_URL, body);
};
export const updateFavouritePlace = (body: IFavPlace) => {
  return clientFetch.put(BASE_PLACES_URL, body);
};
export const deleteFavouritePlaces = (id: string) => {
  return clientFetch.delete(`${BASE_PLACES_URL}/${id}`);
};
