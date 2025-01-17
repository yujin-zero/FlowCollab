import React from "react";

function FollowingPage() {
  const following = [
    { name: "UserA", avatar: "https://via.placeholder.com/40" },
    { name: "UserB", avatar: "https://via.placeholder.com/40" },
    { name: "UserC", avatar: "https://via.placeholder.com/40" },
    { name: "UserD", avatar: "https://via.placeholder.com/40" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">FlowCollab</h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-blue-500 rounded-md text-sm hover:bg-blue-600"
        >
          Back to Main
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-semibold mb-4">Following</h1>
        <div className="bg-white rounded-md shadow p-4">
          {following.map((user, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 py-2 border-b border-gray-200 last:border-b-0"
            >
              <img
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowingPage;
