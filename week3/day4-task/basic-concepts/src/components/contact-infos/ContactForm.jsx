import React from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate = useNavigate();
  return (
    <>
    <button
    className="myBtn"
    onClick={() => navigate("/contact", { replace: true })}
  >Back to contact page</button>
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <form className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <label
          htmlFor="textarea"
          className="block text-gray-700 font-medium mb-1"
        >
          Message
        </label>
        <textarea
          name="message"
          placeholder="Enter your messages here..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
