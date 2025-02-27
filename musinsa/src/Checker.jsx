const Checker = (props) => {
  const { text, isChecked } = props;
  return (
    <div>
      <span style={{ color: isChecked ? "green" : "gray" }}>{text}</span>
    </div>
  );
};

export default Checker;
