import { useEffect } from 'react';
import { fetchData } from '../utils/helpers';

export const useFetchData = <T,>(url: string, setData: (data: T) => void) => {
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData(url);
        setData(data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchDataFromApi();
  }, [url, setData]);
};
