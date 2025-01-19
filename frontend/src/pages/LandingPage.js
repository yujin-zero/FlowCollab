import React from "react";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">FlowCollab</h1>
        <div className="space-x-4">
          <button
            onClick={() => (window.location.href = "/login")}
            className="px-4 py-2 bg-blue-500 rounded-md text-sm hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => (window.location.href = "/signup")}
            className="px-4 py-2 bg-green-500 rounded-md text-sm hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          FlowCollab과 함께 스마트하게 협업하세요
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          프로젝트를 관리하고, 효과적으로 소통하며, 생산성을 높일 수 있는 올인원 협업 플랫폼입니다.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => (window.location.href = "/signup")}
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg"
          >
            시작하기
          </button>
          <button
            onClick={() => (window.location.href = "/about")}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-lg"
          >
            더 알아보기
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">실시간 협업</h3>
            <p className="text-gray-600">
              고급 도구를 통해 팀과 실시간으로 원활하게 작업하세요.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">프로젝트 관리</h3>
            <p className="text-gray-600">
              작업, 마일스톤 및 진행 상황을 손쉽게 추적하세요.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">안전한 환경</h3>
            <p className="text-gray-600">
              최고의 보안 인프라로 데이터를 안전하게 보호합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} FlowCollab. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
