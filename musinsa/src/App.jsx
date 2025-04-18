import { useState } from "react";
import MusinsaSmallBtn from "./MusinsaSmallBtn";
import MusinsaMainBtn from "./MusinsaMainBtn";
import TadaId from "./TadaId";
import Checker from "./Checker";
import Button from "./Button";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const idValue = (e) => {
    setInputValue((prev) => e.target.value);
  };
  const pwValue = (e) => {
    setInputValue1((prev) => e.target.value);
  };

  const aaa = inputValue.length >= 6 && 20 >= inputValue.length;
  const aaa1 = inputValue1.length >= 8 && 20 >= inputValue1.length;
  const aaa2 = [..."!@#$%^&"].some((v) => inputValue1.includes(v));
  const ccc = aaa && aaa1 && aaa2;

  return (
    <>
      <TadaId change={idValue} placeholder={"아이디"}></TadaId>
      <Checker text={"6~20자 이내"} isChecked={aaa} />
      <TadaId change={pwValue} placeholder={"비밀번호"}></TadaId>
      <Checker
        text={"8~20자 이내"}
        isChecked={inputValue1.length >= 8 && 20 >= inputValue1.length}
      />
      <Checker
        text={"특수문자"}
        isChecked={[..."!@#$%^&"].some((v) => inputValue1.includes(v))}
      />
      <Button bbb={ccc} btnText={"회원가입"}></Button>
    </>
  );
}

export default App;
