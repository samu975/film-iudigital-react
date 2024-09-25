import { create } from 'zustand';
import { Film } from '../types/Film';

interface FilmState {
  film: Film[];
  filmLenght: number;
  setFilm: (producer: Film[]) => void;
}

export const useMediaStore = create<FilmState>((set) => ({
  film: [],
  filmLenght: 0,
  setFilm: (film: Film[]) => set({ film, filmLenght: film.length }),
}));
