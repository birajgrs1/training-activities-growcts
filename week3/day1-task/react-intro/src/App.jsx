// import ClassComponentDemo from "../components/classComponent/ClassComponentDemo";
// import FunctionalComponentDemo from "../components/functionalComponent/FunctionalComponentDemo";
// import UseStateDemo from "../hooks/useState/useStateDemo"; 
import UseEffectDemo from "../hooks/useEffect/useEffectDemo"; 
function App() {
  // const name = "Biraj"
  return <>
  {/* <h2 className="bg-red-200 text-white font-bold text-[32px]">Hello, Everyone!</h2>
  <FunctionalComponentDemo  myName={name}/>       */}
  {/* passing props   */}
  {/* <hr />
  <ClassComponentDemo myName={name}/>     */}

  {/* Basic Hooks  */}
  {/* <UseStateDemo /> */}
  <UseEffectDemo></UseEffectDemo>
  </>;
}

export default App;
