const InputLa = (props) => {
  const { label, choco, vanila } = props;

  return (
    <>
      <span>{label}</span>
      <div
        style={{
          padding: "5px 10px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      >
        <input
          onChange={choco}
          style={{ border: "none", outline: "none" }}
          type="text"
        />
      </div>
    </>
  );
};

export default InputLa;

// import { useState } from "react";
// import InputLa from "./InputLa";
// import Length from "./Length";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const change = (e) => {
//     setInputValue((prev) => e.target.value);
//   };
//   return (
//     <>
//       <InputLa choco={change} label={"email"} />
//       <Length length={inputValue.length} />
//     </>
//   );
// }

// export default App;
