import { useTodoStore } from '../store/todoStore';
import { Checkbox } from '@mui/material';
import { MdOutlineListAlt } from 'react-icons/md';

export default function FullRerenderList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-blue-600">
        <MdOutlineListAlt /> Full Re-render List
      </h2>
      <ul className="space-y-2 max-h-80 overflow-y-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 flex items-center justify-between border rounded"
          >
            <span>{todo.todo}</span>
            <Checkbox checked={todo.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
}
