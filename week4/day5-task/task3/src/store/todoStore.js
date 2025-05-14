import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  completedCount: 0,
  updateCompletedCount: (todos) =>
    set({ completedCount: todos.filter((t) => t.completed).length }),
}));

export const useCompletedCount = () =>
  useTodoStore((state) => state.completedCount, shallow);
