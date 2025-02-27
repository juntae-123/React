import { useState } from "react";

const Box = () => {
  const arr = ["pink", "black", "blue", "green"];
  const arr2 = ["rotate(360deg)"];
  const [num, setNum] = useState(0);
  const nextBtn = () => {
    setNum((prev) => {
      return prev == arr.length - 1 ? (prev = 0) : prev + 1;
    });
  };

  const bakBtn = () => {
    setNum((prev) => {
      return prev == 0 ? arr.length - 1 : prev - 1;
    });
  };

  return (
    <>
      <button onClick={nextBtn}>+++</button>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: arr[num],
          transform: arr2[num],
          transition: " all 0.7s ease",
        }}
      ></div>
      <button onClick={bakBtn}>---</button>
    </>
  );
};

export default Box;
