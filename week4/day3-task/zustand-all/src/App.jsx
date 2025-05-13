import "./App.css";
import Column from "./components/column/Columns";


const PLANNED = "planned";
const ONGOING = "ongoing";
const DONE = "done";

// import {create} from "zustand"

// const useStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
// }))


function App() {
  // const { count, increment } = useStore()
  return (
    <div className="app">
      {/* <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div> */}
      <Column state={PLANNED} />
      <Column state={ONGOING} />
      <Column state={DONE} />
    </div>
  );
}

export default App;


/*
import "./App.css";
import Column from "./components/column/Column";



function App() {
  return (
    <div className="app">
      <Column state={PLANNED} />
      <Column state={ONGOING} />
      <Column state={DONE} />
    </div>
  );
}


*/