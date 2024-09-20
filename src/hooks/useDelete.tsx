import axios from 'axios';

export const useDelete = async (url: string) => {
  const response = await axios.delete(url);
  return response.data;
};
