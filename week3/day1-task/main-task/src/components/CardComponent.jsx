import React from "react";

const CardComponent = ({ title, children, className = "" }) => (
  <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
    {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
    {children}
  </div>
);

export default CardComponent;
