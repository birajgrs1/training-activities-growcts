import { useState } from "react";
import TodoContext from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    setTodos([
      ...todos,
      { title, description, completed: false, id: Date.now() },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, updatedTitle, updatedDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: updatedTitle, description: updatedDescription }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleComplete, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
