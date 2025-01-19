import React, { useState } from "react";

function Settings() {
  const [projectName, setProjectName] = useState("FlowCollab Project");
  const [projectDescription, setProjectDescription] = useState(
    "이것은 프로젝트 설명입니다."
  );
  const [inviteEmail, setInviteEmail] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const saveName = () => {
    setIsEditingName(false);
    alert(`프로젝트 이름이 저장되었습니다: ${projectName}`);
  };

  const saveDescription = () => {
    setIsEditingDescription(false);
    alert(`프로젝트 설명이 저장되었습니다: ${projectDescription}`);
  };

  const handleInvite = () => {
    if (!inviteEmail.trim()) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    alert(`초대장이 발송되었습니다: ${inviteEmail}`);
    setInviteEmail("");
  };

  const deleteProject = () => {
    const confirmDelete = window.confirm("정말로 이 프로젝트를 삭제하시겠습니까?");
    if (confirmDelete) {
      alert("프로젝트가 삭제되었습니다!");
      // 실제 삭제 로직을 서버 요청과 함께 추가할 수 있습니다.
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Project Name */}
      <div>
        <h2 className="text-lg font-bold mb-2">프로젝트 이름</h2>
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
                저장
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{projectName}</span>
              <button
                onClick={() => setIsEditingName(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                수정
              </button>
            </>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div>
        <h2 className="text-lg font-bold mb-2">프로젝트 설명</h2>
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
                저장
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{projectDescription}</span>
              <button
                onClick={() => setIsEditingDescription(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                수정
              </button>
            </>
          )}
        </div>
      </div>

      {/* Invite Team Member */}
      <div>
        <h2 className="text-lg font-bold mb-2">팀 멤버 초대</h2>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={handleInvite}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            초대
          </button>
        </div>
      </div>

      {/* Delete Project */}
      <div>
        <h2 className="text-lg font-bold mb-2 text-red-500">프로젝트 삭제</h2>
        <button
          onClick={deleteProject}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          프로젝트 삭제
        </button>
      </div>
    </div>
  );
}

export default Settings;
