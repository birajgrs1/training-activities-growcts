import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function TaskLists({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[18px]">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`card p-4 border border-gray-300 rounded-lg shadow-md ${task.completed ? 'bg-green-100' : 'bg-white'}`}
        >
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>

          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
                className="mr-2"
              />
              Mark as Complete
            </label>

            <div className="flex space-x-2">
              <button onClick={() => editTask(index)} className="text-blue-500">
                <FaEdit />
              </button>
              <button onClick={() => deleteTask(index)} className="text-red-500">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskLists;
