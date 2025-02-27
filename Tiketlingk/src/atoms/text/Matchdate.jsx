import BaseText from "./BaseText";

const Matchdate = (props) => {
  const { date } = props;
  return <BaseText color={"black"} fontSize={"35px"} text={date}></BaseText>;
};
export default Matchdate;
