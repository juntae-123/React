const Hellobtn = (props) => {
  const { click, num } = props;
  return (
    <>
      <button onClick={click}>{num}</button>;
    </>
  );
};

export default Hellobtn;
// <button onClick={click}>안녕 버튼</button>;

// const hi = () => {
//     console.log("하이루~");
//   };
//   const nameHi = (name) => {
//     console.log(`${name}님 반가워`);
//   };
//   const numConsole = (num) => {
//     console.log(`누르신 숫자는 ${num}입니다`);
//   };

//   <Hellobtn click={hi} />
//   <Hellobtn
//     click={() => {
//       nameHi(`alice`);
//     }}
//   />
//   <Hellobtn
//     click={() => {
//       nameHi(`trump`);
//     }}
//   />
//   <Hellobtn
//     click={() => {
//       nameHi(`alice , trump, jo`);
//     }}
//   />

//   {arr.map((v, i) => {
//     return <Hellobtn key={i} num={i} click={() => numConsole(i)} />;
//   })}
