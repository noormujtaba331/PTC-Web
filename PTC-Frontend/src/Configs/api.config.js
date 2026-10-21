import axios from "axios";

const BASE_URL = (import.meta.env.VITE_API_URL || "https://ptc-web-production.up.railway.app").replace(/\/$/, "");

console.log("VITE_API_URL from ENV:", import.meta.env.VITE_API_URL);
console.log("Final BASE_URL used:", BASE_URL);

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
