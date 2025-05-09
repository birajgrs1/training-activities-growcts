import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md m-2 w-[25%] ">
      <p className='font-bold text-[32px] text-purple-900 mb-[4px]'>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded">Increment</button>
      <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white p-2 rounded ml-2">Decrement</button>
    </div>
  );
};

export default Counter;
