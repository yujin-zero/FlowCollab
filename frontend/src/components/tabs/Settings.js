import React from "react";

function Settings() {
  return (
    <div className="p-4 space-y-6">
      <div>
        <h2 className="text-lg font-bold mb-2">Project Name</h2>
        <input
          type="text"
          value="FlowCollab Project"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Project Description</h2>
        <textarea
          value="This is a project description."
          className="w-full p-2 border rounded-md resize-none"
        ></textarea>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Invite Team Member</h2>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 p-2 border rounded-md"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Invite
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2 text-red-500">Delete Project</h2>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Delete Project
        </button>
      </div>
    </div>
  );
}

export default Settings;
