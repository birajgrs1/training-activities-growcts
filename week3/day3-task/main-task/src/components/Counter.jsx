import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <div className="p-6 bg-yellow-50 rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">
        Counter
      </h2>
      <p className="text-gray-700">
        Current: <span className="font-bold">{count}</span>
      </p>
      <p className="text-gray-500">
        Previous: <span className="font-semibold">{prev ?? "N/A"}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
      >
        Increment
      </button>
    </div>
  );
}
