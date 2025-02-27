import { useState } from "react";

const Chikin = () => {
  const evo = ["🥚", "🐣", "🐥", "🐓", "🍗"];
  const [step, setStep] = useState(0);

  const plus = () => {
    setStep((prev) => (prev == evo.length - 1 ? prev : prev + 1));
  };
  const mi = () => {
    setStep((prev) => (prev == 0 ? prev : prev - 1));
  };
  return (
    <div>
      <button onClick={mi}>이전 스텝</button>
      <span>{evo[step]}</span>
      <button onClick={plus}>다음 스템</button>
    </div>
  );
};

export default Chikin;
