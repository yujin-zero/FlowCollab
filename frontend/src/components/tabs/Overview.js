import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill의 기본 스타일

function Overview() {
  const [browserTabs, setBrowserTabs] = useState([
    { name: "탭 1", blogContent: "", comments: [], isEditing: false }
  ]);
  const [activeBrowserTab, setActiveBrowserTab] = useState("탭 1");
  const [newComment, setNewComment] = useState("");
  const [currentUser] = useState("익명"); // 사용자 ID 자리표시자
  const previewRef = useRef(null);
  const editorRef = useRef(null);

  // 편집 중인 팀원 데이터 시뮬레이션
  const [teamEditingStatus] = useState([
    { user: "사용자 A", tab: "탭 1" },
    { user: "사용자 B", tab: "탭 2" }
  ]);

  useEffect(() => {
    // 편집기 높이를 미리보기 높이와 정확히 맞춤
    if (previewRef.current && editorRef.current) {
      const previewHeight = previewRef.current.clientHeight;
      editorRef.current.style.height = `${previewHeight}px`;
    }
  }, [browserTabs, activeBrowserTab]);

  const addBrowserTab = () => {
    const newTabName = `탭 ${browserTabs.length + 1}`;
    setBrowserTabs([
      ...browserTabs,
      { name: newTabName, blogContent: "", comments: [], isEditing: false }
    ]);
    setActiveBrowserTab(newTabName);
  };

  const updateActiveTab = (key, value) => {
    setBrowserTabs((tabs) =>
      tabs.map((tab) =>
        tab.name === activeBrowserTab ? { ...tab, [key]: value } : tab
      )
    );
  };

  const toggleEditMode = () => {
    updateActiveTab("isEditing", !activeTab.isEditing);
  };

  const saveData = () => {
    const activeTabData = browserTabs.find(
      (tab) => tab.name === activeBrowserTab
    );
    console.log("저장 데이터:", activeTabData);
    alert(`${activeBrowserTab} 데이터가 저장되었습니다!`);
    toggleEditMode();
  };

  const activeTab = browserTabs.find((tab) => tab.name === activeBrowserTab);

  const handleContextMenu = (event, tabName) => {
    event.preventDefault();
    const newName = prompt("탭의 새 이름을 입력하세요:", tabName);
    if (newName && newName.trim()) {
      setBrowserTabs((tabs) =>
        tabs.map((tab) =>
          tab.name === tabName ? { ...tab, name: newName.trim() } : tab
        )
      );
      if (activeBrowserTab === tabName) {
        setActiveBrowserTab(newName.trim());
      }
    }
  };

  return (
    <div className="p-4 relative">
      <div className="border-b mb-4">
        <div className="flex items-center">
          {browserTabs.map((tab) => (
            <div
              key={tab.name}
              className={`px-4 py-2 cursor-pointer border ${
                activeBrowserTab === tab.name
                  ? "border-blue-500 bg-blue-100"
                  : "border-transparent"
              } rounded-lg shadow-sm`}
              onClick={() => setActiveBrowserTab(tab.name)}
              onContextMenu={(e) => handleContextMenu(e, tab.name)}
            >
              {tab.name}
            </div>
          ))}
          <button
            onClick={addBrowserTab}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            + 탭 추가
          </button>
        </div>
      </div>

      {activeTab.isEditing ? (
        <div className="mb-6">
          <ReactQuill
            ref={editorRef}
            value={activeTab.blogContent}
            onChange={(content) => updateActiveTab("blogContent", content)}
            placeholder="내용을 작성하거나 사진을 첨부하세요..."
            className="w-full border rounded-lg shadow-sm"
            style={{ overflow: "hidden" }}
          />
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={saveData}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            >
              저장
            </button>
            <button
              onClick={toggleEditMode}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition"
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <div
            ref={previewRef}
            className="w-full min-h-40 p-4 border rounded-lg shadow-sm bg-gray-50"
            dangerouslySetInnerHTML={{ __html: activeTab.blogContent }}
          ></div>
          <button
            onClick={toggleEditMode}
            className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            편집
          </button>
        </div>
      )}

      <div className="border-t pt-4">
        <h2 className="text-lg font-bold mb-2">댓글</h2>
        <ul className="mb-4">
          {activeTab.comments.map((comment, index) => (
            <li key={index} className="mb-2 p-3 border rounded-lg shadow-sm bg-gray-50">
              <strong className="text-blue-600">{comment.user}:</strong> {comment.text}
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 작성하세요..."
            className="flex-1 p-3 border rounded-lg shadow-sm mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              updateActiveTab("comments", [...activeTab.comments, { user: currentUser, text: newComment }]);
              setNewComment("");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            추가
          </button>
        </div>
      </div>

      {/* 오른쪽 아래에 편집 중인 팀원 표시 */}
      <div className="fixed right-4 bottom-4 w-56 p-4 border rounded-lg shadow-lg bg-white">
        <h3 className="text-sm font-bold text-gray-800 mb-2">편집 중인 팀원🧑🏻‍💻👩🏻‍💻</h3>
        <ul className="divide-y divide-gray-200">
          {teamEditingStatus.map((status, index) => (
            <li key={index} className="py-2 text-sm text-gray-700">
              <span className="font-medium text-gray-900">{status.user}</span>: {status.tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Overview;
