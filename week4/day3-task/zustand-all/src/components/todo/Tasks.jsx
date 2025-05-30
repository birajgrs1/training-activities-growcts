import { useStore } from "../../store/store";
import "./tasks.css";
import classNames from "classnames";
import trash from "../../assets/trash-2.svg";


const Tasks = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);

  if (!task) return null;

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div>
          <img src={trash} onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames('status', task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Tasks;
