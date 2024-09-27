import { create } from 'zustand';
import { Directors } from '../types/Director';

interface DirectorState {
  directors: Directors[];
  directorsLenght: number;
  setDirectors: (directors: Directors[]) => void;
}

export const useDirectorStore = create<DirectorState>((set) => ({
  directors: [],
  directorsLenght: 0,
  setDirectors: (directors: Directors[]) =>
    set({ directors, directorsLenght: directors.length }),
}));
