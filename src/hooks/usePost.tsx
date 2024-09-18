import axios from 'axios';

// Cuando se tenga los tipos de datos se pueden agregar a la función
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePost = async (url: string, data: any) => {
  const response = await axios.post(url, data);
  return response.data;
};
