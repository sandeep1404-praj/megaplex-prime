import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";

export default function ConstructionUpdates() {
  const { content } = useContext(ContentContext);
  const updates = content?.constructionUpdates || {};
  const labels = updates.labels || [];

  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1513207736139-c8ae0b30cd1c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1486218119519-13f73bc2e329?w=400&h=300&fit=crop",
  ];

  return (
    <section className="py-20 px-6 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          {updates.heading || "Construction Progress"}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labels.map((label, index) => (
            <div
              key={index}
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <img
                src={images[index] || "https://via.placeholder.com/400x300"}
                alt={label}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <p className="text-white font-bold text-lg">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
