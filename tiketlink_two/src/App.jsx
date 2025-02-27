import Match from "./features/mathes/Match";
import MatchTeam from "./features/mathes/MatchTeam";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Match day="03.03" date="(월)" time="14:00"></Match>
      <MatchTeam
        Limg="https://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png"
        Rimg="https://image.toast.com/aaaaab/ticketlink/TKL_5/Gimcheon.png"
      />
    </div>
  );
}

export default App;
