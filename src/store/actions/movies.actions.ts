import * as keys from "../keys";
import { api } from "../../services/api";
import axios from "axios";
import { Dispatch } from "redux";
import { GetMoviesItems } from "../../services/data";
import header from "../../services/header.json";
import { MovieItem } from "../../models/MovieItems";

export const getMovies = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: keys.SET_LOADING_MOVIES, payload: true });
    const response = await api.get(`/movies/trending`, {
      headers: header,
    });
    let movieList = [] as any;
    response.data.map(async (item: MovieItem) => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${item.movie.ids.tmdb}/images?api_key=e52c7ee37be25df847c90782cb796a64`
      );
      var resp = data.backdrops[0].file_path;
      movieList.push({ ...item, image: resp });
    });
    dispatch({ type: keys.SET_MOVIES, payload: movieList });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: keys.SET_LOADING_MOVIES, payload: false });
  }
};
