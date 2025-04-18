import React, { useState, useEffect } from "react";
import { styless } from "./styless";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos) as Todo[]);
    }
  }, []);

  useEffect(() => {
    {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (): void => {
    if (input.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((v) => v.id !== id));
  };

  const allDelete = (): void => {
    setTodos([]);
  };

  const toggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <article style={styless.layout}>
      <div style={styless.container}>
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="할 일을 입력하세요"
            style={styless.input}
          />
          <button onClick={addTodo} style={styless.addButton}>
            추가
          </button>
          <button onClick={allDelete} style={styless.deleteAllButton}>
            모두 삭제
          </button>
        </div>

        <ul style={styless.list}>
          {todos.map((todo) => (
            <li key={todo.id} style={styless.item}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span style={todo.completed ? styless.completed : {}}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styless.deleteButton}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TodoApp;
