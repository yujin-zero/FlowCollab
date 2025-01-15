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
          Collaborate Smarter with FlowCollab
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Manage projects, communicate effectively, and stay productive with our
          all-in-one collaboration platform.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => (window.location.href = "/signup")}
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => (window.location.href = "/about")}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-lg"
          >
            Learn More
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Real-Time Collaboration</h3>
            <p className="text-gray-600">
              Work seamlessly with your team in real-time with advanced tools.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Project Management</h3>
            <p className="text-gray-600">
              Keep track of tasks, milestones, and progress effortlessly.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Secure Environment</h3>
            <p className="text-gray-600">
              Your data is safe with our top-notch security infrastructure.
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
