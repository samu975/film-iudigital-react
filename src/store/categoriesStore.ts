import { create } from 'zustand';
import { Genre } from '../types/Genre';

interface CategoriesState {
  categories: Genre[];
  categoriesLength: number;
  setCategories: (categories: Genre[]) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  categoriesLength: 0,
  setCategories: (categories: Genre[]) =>
    set({ categories, categoriesLength: categories.length }),
}));
