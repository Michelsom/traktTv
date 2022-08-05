export interface MovieItem {
  index: number;
  item: item;
  separators: separators;
}
export interface separators {
  highlight: () => void;
  unhighlight: () => void;
  updateProps: () => void;
}
export interface item {
  movie: movie;
  watchers: number;
}
export interface movie {
  ids: ids;
  title: string;
  year: number;
}
export interface ids {
  imdb: string;
  slug: string;
  tmdb: number;
  trakt: number;
}
