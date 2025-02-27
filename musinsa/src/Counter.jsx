const Counter = (props) => {
  const { plus, minus, cnt } = props;
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{cnt}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;
