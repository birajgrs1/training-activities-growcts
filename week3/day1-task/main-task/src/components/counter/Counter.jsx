import React, { memo } from "react";
import PropTypes from "prop-types";

const Counter = memo(({ count, onIncrement, onDecrement }) => {
  console.log("Counter rendered");
  return (
    <div className="flex items-center gap-4 p-4">
      <button className="px-3 py-1 bg-gray-200 rounded" onClick={onDecrement}>
        -
      </button>
      <span className="text-xl">{count}</span>
      <button className="px-3 py-1 bg-gray-200 rounded" onClick={onIncrement}>
        +
      </button>
    </div>
  );
});

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
