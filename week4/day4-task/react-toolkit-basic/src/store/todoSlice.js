import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoapp",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    clearTodo: (state) => {
      state.todos = [];
    },
  },
});
console.log("Actions:", todoSlice);

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;
