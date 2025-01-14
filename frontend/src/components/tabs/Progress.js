import React from "react";

function Progress() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Progress Timeline</h2>
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>
        {[
          { name: "Alice", action: "Added feature X", date: "2025-01-01" },
          { name: "Bob", action: "Fixed bug Y", date: "2025-01-02" },
          { name: "Charlie", action: "Updated documentation", date: "2025-01-03" },
        ].map((entry, index) => (
          <div
            key={index}
            className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="w-1/2 px-4">
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-bold text-gray-700">{entry.name}</h3>
                <p className="text-sm text-gray-500">{entry.action}</p>
                <p className="text-xs text-gray-400">{entry.date}</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progress;