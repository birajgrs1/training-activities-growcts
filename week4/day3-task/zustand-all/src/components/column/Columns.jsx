import { useStore } from '../../store/store';
import Tasks from '../todo/Tasks';
import './Column.css';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import { shallow } from 'zustand/shallow';

export default function Column({ state }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const allTasks = useStore((store) => store.tasks, shallow);
  const tasks = allTasks.filter((task) => task.state === state);

  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className={classNames('column', { drop })}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        console.log(e);
        setDrop(false);
        if (draggedTask) {
          moveTask(draggedTask, state);
          setDraggedTask(null);
        }
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>

        {state === 'planned' && (
          <button onClick={() => setOpen(true)}>Add</button>
        )}
      </div>

      {tasks.map((task, index) => (
        <Tasks title={task.title} key={task.title || index} />
      ))}

      {state === 'planned' && open && (
        <div className="Modal">
          <div className="modalContent">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Enter task title"
            />
            <button
              onClick={() => {
                if (text.trim()) {
                  addTask(text.trim(), state);
                  setText('');
                  setOpen(false);
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function RefTest() {
  const ref = useRef();

  useEffect(() => {
    const unsub = useStore.subscribe(
      (store) => store.tasks,
      (tasks) => {
        ref.current = tasks;
      }
    );
    return unsub;
  }, []);

  return null;
}
