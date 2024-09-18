import axios from 'axios';

export const useFetch = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
