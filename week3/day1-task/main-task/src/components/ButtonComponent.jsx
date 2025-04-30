import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ children, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };
  return (
    <button
      className={`px-4 py-2 m-2 rounded text-white ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  children: PropTypes.node.isRequired,
};

export default ButtonComponent;
