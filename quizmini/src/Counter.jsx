const Counter = (props) => {
  const { num, plus, minus } = props;

  return (
    <div>
      <button onClick={minus}>이전</button>
      <span>{num}</span>
      <button onClick={plus}>다음</button>
    </div>
  );
};

export default Counter;

// import { useState } from "react";
// import Counter from "./Counter";

// function App() {
//   const [total, setTotal] = useState(Array(100).fill(0));

//   const plus = () => setTotal(prev=>{

//   })
//   return (
//     <>
//       <Counter setNum={setTotal} />
//       <Counter setNum={setTotal} />
//       <Counter setNum={setTotal} />
//       <span>{total}</span>
//     </>
//   );
// }

// export default App;
