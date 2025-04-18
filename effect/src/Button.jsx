import { bearsStore } from "./Stor";

const Button = () => {
  const { bears } = bearsStore();
  return <button>버튼{bears}</button>;
};

export default Button;
