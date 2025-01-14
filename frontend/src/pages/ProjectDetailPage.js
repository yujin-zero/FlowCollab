import React, { useState } from "react";

function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
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

  const renderOverviewContent = () => (
    <div className="p-4">
      {/* Browser-like Tabs */}
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

      {/* Blog Section */}
      <div className="mb-6">
        <textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Write something or attach a photo..."
          className="w-full h-40 p-2 border rounded-md resize-none"
        ></textarea>
      </div>

      {/* Comments Section */}
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

  const renderTeamContent = () => (
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

  const renderProgressContent = () => (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Progress Timeline</h2>
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>
        {[
          { name: "Alice", action: "Added feature X", date: "2025-01-01" },
          { name: "Bob", action: "Fixed bug Y", date: "2025-01-02" },
          { name: "Charlie", action: "Updated documentation", date: "2025-01-03" },
        ].map((entry, index) => (
          <div
            key={index}
            className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="w-1/2 px-4">
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-bold text-gray-700">{entry.name}</h3>
                <p className="text-sm text-gray-500">{entry.action}</p>
                <p className="text-xs text-gray-400">{entry.date}</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverviewContent();
      case "team":
        return renderTeamContent();
      case "progress":
        return renderProgressContent();
      case "settings":
        return <div>Settings content goes here.</div>;
      default:
        return <div>Overview content goes here.</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">FlowCollab</h1>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-500 rounded-md text-sm hover:bg-gray-600"
        >
          Back
        </button>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md">
        <ul className="flex justify-around">
          {[
            { id: "overview", label: "현황" },
            { id: "team", label: "팀원별 현황" },
            { id: "progress", label: "진행 사항" },
            { id: "settings", label: "세팅" },
          ].map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer py-3 px-6 border-b-2 ${
                activeTab === tab.id ? "border-blue-500 text-blue-500" : "border-transparent text-gray-700"
              } hover:text-blue-500`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
