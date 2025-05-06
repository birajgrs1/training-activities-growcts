import React, { useState } from "react";
import { setSession, setCookie } from "../utils/Storage";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setCookie("username", formData.name);
    setSession("userEmail", formData.email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-[14px]">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-[28rem]">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          User Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
