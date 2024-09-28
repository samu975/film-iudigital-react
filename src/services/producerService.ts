import axios from "axios"
import { ProducerType } from "../types/Producer"

export async function getAllProducers(): Promise<ProducerType[]> {
  const response = await axios.get(import.meta.env.VITE_API_URL + '/producer')
  return response.data
}

export async function getProducerById(id: string): Promise<ProducerType> {
  const response = await axios.get(import.meta.env.VITE_API_URL + '/producer/' + id)
  return response.data
}

export async function createProducer(producer: ProducerType): Promise<ProducerType> {
  const response = await axios.post(import.meta.env.VITE_API_URL + '/producer', producer)
  return response.data
}

export async function updateProducer(producer: ProducerType): Promise<ProducerType> {
  const response = await axios.put(import.meta.env.VITE_API_URL + '/producer/' + producer._id, producer)
  return response.data
}

export async function deleteProducer(id: string): Promise<ProducerType> {
  const response = await axios.delete(import.meta.env.VITE_API_URL + '/producer/' + id)
  return response.data
}