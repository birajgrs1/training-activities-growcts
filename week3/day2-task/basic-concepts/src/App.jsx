// import { useEffect, useState } from "react";
import DemoFetch from "../components/DemoFetch";
import { Suspense } from "react";
function App() {
  // useEffect(() => {
  //   alert("useEffect used...");
  //   console.log("Why 2 times rendered ?");
  // }, []);

  // const [counter, setCounter] = useState(0);
  // console.log(counter);

  // function myFunc() {
  //   console.log("This is myFunction.");
  //   // alert("myfunction called when changing counter");
  // }
  // myFunc();

  // useEffect(() => {
  //   myFunc();
  // }, [counter]);

  return (
    <>
      {/* <h2 className="bg-red-300">Understanding useEffect</h2> */}
      {/* <button className="btn" onClick={() => setCounter(counter + 1)}>
        Counter
      </button> */}
      <div className="title flex items-center justify-center">
      <h1 className="text-[#333] mt-[20px] text-[28px] font-bold ">Product List</h1>
      </div>
      <Suspense fallback={<span className="loader"></span>}>
        <DemoFetch />
      </Suspense>
    </>
  );
}

export default App;
