import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="myBtn"
        onClick={() => navigate("/about", { replace: true })}
      >
        Go to About page
      </button>
      <div className="flex items-center justify-center w-[100%]">
        <h1 className="text-[36px] font-semibold">Home Page</h1>
      </div>
    </>
  );
};

export default Home;
