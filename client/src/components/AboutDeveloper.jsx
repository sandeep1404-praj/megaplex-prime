import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContext";

export default function AboutDeveloper() {
  const { content } = useContext(ContentContext);
  const developer = content?.aboutDeveloper || {};
  const stats = developer.stats || [];

  return (
    <section className="py-20 px-6 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {developer.heading || "About Our Developer"}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            {developer.description || "With years of excellence in real estate, we deliver premium projects."}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl shadow-lg p-6 text-center text-white hover:shadow-xl transition">
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-sm font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <img
          src="https://mediaassets.cbre.com/-/media/project/cbre/dotcom/americas/canada-emerald/about-us/advantage-insights/toronto-office-buildings-cn-tower-972x1296.jpg"
          alt="Developer Office"
          className="w-full rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
}

