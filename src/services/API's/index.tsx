import axios from 'axios';

export const RestContriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  timeout: 3000,
});
