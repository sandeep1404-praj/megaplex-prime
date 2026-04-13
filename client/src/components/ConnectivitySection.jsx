import React, { useContext } from "react";
import { Plane, Train, Zap, ShoppingBag, BookOpen, Heart } from "lucide-react";
import { ContentContext } from "../context/ContentContext";

const locationIcons = {
  Plane,
  Train,
  Zap,
  ShoppingBag,
  BookOpen,
  Heart,
};

export default function ConnectivitySection() {
  const { content } = useContext(ContentContext);
  const connectivity = content?.connectivity || {};
  const locations = connectivity.locations || [];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            {connectivity.heading || "Nearby Connectivity"}
          </h2>
          <p className="text-gray-600 text-lg">
            {connectivity.subheading || "Strategically located with excellent connectivity"}
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((location, index) => {
            const IconComponent = locationIcons[location.icon] || Zap;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center transform hover:scale-105 border-t-4 border-lime-500"
              >
                <IconComponent className="w-12 h-12 text-lime-500 mx-auto mb-4" />
                <p className="font-bold text-gray-800 mb-2 text-lg">{location.name}</p>
                <p className="text-lime-600 font-semibold">{location.distance}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
