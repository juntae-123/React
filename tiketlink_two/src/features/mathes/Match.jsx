import Matchtext from "./Matchtext";

const Match = (props) => {
  const { day, date, time } = props;
  return (
    <>
      <Matchtext day={day} date={date} time={time} />;
    </>
  );
};

export default Match;
