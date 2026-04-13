import React from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="relative py-20 px-6 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop"
            alt="City Skyline"
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition cursor-pointer">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition transform shadow-2xl">
              <Play className="w-10 h-10 text-cyan-600 fill-cyan-600 ml-1" />
            </div>
          </div>
        </div>

        {/* Text Below */}
        <p className="text-center text-gray-700 text-lg font-semibold mt-8">
          Watch Project Video
        </p>
      </div>
    </section>
  );
}

