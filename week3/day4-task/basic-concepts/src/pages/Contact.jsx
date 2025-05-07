import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex items-center justify-center w-[100%]">
      <h1 className="text-[36px] font-semibold">Contact Page</h1>
    </div>
    <div className="go-to-info
    nt-[10px]">
      <button type="button" className="myBtn" onClick={()=>navigate('info')}>Go to Contact-Info</button>
    </div>
    <div className="go-to-form
    nt-[10px]">
      <button type="button" className="myBtn" onClick={()=>navigate('form')}>Go to Contact-form</button>
    </div>
    </>
  );
};

export default Contact;
