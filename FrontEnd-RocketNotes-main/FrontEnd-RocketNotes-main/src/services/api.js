import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-09qi.onrender.com"
});