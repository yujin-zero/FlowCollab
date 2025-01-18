import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill의 기본 스타일

function Overview() {
  const [browserTabs, setBrowserTabs] = useState([
    { name: "Tab 1", blogContent: "", comments: [], isEditing: false }
  ]);
  const [activeBrowserTab, setActiveBrowserTab] = useState("Tab 1");
  const [newComment, setNewComment] = useState("");
  const [currentUser] = useState("Anonymous"); // Placeholder for user ID

  const addBrowserTab = () => {
    const newTabName = `Tab ${browserTabs.length + 1}`;
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
    console.log("Saving Data:", activeTabData);
    alert(`Data for ${activeBrowserTab} saved!`);
    toggleEditMode();
  };

  const activeTab = browserTabs.find((tab) => tab.name === activeBrowserTab);

  return (
    <div className="p-4">
      <div className="border-b mb-4">
        <div className="flex items-center">
          {browserTabs.map((tab) => (
            <div
              key={tab.name}
              className={`px-4 py-2 cursor-pointer border ${
                activeBrowserTab === tab.name
                  ? "border-blue-500 bg-blue-100"
                  : "border-transparent"
              }`}
              onClick={() => setActiveBrowserTab(tab.name)}
            >
              {tab.name}
            </div>
          ))}
          <button
            onClick={addBrowserTab}
            className="ml-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            + Add Tab
          </button>
        </div>
      </div>

      {activeTab.isEditing ? (
        <div className="mb-6">
          <ReactQuill
            value={activeTab.blogContent}
            onChange={(content) => updateActiveTab("blogContent", content)}
            placeholder="Write something or attach a photo..."
            className="w-full h-40"
          />
          <div className="mt-4">
            <button
              onClick={saveData}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={toggleEditMode}
              className="ml-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <div
            className="w-full h-40 p-2 border rounded-md bg-gray-100"
            dangerouslySetInnerHTML={{ __html: activeTab.blogContent }}
          ></div>
          <button
            onClick={toggleEditMode}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      )}

      <div className="border-t pt-4">
        <h2 className="text-lg font-bold mb-2">Comments</h2>
        <ul className="mb-4">
          {activeTab.comments.map((comment, index) => (
            <li key={index} className="mb-2 p-2 border rounded-md">
              <strong>{comment.user}: </strong>{comment.text}
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 p-2 border rounded-md mr-2"
          />
          <button
            onClick={() => {
              updateActiveTab("comments", [...activeTab.comments, { user: currentUser, text: newComment }]);
              setNewComment("");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overview;
