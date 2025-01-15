import React, { useState } from "react";

function Settings() {
  const [projectName, setProjectName] = useState("FlowCollab Project");
  const [projectDescription, setProjectDescription] = useState(
    "This is a project description."
  );
  const [inviteEmail, setInviteEmail] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const saveName = () => {
    setIsEditingName(false);
    alert(`Project Name saved: ${projectName}`);
  };

  const saveDescription = () => {
    setIsEditingDescription(false);
    alert(`Project Description saved: ${projectDescription}`);
  };

  const handleInvite = () => {
    if (!inviteEmail.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Invitation sent to: ${inviteEmail}`);
    setInviteEmail("");
  };

  const deleteProject = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (confirmDelete) {
      alert("Project deleted!");
      // 실제 삭제 로직을 서버 요청과 함께 추가할 수 있습니다.
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Project Name */}
      <div>
        <h2 className="text-lg font-bold mb-2">Project Name</h2>
        <div className="flex items-center space-x-2">
          {isEditingName ? (
            <>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="flex-1 p-2 border rounded-md"
              />
              <button
                onClick={saveName}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{projectName}</span>
              <button
                onClick={() => setIsEditingName(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div>
        <h2 className="text-lg font-bold mb-2">Project Description</h2>
        <div className="flex items-center space-x-2">
          {isEditingDescription ? (
            <>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="flex-1 p-2 border rounded-md resize-none"
              ></textarea>
              <button
                onClick={saveDescription}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{projectDescription}</span>
              <button
                onClick={() => setIsEditingDescription(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      {/* Invite Team Member */}
      <div>
        <h2 className="text-lg font-bold mb-2">Invite Team Member</h2>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="Enter email address"
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={handleInvite}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Invite
          </button>
        </div>
      </div>

      {/* Delete Project */}
      <div>
        <h2 className="text-lg font-bold mb-2 text-red-500">Delete Project</h2>
        <button
          onClick={deleteProject}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete Project
        </button>
      </div>
    </div>
  );
}

export default Settings;
