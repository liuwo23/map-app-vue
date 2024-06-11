export default interface IFavItem {
  id: string;
  img?: string;
  title: string;
  description: string;
  coordinates: [number, number] | null;
}

export interface IAddFavPlace {
  title: string;
  description: string;
  img: string;
  coordinates: [number, number];
}
export interface IFavPlace extends IAddFavPlace {
  id: string;
}

export interface IDeleteFavPlace {
  data: Pick<IFavPlace, 'id'>;
}
