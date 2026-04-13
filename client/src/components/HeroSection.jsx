import React, { useContext } from "react";
import { MapPin } from "lucide-react";
import { ContentContext } from "../context/ContentContext";

export default function HeroSection() {
  const { content } = useContext(ContentContext);
  const hero = content?.hero || {};

  return (
    <section className="bg-[#f7f9f9] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT - IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Building"
            className="rounded-2xl shadow-xl"
          />

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
              20+ Podium Luxurious Amenities
            </span>
            <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
              Spacious Balcony Homes
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <p className="text-sm tracking-widest text-orange-600 font-bold">
            THINKING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            OF A FANTASTIC VICINITY?
          </h1>

          {/* Branding */}
          <div className="text-center border-y py-6 mb-6">
            <p className="text-gray-500 text-sm">Vighnaharta</p>
            <h2 className="text-6xl md:text-7xl font-light tracking-widest">
              INFINITY
            </h2>
            <div className="flex justify-center items-center gap-2 mt-2">
              <div className="h-[1px] w-10 bg-gray-400" />
              <span>◆</span>
              <div className="h-[1px] w-10 bg-gray-400" />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-white p-5 rounded-xl shadow border-t-4 border-lime-500">
              <p className="text-sm font-semibold">SMART 1 BHK</p>
              <p className="text-xs line-through text-gray-400">
                ₹74.99 Lacs
              </p>
              <p className="text-2xl font-bold">
                {hero.price1BHK || "₹69.99 Lacs*"}
              </p>
              <p className="text-xs text-gray-500">onwards</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow border-t-4 border-lime-500">
              <p className="text-sm font-semibold">PREMIUM 2 BHK</p>
              <p className="text-xs line-through text-gray-400">
                ₹105 Lacs
              </p>
              <p className="text-2xl font-bold">
                {hero.price2BHK || "₹96.99 Lacs*"}
              </p>
              <p className="text-xs text-gray-500">onwards</p>
            </div>

          </div>

          {/* Address */}
          <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow">
            <MapPin className="text-red-500" />
            <div>
              <p className="text-xs text-gray-500">BLDG. NO. 223/224</p>
              <p className="font-semibold text-sm">
                {hero.address ||
                  "CIRCLE: KANNAMWAR NAGAR 1, VIKHROLI (EAST)"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}