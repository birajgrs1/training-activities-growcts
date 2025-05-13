import React from 'react';
import { useGetTodosQuery } from '../features/api/jsonPlaceholderApi';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Todos = () => {
  const { data, error, isLoading } = useGetTodosQuery(undefined, {
    pollingInterval: 5000, // Poll every 5 seconds
  });

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error loading todos</p>;

  return (
    <div className="section">
      <h2>Todos (Auto-Refresh every 5s)</h2>
      <ul>
        {data.slice(0, 10).map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {todo.title}
            {todo.completed ? (
              <FaCheckCircle color="green" title="Completed" />
            ) : (
              <FaTimesCircle color="red" title="Not Completed" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
