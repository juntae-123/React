const MatchTeam = (props) => {
  const { Limg, Rimg } = props;
  return (
    <div>
      <span>
        <img src={Limg} alt="" style={{ width: "100px" }} />
      </span>
      <span>VS</span>
      <span>
        <img src={Rimg} alt="" style={{ width: "100px" }} />
      </span>
    </div>
  );
};

export default MatchTeam;
