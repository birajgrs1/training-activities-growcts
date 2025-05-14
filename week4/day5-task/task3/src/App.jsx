import React, { useEffect } from 'react';
import { useGetTodosQuery } from './features/todos/todosAPI';
import { useTodoStore } from './store/todoStore';
import FullRerenderList from "./components/FullRendererList"
import SelectorList from './components/SelectorList';
import { useCompletedCount } from './store/todoStore';
import { MdDoneAll } from 'react-icons/md';

export default function App() {
  const { data, isLoading } = useGetTodosQuery();
  const setTodos = useTodoStore((state) => state.setTodos);
  const updateCompletedCount = useTodoStore(
    (state) => state.updateCompletedCount
  );
  const completedCount = useCompletedCount();

  useEffect(() => {
    if (data?.todos) {
      setTodos(data.todos);
      updateCompletedCount(data.todos);
    }
  }, [data, setTodos, updateCompletedCount]);

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tasks Fetcher-Derived Global State</h1>

      <div className="text-center mb-4 text-lg text-purple-600 font-semibold flex justify-center items-center gap-2">
        <MdDoneAll /> Completed Tasks: {completedCount}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FullRerenderList />
        <SelectorList />
      </div>
    </div>
  );
}
