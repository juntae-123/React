import { useState } from "react";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        onChange={(e) => {
          setInputValue((prev) => e.target.value);
        }}
        value={inputValue}
      />
      <span>{inputValue.length}</span>
    </>
  );
};

export default Input;
