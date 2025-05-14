import React from 'react';
import { useTodoStore } from '../store/todoStore';
import { Checkbox } from '@mui/material';
import { MdChecklist } from 'react-icons/md';

const TodoItem = React.memo(({ todo }) => {
  return (
    <li className="p-2 flex justify-between items-center border rounded">
      <span>{todo.todo}</span>
      <Checkbox checked={todo.completed} />
    </li>
  );
});

export default function SelectorList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-green-600">
        <MdChecklist /> Selector-based Re-render List
      </h2>
      <ul className="space-y-2 max-h-80 overflow-y-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
