import React, { useContext, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ContentContext } from "../context/ContentContext";

export default function FAQSection() {
  const { content } = useContext(ContentContext);
  const faq = content?.faq || {};
  const items = faq.items || [];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          {faq.heading || "Frequently Asked Questions"}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our project
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-cyan-50 rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-cyan-100 transition"
              >
                <p className="font-semibold text-gray-800 text-left text-lg">
                  {item.question}
                </p>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t-2 border-cyan-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
