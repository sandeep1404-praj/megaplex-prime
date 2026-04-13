import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SectionEditor from "../components/SectionEditor";
import {
  Home,
  FileText,
  Waves,
  MapPin,
  Layout,
  Zap,
  Hammer,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const { logout } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { key: "hero", label: "Hero Section", icon: Home },
    { key: "aboutProject", label: "About Project", icon: FileText },
    { key: "amenities", label: "Amenities", icon: Waves },
    { key: "connectivity", label: "Connectivity", icon: MapPin },
    { key: "floorPlans", label: "Floor Plans", icon: Layout },
    { key: "aboutDeveloper", label: "About Developer", icon: Zap },
    { key: "constructionUpdates", label: "Construction Updates", icon: Hammer },
    { key: "faq", label: "FAQ", icon: HelpCircle },
  ];

  const fieldConfigs = {
    hero: [
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "subTagline", label: "Sub Tagline", type: "text" },
      { name: "price1BHK", label: "1BHK Price", type: "text" },
      { name: "price2BHK", label: "2BHK Price", type: "text" },
      { name: "address", label: "Address", type: "textarea" },
    ],
    aboutProject: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "para1", label: "Paragraph 1", type: "textarea" },
      { name: "para2", label: "Paragraph 2", type: "textarea" },
      { name: "para3", label: "Paragraph 3", type: "textarea" },
    ],
    amenities: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "subheading", label: "Subheading", type: "text" },
      { name: "items", label: "Amenities", type: "array" },
    ],
    connectivity: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "subheading", label: "Subheading", type: "text" },
      { name: "locations", label: "Locations", type: "locations" },
    ],
    floorPlans: [
      { name: "type", label: "Type", type: "text" },
      { name: "area", label: "Area", type: "text" },
      { name: "priceText", label: "Price Text", type: "text" },
    ],
    aboutDeveloper: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "stats", label: "Stats", type: "stats" },
    ],
    constructionUpdates: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "labels", label: "Labels", type: "array" },
    ],
    faq: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "items", label: "FAQ Items", type: "faq" },
    ],
  };

  const currentSection = sections.find((s) => s.key === activeSection);
  const fields = fieldConfigs[activeSection] || [];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-cyan-700 to-cyan-800 text-white flex flex-col shadow-xl">
        {/* Logo */}
        <div className="p-6 border-b border-cyan-600">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            MEGAPLEX
          </h1>
          <p className="text-sm text-cyan-100">Admin Panel</p>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                  activeSection === section.key
                    ? "bg-cyan-500 shadow-lg"
                    : "hover:bg-cyan-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{section.label}</span>
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-cyan-600">
          <button
            onClick={() => {
              logout();
              window.location.href = "/admin/login";
            }}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition font-semibold"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {currentSection?.label}
          </h2>
          <SectionEditor sectionKey={activeSection} fields={fields} />
        </div>
      </div>
    </div>
  );
}
