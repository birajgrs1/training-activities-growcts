import React from "react";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="myBtn"
        onClick={() => navigate("/contact", { replace: true })}
      >Back to contact page</button>
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-2">Name: <span className="font-normal">Demo</span></h2>
      <p className="text-gray-700 mb-1">Email: <span className="font-medium">demo@gmail.com</span></p>
      <span className="text-gray-700">Phone no: <span className="font-medium">9800000000</span></span>
    </div>
    </>
  );
};

export default ContactInfo;
