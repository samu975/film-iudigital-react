import axios from 'axios'

export async function getAllDirectors() {
  console.log('aquiiii')
  console.log(process.env.VITE_BACKEND_API)
  const response = await axios.get(process.env.VITE_BACKEND_API + '/director')
  console.log(response.data)
  return response.data
}