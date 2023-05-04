import axios from "axios";

export const RestContriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
  timeout: 3000,
});

//fake api
export const fakeApi = axios.create({
  baseURL: "https://racapajole-fake-api.onrender.com",
  timeout: 6000,
});
