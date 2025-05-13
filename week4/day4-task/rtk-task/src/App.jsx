import Posts from './components/Posts';
import Users from './components/Users';
import Todos from './components/Todos';
import ErrorLog from './features/errorLog/ErrorLog';

function App() {
  return (
    <div className="App">
      <h1>RTK Query Demo</h1>
      <Posts />
      <Users />
      <Todos />
      <ErrorLog />
    </div>
  );
}

export default App;
