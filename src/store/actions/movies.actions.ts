import * as keys from "../keys";
import { api } from "../../services/api";
import { Dispatch } from "redux";
import { GetMoviesItems } from "../../services/data";
import header from "../../services/header.json";

export const getMovies = () => async (dispatch: Dispatch) => {
  try {
    // dispatch({ type: keys.SET_LOADING_MOVIES, payload: true });
    // let response = await GetMoviesItems();
    const response = await api.get(`/movies/trending`, {
      headers: header,
    });
    console.log(response);
    if (response) {
      dispatch({ type: keys.SET_MOVIES, payload: response.data });
    }
  } catch (error) {
    console.log(error);
  } finally {
    // dispatch({ type: keys.SET_LOADING_MOVIES, payload: false });
  }
};
