import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth on app mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const savedToken = localStorage.getItem("megaplex_token");
    if (savedToken) {
      try {
        const response = await api.get("/api/auth/verify");
        if (response.data.success) {
          setAdmin(response.data.admin);
          setToken(savedToken);
        }
      } catch (err) {
        localStorage.removeItem("megaplex_token");
      }
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/api/auth/login", { email, password });
      if (response.data.success) {
        localStorage.setItem("megaplex_token", response.data.token);
        setToken(response.data.token);
        setAdmin(response.data.admin);
        return { success: true };
      }
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Login failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem("megaplex_token");
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, token, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
