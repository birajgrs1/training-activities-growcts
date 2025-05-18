import React from 'react';
import useCalendarStore from '../store/useCalendarStore';

export default function Header() {
  const {
    toggleView,
    openModal,
    undo,
    redo,
    view,
  } = useCalendarStore();

  return (
    <div className="flex justify-between items-center p-4 bg-pink-200 shadow rounded-md">
      <h1 className="text-xl font-semibold text-gray-800">My Calendar</h1>
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-pink-500 text-white rounded"
          onClick={openModal}
        >
          Add Event
        </button>
        <button
          className="px-3 py-1 bg-violet-500 text-white rounded"
          onClick={toggleView}
        >
          Toggle View ({view})
        </button>
        <button
          className="px-3 py-1 bg-gray-600 text-white rounded"
          onClick={undo}
        >
          Undo
        </button>
        <button
          className="px-3 py-1 bg-gray-400 text-white rounded"
          onClick={redo}
        >
          Redo
        </button>
      </div>
    </div>
  );
}
