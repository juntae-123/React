import { useState } from "react";
const NextBtn = () => {
  const [num, setNum] = useState(0);

  const nextBtn = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  const baBtn = () => {
    setNum((prev) => {
      return prev - 1;
    });
  };
  return (
    <>
      <button onClick={baBtn}>이전</button>
      <span style={{ color: num % 2 == 0 ? "blue" : "pink" }}>{num}</span>
      <button onClick={nextBtn}>다음</button>
    </>
  );
};

export default NextBtn;
