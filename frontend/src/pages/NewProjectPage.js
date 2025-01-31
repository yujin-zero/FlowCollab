import React from "react";

function NewProjectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 헤더 */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          FlowCollab
        </h1>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-red-500 rounded-md text-sm hover:bg-red-600"
        >
          취소
        </button>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">새 프로젝트 만들기</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                프로젝트 이름
              </label>
              <input
                type="text"
                id="projectName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="프로젝트 이름을 입력하세요"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                프로젝트 설명
              </label>
              <textarea
                id="projectDescription"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="프로젝트 설명을 입력하세요"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-gray-300 rounded-md text-sm hover:bg-gray-400"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 rounded-md text-sm text-white hover:bg-green-600"
              >
                생성
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProjectPage;
