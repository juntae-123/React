import { CSSProperties } from "react";
import { color } from "./style";

type ButtonProps = {
  text: string;
  backgroundColor: 1 | 2 | 3;
};

const Button = ({ text, backgroundColor }: ButtonProps) => {
  const buttonstyle: CSSProperties = {
    border: "1px solid #efefef",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: color.blue[backgroundColor],
  };
  return <button style={buttonstyle}>{text}</button>;
};

export default Button;
