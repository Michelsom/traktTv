import { InitialProducts } from "../../models/Store";
import * as keys from "../keys";

const initialState: InitialProducts = {
  moviesItems: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case keys.SET_MOVIES: {
      return {
        ...state,
        moviesItems: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
