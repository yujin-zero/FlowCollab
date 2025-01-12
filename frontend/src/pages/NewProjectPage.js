import React from "react";

function NewProjectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">FlowCollab</h1>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-red-500 rounded-md text-sm hover:bg-red-600"
        >
          Cancel
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Create a New Project</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter project name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Project Description
              </label>
              <textarea
                id="projectDescription"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Enter project description"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-gray-300 rounded-md text-sm hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 rounded-md text-sm text-white hover:bg-green-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProjectPage;
