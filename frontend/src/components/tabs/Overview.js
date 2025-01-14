import React, { useState } from "react";

function Overview() {
  const [browserTabs, setBrowserTabs] = useState(["Tab 1"]);
  const [activeBrowserTab, setActiveBrowserTab] = useState("Tab 1");
  const [blogContent, setBlogContent] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addBrowserTab = () => {
    const newTabName = `Tab ${browserTabs.length + 1}`;
    setBrowserTabs([...browserTabs, newTabName]);
    setActiveBrowserTab(newTabName);
  };

  return (
    <div className="p-4">
      <div className="border-b mb-4">
        <div className="flex items-center">
          {browserTabs.map((tab) => (
            <div
              key={tab}
              className={`px-4 py-2 cursor-pointer border ${
                activeBrowserTab === tab ? "border-blue-500 bg-blue-100" : "border-transparent"
              }`}
              onClick={() => setActiveBrowserTab(tab)}
            >
              {tab}
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
      <div className="mb-6">
        <textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Write something or attach a photo..."
          className="w-full h-40 p-2 border rounded-md resize-none"
        ></textarea>
      </div>
      <div className="border-t pt-4">
        <h2 className="text-lg font-bold mb-2">Comments</h2>
        <ul className="mb-4">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2 p-2 border rounded-md">
              {comment}
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
              setComments([...comments, newComment]);
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