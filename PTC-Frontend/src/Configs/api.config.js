import 【entity-axios¦canonical_name=axios】 from "【entity-axios¦canonical_name=axios】";

// Fallback ke saath - agar ENV na mile to Railway pe jaye
const BASE_URL = (import.meta.env.VITE_API_URL || "https://ptc-web-production.up.railway.app").replace(/\/$/, "");

// Debug ke liye - build me check hoga
console.log("VITE_API_URL from ENV:", import.meta.env.VITE_API_URL);
console.log("Final BASE_URL used:", BASE_URL);

const API = 【entity-axios¦canonical_name=axios】.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
