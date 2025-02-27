const MusinsaSmallBtn = (props) => {
  const { contents, isOption, a } = props;
  return (
    <div>
      <input onClick={a} type="checkbox" />
      <span>{contents}</span>
      <span>{isOption ? "(필수)" : "(선택)"}</span>
    </div>
  );
};

export default MusinsaSmallBtn;
