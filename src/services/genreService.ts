// services/GenreService.ts

import axios from 'axios';
import { GenreType } from '../types/Genre';

// Obtener todos los géneros
export async function getAllGenres(): Promise<GenreType[]> {
  const response = await axios.get(import.meta.env.VITE_BACKEND_API + '/genre');
  return response.data;
}

// Obtener un género por ID
export async function getGenreById(id: string): Promise<GenreType> {
  const response = await axios.get(import.meta.env.VITE_BACKEND_API + '/genre/' + id);
  return response.data;
}

// Crear un nuevo género
export async function createGenre(genre: Omit<GenreType, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<GenreType> {
  const response = await axios.post(import.meta.env.VITE_BACKEND_API + '/genre', genre);
  return response.data;
}

// Actualizar un género existente
export async function updateGenre(genre: GenreType): Promise<GenreType> {
  const response = await axios.put(import.meta.env.VITE_BACKEND_API + '/genre/' + genre._id, genre);
  return response.data;
}

// Eliminar un género
export async function deleteGenre(id: string): Promise<GenreType> {
  const response = await axios.delete(import.meta.env.VITE_BACKEND_API + '/genre/' + id);
  return response.data;
}
