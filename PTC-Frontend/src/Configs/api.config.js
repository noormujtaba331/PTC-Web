import axios from "axios";

// Environment variable se base URL get karna
const BASE_URL = import.meta.env.VITE_API_URL ;

// Custom Axios Instance Create Karna
const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Cookies (RefreshToken) bhejney ke liye
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;