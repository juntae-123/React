import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [numArray, setNumArray] = useState(Array(10).fill(0));

  const numPlus = (i) => {
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray[i] = newArray[i] + 1;
      return newArray;
    });
  };
  const numminus = (i) => {
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray[i] = newArray[i] - 1;
      return newArray;
    });
  };

  return (
    <>
      {numArray.map((v, i) => (
        <Counter
          num={v}
          plus={() => {
            numPlus(i);
          }}
          minus={() => {
            numminus(i);
          }}
        />
      ))}
      <span>total:{numArray.reduce((a, c) => a + c)}</span>
    </>
  );
}
export default App;
