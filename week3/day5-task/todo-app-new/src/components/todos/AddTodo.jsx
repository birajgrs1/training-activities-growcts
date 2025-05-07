import React, { useState } from 'react';
import { Button } from '../ui/button';

function AddTodo({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-4/5 border border-gray-300 rounded px-3 py-2"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Task Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full md:w-4/5 border border-gray-300 rounded px-3 py-2"
            placeholder="Enter task description"
          />
        </div>

        <Button type="submit" className="px-4 py-1 text-sm">
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddTodo;
