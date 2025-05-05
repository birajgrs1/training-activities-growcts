import { useEffect, useState } from "react";

const DemoUseEffect = () => {
  //   const [sayHello, setSayHello] = useState("");
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `You Clicked ${count}times.`;
    // console.log(`You Clicked ${count}times.`);
    // setCount(`You clicked`)
  },[count]);

  //   useEffect(() => {
  //     setSayHello("Hello, World!");
  //   },[]);

  return <div>{/* {sayHello} */}
  <button type="button" className="myBtn" onClick={()=> setCount(count+1)}>Count Clicked: {count}</button>
  </div>;
};

export default DemoUseEffect;

/*
useEffect hook
The useEffect hook allows you to perform side effects in a functional component.
Side effects include things like fetching data from an API, updating the DOM, or subscribing to an event.

useEffect(() => {
  // Side effect logic

  return () => {
    // Cleanup logic
  };
}, [dependencies]);

*/
