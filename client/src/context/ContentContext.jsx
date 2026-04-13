import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/content");
      setContent(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateSection = async (sectionKey, contentValue) => {
    try {
      const response = await api.put(`/api/content/${sectionKey}`, { contentValue });
      if (response.data.success) {
        setContent((prev) => ({
          ...prev,
          [sectionKey]: contentValue,
        }));
        return { success: true };
      }
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Update failed" };
    }
  };

  return (
    <ContentContext.Provider value={{ content, loading, error, fetchContent, updateSection }}>
      {children}
    </ContentContext.Provider>
  );
};
