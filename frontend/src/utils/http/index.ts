import axios from "axios";
console.log("VITE_API_URL", import.meta.env.VITE_API_URL);
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

http.interceptors.response.use(
  response => response.data,
  error => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default http;
