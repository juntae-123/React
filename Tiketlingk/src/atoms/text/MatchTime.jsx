import BaseText from "./BaseText";

const MatchTime = (props) => {
  const { time } = props;
  return <BaseText color={"black"} fontSize={"15px"} text={time} />;
};
export default MatchTime;
