import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Counter: {count}</h2>
      <div className="flex justify-center gap-4">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
          onClick={() => dispatch(increment())}
        >
          <FaPlus /> (inc)
        </button>
        <button
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow"
          onClick={() => dispatch(decrement())}
        >
          <FaMinus /> (dec)
        </button>
      </div>
    </div>
  );
};

export default Counter;
