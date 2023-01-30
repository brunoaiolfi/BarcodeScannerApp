import axios from "axios";

function createApi() {
  const { ipServer } = process.env;

  const api = axios.create({
    baseURL: `http://${ipServer}:4001/`,
    timeout: 5000
  });

  return api;
}

export const api = createApi();
