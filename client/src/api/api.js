import axios from "axios";

// Default local and deployed backend URLs
const LOCAL_BACKEND = "http://localhost:5000";
const RENDER_BACKEND = "https://megaplex-prime-sm3a.onrender.com";

// If VITE_API_URL is set (recommended), use it. Otherwise, if running on Netlify or another
// non-local host, default to the deployed Render backend. Otherwise use localhost for dev.
const inferredBase =
  import.meta.env.VITE_API_URL ||
  (typeof window !== "undefined" && window.location.hostname.includes("netlify.app")
    ? RENDER_BACKEND
    : LOCAL_BACKEND);
// Helpful runtime debug: show which API base the app will use
try {
  // eslint-disable-next-line no-console
  console.log("[megaplex] API base:", inferredBase);
} catch (e) {}

const api = axios.create({
  baseURL: inferredBase,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("megaplex_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("megaplex_token");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default api;
