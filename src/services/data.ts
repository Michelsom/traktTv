import { api } from "./api";
import header from "./header.json";

export async function GetMoviesItems() {
  try {
    const response = await api.get(`/movies/trending`, {
      headers: header,
    });
    console.log("response", response);
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
