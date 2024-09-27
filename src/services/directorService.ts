import axios from 'axios';
import { Directors } from '../types/Director';
export async function getAllDirectors(): Promise<Directors[]> {
  const response = await axios.get(import.meta.env.VITE_API_URL + '/director');
  return response.data;
}

export async function getDirectorById(id: string): Promise<Directors> {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + '/director/' + id
  );
  return response.data;
}

export async function createDirector(director: Directors): Promise<Directors> {
  const response = await axios.post(
    import.meta.env.VITE_API_URL + '/director',
    director
  );
  return response.data;
}

export async function updateDirector(director: Directors): Promise<Directors> {
  const response = await axios.put(
    import.meta.env.VITE_API_URL + '/director/' + director._id,
    director
  );
  return response.data;
}

export async function deleteDirector(id: string): Promise<Directors> {
  const response = await axios.delete(
    import.meta.env.VITE_API_URL + '/director/' + id
  );
  return response.data;
}
