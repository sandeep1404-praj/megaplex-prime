import React, { useState, useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function SectionEditor({ sectionKey, fields }) {
  const { content, updateSection } = useContext(ContentContext);
  const sectionData = content[sectionKey] || {};
  const [formData, setFormData] = useState(sectionData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleArrayChange = (arrayName, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleStatChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      stats: prev.stats.map((stat, i) =>
        i === index ? { ...stat, [field]: value } : stat
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await updateSection(sectionKey, formData);
    setLoading(false);

    if (result.success) {
      setMessage({ type: "success", text: "Changes saved successfully!" });
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: "error", text: result.message });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Status Message */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
            message.type === "success" ? "bg-cyan-100" : "bg-red-100"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <p className={message.type === "success" ? "text-cyan-700" : "text-red-700"}>
            {message.text}
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <div key={index}>
            {field.type === "text" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <input
                  type="text"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                />
              </div>
            )}

            {field.type === "textarea" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <textarea
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  rows="4"
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                />
              </div>
            )}

            {field.type === "array" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="space-y-2">
                  {(formData[field.name] || []).map((item, i) => (
                    <input
                      key={i}
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange(field.name, i, e.target.value)}
                      placeholder={`${field.label} ${i + 1}`}
                      className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                    />
                  ))}
                </div>
              </div>
            )}

            {field.type === "stats" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="space-y-4">
                  {(formData[field.name] || []).map((stat, i) => (
                    <div key={i} className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={stat.number}
                        onChange={(e) => handleStatChange(i, "number", e.target.value)}
                        placeholder="Number"
                        className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => handleStatChange(i, "label", e.target.value)}
                        placeholder="Label"
                        className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {field.type === "faq" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="space-y-4">
                  {(formData[field.name] || []).map((item, i) => (
                    <div key={i} className="space-y-2">
                      <input
                        type="text"
                        value={item.question}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: prev[field.name].map((faq, idx) =>
                              idx === i ? { ...faq, question: e.target.value } : faq
                            ),
                          }))
                        }
                        placeholder="Question"
                        className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                      <textarea
                        value={item.answer}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: prev[field.name].map((faq, idx) =>
                              idx === i ? { ...faq, answer: e.target.value } : faq
                            ),
                          }))
                        }
                        placeholder="Answer"
                        rows="3"
                        className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {field.type === "locations" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="space-y-4">
                  {(formData[field.name] || []).map((location, i) => (
                    <div key={i} className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={location.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: prev[field.name].map((loc, idx) =>
                              idx === i ? { ...loc, name: e.target.value } : loc
                            ),
                          }))
                        }
                        placeholder="Location Name"
                        className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                      <input
                        type="text"
                        value={location.distance}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: prev[field.name].map((loc, idx) =>
                              idx === i ? { ...loc, distance: e.target.value } : loc
                            ),
                          }))
                        }
                        placeholder="Distance (e.g., 5 km)"
                        className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                      <input
                        type="text"
                        value={location.icon}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: prev[field.name].map((loc, idx) =>
                              idx === i ? { ...loc, icon: e.target.value } : loc
                            ),
                          }))
                        }
                        placeholder="Icon (Plane, Train, etc)"
                        className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Save Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-lime-500 hover:bg-lime-600 disabled:bg-lime-400 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
