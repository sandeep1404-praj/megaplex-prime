import React, { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Home", "Overview", "Connectivity", "Amenities", "Floor Plans", "Developer", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-cyan-600" />
          <span className="font-bold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            MEGAPLEX
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-cyan-600 transition font-medium text-sm"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-lime-500 hover:bg-lime-600 text-white rounded-full px-6 py-2 transition transform hover:scale-105 font-semibold shadow-lg">
          Enquiry Now
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a key={link} href="#" className="text-gray-700 hover:text-lime-500 font-medium">
                {link}
              </a>
            ))}
            <button className="w-full bg-lime-500 text-white rounded-full py-2 mt-2 font-semibold hover:bg-lime-600 transition">
              Enquiry Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
