import Matchdate from "./Matchdate";
import MatchDay from "./MatchDay";
import MatchTime from "./MatchTime";

const Alltext = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Matchdate date={"02.26"} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MatchDay day={"(수)"} />
        <MatchTime time={"15:00"} />
      </div>
    </div>
  );
};

export default Alltext;
