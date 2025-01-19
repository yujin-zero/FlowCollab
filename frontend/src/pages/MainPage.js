import React from "react";

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          FlowCollab
        </h1>
        <button
          onClick={() => (window.location.href = "/new-project")}
          className="px-4 py-2 bg-green-500 rounded-md text-sm hover:bg-green-600"
        >
          New Project
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-1/4 bg-white border-r border-gray-300 p-6">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border border-gray-300"
            />
            <h2 className="text-lg font-semibold">User Name</h2>
            <p className="text-sm text-gray-600">@username</p>
          </div>
          <div className="mt-6 space-y-4">
            <div
              className="flex justify-between py-2 border-b border-gray-200 cursor-pointer"
              onClick={() => (window.location.href = "/followers")}
            >
              <span className="text-gray-600 hover:underline">Followers</span>
              <span className="font-bold">120</span>
            </div>
            <div
              className="flex justify-between py-2 cursor-pointer"
              onClick={() => (window.location.href = "/following")}
            >
              <span className="text-gray-600 hover:underline">Following</span>
              <span className="font-bold">80</span>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Repositories</h2>
          {/* Repositories list */}
          <div className="space-y-4">
            <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200">
              <h3
                className="text-lg font-bold text-blue-600 hover:underline cursor-pointer"
                onClick={() => (window.location.href = `/project/1`)}
              >
                Project Name 1
              </h3>
              <p className="text-gray-700 text-sm">
                A detailed description of Project 1 goes here.
              </p>
            </div>
            {/* More projects */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
