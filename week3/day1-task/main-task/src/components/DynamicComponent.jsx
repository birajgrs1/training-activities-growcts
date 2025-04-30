import React from "react";
import PropTypes from "prop-types";

const dynamicComponent = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            value={index}
            className="p-2 border-b last:border-0"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

dynamicComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default dynamicComponent;
