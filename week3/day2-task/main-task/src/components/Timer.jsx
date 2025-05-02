import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="flex items-end justify-center">
    <p className="text-purple-800 text-[22px] font-semibold mb-[12px]">Timer: {count}s</p>
    </div>;
};

export default Timer;
