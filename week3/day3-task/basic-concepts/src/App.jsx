// import IamParent from "./components/parent/IamParent";
// import DemoUseEffect from "./components/useEffect/DemoUseEffect";
// import UseStateDemo from "./components/useState/useStateDemo";
// import UseStateWithArrays from "./components/useState/UseStateWithArrays";
// import { ThemeProvider } from "./components/useContext/ThemeContext";
// import Body from "./components/allBodyTheme/Body";
// import UseReducerDemo from "./components/useReducer/UseReducerDemo";
// import WithoutCallback from "./components/callbackHooks/problem_without_callback/WithoutCallback"
// import UsingCallbackHook from "./components/callbackHooks/useCallback/UsingCallbackHook"

import UseRefDemo from "./components/useRefDemo/UseRefDemo"

function App() {
  return (
    <>
      {/* useState hook */}
      {/* // <UseStateDemo /> */}
      {/* <UseStateWithArrays/> */}

      {/* using UseEffect Hook */}
      {/* <DemoUseEffect/> */}

      {/*  useReducer hook */}
      {/* <UseReducerDemo /> */}

      {/* Without Callback */}
      {/* <WithoutCallback></WithoutCallback> */}

      {/* useCallback hook */}
      {/* <UsingCallbackHook></UsingCallbackHook> */}

      {/* using context  */}
      {/* <IamParent/> */}

      {/* <ThemeProvider>
       <Body></Body> 


    </ThemeProvider> */}

    {/* Using useRef  */}
    <UseRefDemo/>
    </>

    /*
   
    */
  );
}

export default App;
