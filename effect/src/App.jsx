import { useBoolean, useLocalStorage } from "usehooks-ts";
import Mycard from "./Mycard";
import Button from "./Button";
import { bearsStore } from "./Stor";

function App() {
  const { increasePopulation } = bearsStore(); // const { increasePopulation } = bearStore();
  return (
    <div>
      {/* <button onClick={increasePopulation}>곰돌이</button> */}
      <Mycard />
      <button onClick={increasePopulation}>곰돌이 늘리기</button>
    </div>
  );
}

export default App;
