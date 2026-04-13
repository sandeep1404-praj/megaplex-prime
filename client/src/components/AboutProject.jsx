import React, { useContext } from "react";
import { Download } from "lucide-react";
import { ContentContext } from "../context/ContentContext";

export default function AboutProject() {
  const { content } = useContext(ContentContext);
  const about = content?.aboutProject || {};

  return (
    <section className="relative bg-[#eaf4f4] py-20 px-6 overflow-hidden">

      {/* CURVED BACKGROUND */}
      <div className="absolute -left-32 top-0 w-[600px] h-[400px] bg-[#d8efef] rounded-full blur-2xl opacity-70" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT - CIRCLES */}
        <div className="relative h-[400px]">

          {/* Big */}
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Medium */}
          <div className="absolute bottom-16 right-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small */}
          <div className="absolute top-0 right-12 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            {about.heading || "About Project"}
          </h2>

          <p className="mb-4 text-gray-700">
            {about.para1 ||
              "At Vighnaharta Enclave, every detail reflects luxury and thoughtful design."}
          </p>

          <p className="mb-4 text-gray-700">
            {about.para2 ||
              "Built on comfort, protection and belonging, this is more than a home."}
          </p>

          <p className="italic text-gray-600 mb-6">
            "{about.para3 ||
              "The moment you enter, it feels like you belong."}"
          </p>

          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow">
            <Download size={18} />
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}