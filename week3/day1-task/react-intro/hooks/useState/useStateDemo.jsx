import { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h2 className="text-2xl font-bold text-gray-700">Count Values: {count}</h2>

      <div className="flex space-x-4">
        <button
          onClick={increase}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseStateDemo;

