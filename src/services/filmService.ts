import { usePost } from '../hooks/usePost';
import { CreateFilmObject } from '../types/Film';

export const AddFilms = (FilmObject: CreateFilmObject, endpointUrl: string) => {
  usePost(endpointUrl, FilmObject);
};
