import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const EditTodos = () => {
  const { todos, deleteTodo, toggleComplete, editTodo } = useContext(TodoContext);

  return (
    <>
      <section className="py-5 ml-[330px] mt-[20px]">
        <div className="edit-tasks w-[100%] max-w-[450px]" id="task-lists">
          {todos.length === 0 ? (
            <p className="italic text-[20px] font-[600]">No todos yet. Add some!</p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="todo-item flex justify-between items-center p-3 border-b">
                <div className={`todo-content ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                  <h4 className="font-semibold">{todo.title}</h4>
                  <p>{todo.description}</p>
                </div>
                <div className="actions flex gap-3">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="text-[green] hover:scale-110 transition"
                  >
                    {todo.completed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="green" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="green" height="24" width="24" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:scale-110 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button
                    onClick={() => editTodo(todo.id, "Updated Title", "Updated Description")}
                    className="text-blue-500 hover:scale-110 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default EditTodos;
