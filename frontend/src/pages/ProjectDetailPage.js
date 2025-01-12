import React, { useState } from "react";

function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <div>Overview content goes here.</div>;
      case "team":
        return <div>Team status content goes here.</div>;
      case "progress":
        return <div>Progress content goes here.</div>;
      case "insights":
        return <div>Insights content goes here.</div>;
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
            { id: "insights", label: "인사이트" },
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
