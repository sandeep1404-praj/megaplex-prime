import React from "react";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                MEGAPLEX INFINITY
              </span>
            </div>
            <p className="text-gray-400 text-sm">Premium Residential Living</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-4 text-cyan-400">Quick Links</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">About Project</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Amenities</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Floor Plans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-4 text-cyan-400">Contact</p>
            <p className="text-sm text-gray-400 mb-2">Email: info@megaplex.com</p>
            <p className="text-sm text-gray-400 mb-2">Phone: +91 98765 43210</p>
            <p className="text-sm text-gray-400">Address: Kannamwar Nagar, Vikhroli (E)</p>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold mb-4 text-cyan-400">Follow Us</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition">Facebook</a>
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition">Twitter</a>
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition">Instagram</a>
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-gray-500 text-sm">
          © 2024 Megaplex Prime. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
