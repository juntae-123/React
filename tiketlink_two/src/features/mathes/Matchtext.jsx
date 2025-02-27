const Matchtext = (props) => {
  const { time, day, date } = props;
  return (
    <article style={{ display: "flex" }}>
      <div>
        <span style={{ fontSize: "35px" }}>{day}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </article>
  );
};

export default Matchtext;
