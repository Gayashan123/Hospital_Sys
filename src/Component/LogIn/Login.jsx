import React, { useState, useEffect } from "react";
import hospital1 from "../../assets/Hospital.jpg";
import Create from "./Create";

const Login = ({ closeLogin }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [text, setText] = useState("Log In");

  useEffect(() => {
    setText(isCreating ? "Create Account" : "Log In");
  }, [isCreating]);

  const createAcc = () => {
    setIsCreating(true);
  };

  const login = () => {
    setIsCreating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-md p-6 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-800"
          onClick={closeLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-600">Hospital Care</h1>
          <p className="mt-2 text-gray-600">{text}</p>
        </div>

        {/* Login or Create Account Form */}
        {!isCreating ? (
          <div className="mt-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Welcome Back
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="01*********"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-300"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-teal-600 hover:underline"
                onClick={createAcc}
              >
                Create Account
              </a>
            </div>
          </div>
        ) : (
          <Create login={login} />
        )}

        {/* Right Side: Optional Image Section */}
       
      </div>
    </div>
  );
};

export default Login;
