import React, { useState } from 'react';
import AddTodo from "./components/todos/AddTodo";
import TaskLists from "./components/todos/TaskLists";
import "./app.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (index) => {
    const newTitle = prompt('Edit Task Title', tasks[index].title);
    const newDescription = prompt('Edit Task Description', tasks[index].description);

    if (newTitle && newDescription) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, title: newTitle, description: newDescription } : task
      );
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="App max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Todo App</h1>
      <AddTodo addTask={addTask} />
      <TaskLists 
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
