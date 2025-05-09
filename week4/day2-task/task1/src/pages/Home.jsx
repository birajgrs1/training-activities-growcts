import AddTodo from "../components/AddTodo";
import EditTodos from "../components/EditTodos";
import TodoProvider from "../context/TodoProvider";

const Home = () => {


  return (
    <TodoProvider>
    
    <AddTodo/>
    <EditTodos/>

    </TodoProvider>
  );
};

export default Home;
