import React from "react";

function LoginPage() {
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
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-blue-500 rounded-md text-sm hover:bg-blue-600"
        >
          메인으로 돌아가기
        </button>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            로그인
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                아이디
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              로그인
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            계정이 없으신가요?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:underline"
            >
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
