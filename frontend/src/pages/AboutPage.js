import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          FlowCollab
        </h1>
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

      {/* About Section */}
      <main className="flex-1 text-center p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">FlowCollab 소개</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          FlowCollab은 팀의 생산성을 높이고 효과적인 협업을 가능하게 하는 플랫폼입니다. 실시간 협업, 프로젝트 관리,
          데이터 보안을 통해 더 나은 작업 환경을 제공합니다. 모든 기능은 사용하기 쉽고 직관적으로 설계되었습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">왜 FlowCollab인가요?</h3>
            <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
              <li>팀과 실시간으로 협업하며 아이디어를 공유할 수 있습니다.</li>
              <li>직관적인 UI로 빠르게 작업을 시작할 수 있습니다.</li>
              <li>보안 중심의 설계로 데이터가 안전하게 보호됩니다.</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">우리가 제공하는 서비스</h3>
            <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
              <li>실시간 채팅 및 파일 공유</li>
              <li>마일스톤 및 작업 관리</li>
              <li>다양한 통합 옵션으로 워크플로우 자동화</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-green-500 text-white text-center py-12">
        <h3 className="text-3xl font-bold mb-4">지금 FlowCollab을 시작해보세요!</h3>
        <p className="text-lg mb-6">
          FlowCollab을 사용하여 팀의 협업을 한 단계 끌어올리세요. 간단한 가입으로 모든 기능을 사용할 수 있습니다.
        </p>
        <button
          onClick={() => (window.location.href = "/signup")}
          className="px-8 py-4 bg-white text-green-500 font-bold rounded-md shadow hover:bg-gray-100 transition"
        >
          무료로 시작하기
        </button>
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

export default AboutPage;
