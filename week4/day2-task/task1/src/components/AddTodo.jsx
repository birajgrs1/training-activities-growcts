import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (title.trim() && description.trim()) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="flex items-center justify-center min-w-[650px]">
      <section className="p-8 mt-[40px] w-full max-w-[800px]">
        <div className="container mx-auto w-full max-w-[600px] border-2 border-[#cccabc] shadow-lg rounded-xl">
          <div className="adding-header text-center p-6 mb-6 bg-gray-100 rounded-t-xl">
            <h2 className="text-3xl font-extrabold text-gray-700">Add Todo</h2>
          </div>
          <div className="adding-form flex flex-col items-center justify-center p-6">
            <form className="w-full max-w-[450px] space-y-6 font-semibold" noValidate>
              <input
                type="text"
                className="w-full p-4 text-lg mb-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                id="title"
                placeholder="What is on your mind?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                rows="5"
                className="w-full p-4 text-lg mb-6 h-[150px] border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                id="description"
                placeholder="Add description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>

              <div className="btn-container flex items-center justify-center">
                 <button
                type="button"
                id="addBtn"
                className="bg-green-500 text-white font-bold text-lg cursor-pointer rounded-lg w-[20%] py-3 hover:bg-green-700 transition-all duration-200"
                onClick={handleAddTodo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 mx-auto"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#fff"
                >
                  <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
                </svg>
   
              </button>
              </div>
             
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTodo;
