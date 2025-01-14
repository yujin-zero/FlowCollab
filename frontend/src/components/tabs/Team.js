import React from "react";

function Team() {
  return (
    <div className="p-4">
      <div className="space-y-6">
        {["Alice", "Bob", "Charlie"].map((member) => (
          <div key={member} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-700">{member[0]}</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{member}</h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { title: "To Do", color: "bg-red-100" },
                  { title: "In Progress", color: "bg-yellow-100" },
                  { title: "Done", color: "bg-green-100" },
                ].map((status) => (
                  <div
                    key={status.title}
                    className={`p-4 ${status.color} border rounded-md shadow-sm`}
                  >
                    <h4 className="font-medium text-gray-700">{status.title}</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="p-2 bg-white border rounded-md shadow">Task 1</li>
                      <li className="p-2 bg-white border rounded-md shadow">Task 2</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;