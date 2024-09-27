import { DateValue } from '@nextui-org/react';
import axios from 'axios';

export const parseDate = (date: DateValue) => {
  const jsDate = new Date(date.toString());
  return jsDate;
};

export const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const dateToString = (date: Date): string => {
  return new Date(date).toLocaleDateString();
}