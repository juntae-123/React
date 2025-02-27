import MatchTeam from "../MatchTeam";

const Matchimg = (props) => {
  const { Limg, Rimg } = props;
  return (
    <>
      <MatchTeam Limg={Limg} />

      <MatchTeam Rimg={Rimg} />
    </>
  );
};

export default Matchimg;
