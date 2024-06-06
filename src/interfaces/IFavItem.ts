export default interface IFavItem {
  id: number
  img?: string
  title: string
  description: string
  lngLat: [number, number]
}

export interface IFavPlace {
  id: string
  title: string
  description: string
  img: string
  coordinates: [number, number]
}
export interface IAddFavPlace extends Omit<IFavPlace, keyof 'id'> {}
export interface IDeleteFavPlace {
  data: Pick<IFavPlace, 'id'>
}
