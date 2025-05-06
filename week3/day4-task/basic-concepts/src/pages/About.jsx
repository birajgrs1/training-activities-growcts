import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="myBtn"
        onClick={() => navigate("/", { replace: true })}
      >
        Back to Home page
      </button>
      <div className="flex items-center justify-center w-[100%]">
        <h1 className="text-[36px] font-semibold">About Page</h1>
      </div>
    </>
  );
};

export default About;
