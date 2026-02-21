import React from "react";

export default function Sidebar({ tables, activeTable, onChange }) {
  return (
    <div className="w-64 bg-white border-r p-6 shadow-sm transition-all duration-300">
      
      {/* Title */}
      <h2 className="text-gray-500 text-sm font-bold uppercase mb-6 tracking-wider">
        Database Tables
      </h2>

      {/* Table List */}
      <ul className="space-y-3">
        {tables.map((table) => (
          <li key={table}>
            <button
              onClick={() => onChange(table)}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                activeTable === table
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-50 hover:bg-blue-100 text-gray-700"
              }`}
            >
              {table}
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}