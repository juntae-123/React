import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      value: "",
      todoList: [],

      setValue: (newValue) => set({ value: newValue }),

      addTodo: () =>
        set((state) => ({
          todoList: [...state.todoList, state.value],
          value: "",
        })),

      removeTodo: (index) =>
        set((state) => ({
          todoList: state.todoList.filter((v, i) => i !== index),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);
