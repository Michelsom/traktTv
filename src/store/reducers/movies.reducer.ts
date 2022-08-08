import { InitialProducts } from "../../models/Store";
import * as keys from "../keys";

const initialState: InitialProducts = {
  moviesItems: null,
  loadingMovies: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case keys.SET_MOVIES: {
      return {
        ...state,
        moviesItems: action.payload,
      };
    }
    case keys.SET_LOADING_MOVIES: {
      return {
        ...state,
        loadingMovies: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
