import BaseText from "./BaseText";

const MatchDay = (props) => {
  const { day } = props;
  return (
    <BaseText
      color={day == "(일)" ? "red" : "black"}
      fontSize={"15px"}
      text={day}
    />
  );
};
export default MatchDay;
