import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

http.interceptors.response.use(
  response => response,
  error => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default http;
