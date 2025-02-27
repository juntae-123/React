const Button = (props) => {
  const { bbb, btnText } = props;
  return (
    <button style={{ backgroundColor: bbb ? "green" : "yellow" }}>
      {btnText}
    </button>
  );
};

export default Button;
