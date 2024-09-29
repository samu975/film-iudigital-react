import { usePost } from '../hooks/usePost';
import { CreateFilmObject, Film } from '../types/Film';
import axios from 'axios';

export const AddFilms = (FilmObject: CreateFilmObject, endpointUrl: string) => {
  usePost(endpointUrl, FilmObject);
};

export const GetFilms = async (): Promise<Film[]> => {
  const response = await axios.get(import.meta.env.VITE_API_URL + '/media');
  return response.data;
}


export const GetFilmById = async (id: string): Promise<Film> => {
  const response = await axios.get(import.meta.env.VITE_API_URL + '/media/' + id);

  return response.data;;
}

export const UpdateFilm = async (FilmObject: Film, filmId:string): Promise<Film> => {
  const response = await axios.put(import.meta.env.VITE_API_URL + '/media/' + filmId, FilmObject);

  return response.data;
}

export const DeleteFilm = async (id: string) => {  
  const response = await axios.delete(import.meta.env.VITE_API_URL + '/media/' + id);
  return response;
}