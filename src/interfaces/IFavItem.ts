export default interface IFavItem {
  id: number;
  img?: string;
  title: string;
  description: string;
  coordinates: [number, number];
}

export interface IAddFavPlace {
  title: string;
  description: string;
  img: string;
  coordinates: [number, number];
}
export interface IFavPlace extends IAddFavPlace {
  id: number;
}

export interface IDeleteFavPlace {
  data: Pick<IFavPlace, 'id'>;
}
