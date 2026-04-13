import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin, token, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 mb-4">
            <div className="animate-spin">
              <div className="w-6 h-6 border-4 border-cyan-200 border-t-white rounded-full"></div>
            </div>
          </div>
          <p className="text-gray-700 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (!admin || !token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
