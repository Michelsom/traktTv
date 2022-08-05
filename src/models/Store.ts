import { MovieItem } from "./MovieItems";

export interface Store {
  movies: InitialProducts;
}
export interface InitialProducts {
  moviesItems: MovieItem[] | null;
}
