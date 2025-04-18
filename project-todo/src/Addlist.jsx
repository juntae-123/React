import { useEffect, useState } from "react";

const Addlist = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {}, []);

  const addTodo = () => {
    {
      const newTodo = { id: Date.now(), text: value, checkList: false };

      setTodo([...todo, newTodo]);
      setValue("");
    }
  };
  const deleteTodo = (v) => {
    setTodo(todo.filter((x) => x.id !== v));
  };

  const checkTodo = (v) => {
    setTodo(
      todo.map((x) => (x.id === v ? { ...x, checkList: !x.checkList } : x))
    );
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="할 일 입력"
      />
      <button onClick={value.trim() !== "" && addTodo}>추가</button>

      {todo.map((v) => (
        <div key={v.id}>
          <input
            type="checkbox"
            checked={v.checkList}
            onChange={() => checkTodo(v.id)}
          />
          <span
            style={{
              textDecorationLine: v.checkList ? "line-through" : "none",
            }}
          >
            {v.text}
          </span>

          <button onClick={() => deleteTodo(v.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Addlist;
