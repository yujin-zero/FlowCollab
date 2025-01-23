import React, { useState } from "react";

function SignUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameCheck = () => {
    // ID 중복 확인 로직 (서버 요청 등)
    setIsUsernameChecked(true);
    alert("사용 가능한 아이디입니다.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!isUsernameChecked) {
      alert("아이디 중복 확인을 해주세요.");
      return;
    }
    // 회원가입 로직 처리
    alert("회원가입이 완료되었습니다!");
  };

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

      {/* Sign Up Form */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            회원가입
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                아이디
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="flex-1 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleUsernameCheck}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  중복 확인
                </button>
              </div>
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
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-1">{passwordError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700"
              >
                닉네임
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              회원가입
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            이미 계정이 있으신가요?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
