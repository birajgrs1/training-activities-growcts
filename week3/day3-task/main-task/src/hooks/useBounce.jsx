import { useEffect, useState } from "react";

export function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

/*
The useDebounce hook is useful for delaying the execution of functions or state updates until
a specified time period has passed without any further changes to the input value. 
This is especially useful in scenarios such as handling user input or triggering network requests, 
where it effectively reduces unnecessary computations and ensures that resource-intensive operations 
are only performed after a pause in the input activity.
*/
