import React, { useState } from "react";
import hospital1 from "../../assets/Hospital.jpg"; // Use if necessary

const Create = ({ login, closeLogin,signup}) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = (event) => {
    event.preventDefault();
    // Handle account creation logic here
    console.log("Creating account with", name, mobile, password);
  };

  return (


    

    <div className="flex flex-col w-full m-2 bg-white rounded-lg shadow-lg md:w-auto">
      {/* Close Button */}
      
      
      {/* Left Side: Form Section */}
      <div className="w-full p-8 md:w-96">
        <h2 className="mb-6 text-3xl font-semibold text-teal-700">
          Create Account
        </h2>
        <form onSubmit={createAccount}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
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
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="01*********"
              className="w-full p-3 border border-gray-300 rounded-lg"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-teal-600 hover:underline"
            onClick={login} // Switch to Login view when clicked
          >
            Already have an account? Log in
          </a>
        </div>
      </div>

      {/* Right Side: Image Section */}
      
    </div>





















  );
};

export default Create;
