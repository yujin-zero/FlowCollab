import React, { useState } from "react";
import Overview from "../components/tabs/Overview";
import Team from "../components/tabs/Team";
import Progress from "../components/tabs/Progress";
import Settings from "../components/tabs/Settings";

function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "team":
        return <Team />;
      case "progress":
        return <Progress />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex justify-start items-center px-6 py-4 bg-gray-900 text-white">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          FlowCollab
        </h1>
      </header>
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
                activeTab === tab.id
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-700"
              } hover:text-blue-500`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-1 flex-col items-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;