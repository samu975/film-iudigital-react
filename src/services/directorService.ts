import axios from 'axios'
import { DirectorType } from '../types/Director'
export async function getAllDirectors(): Promise<DirectorType[]> {
  const response = await axios.get(import.meta.env.VITE_BACKEND_API + '/director')
  return response.data
}

export async function getDirectorById(id: string): Promise<DirectorType> {
  const response = await axios.get(import.meta.env.VITE_BACKEND_API + '/director/' + id)
  return response.data
}

export async function createDirector(director: DirectorType): Promise<DirectorType> {
  const response = await axios.post(import.meta.env.VITE_BACKEND_API + '/director', director)
  return response.data
}

export async function updateDirector(director: DirectorType): Promise<DirectorType> {
  const response = await axios.put(import.meta.env.VITE_BACKEND_API + '/director/' + director._id, director)
  return response.data
}

export async function deleteDirector(id: string): Promise<DirectorType> {
  const response = await axios.delete(import.meta.env.VITE_BACKEND_API + '/director/' + id)
  return response.data
}